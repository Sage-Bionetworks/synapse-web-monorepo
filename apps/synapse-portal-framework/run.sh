#!/bin/bash -e
# Usage:
#   Sync current with staging:
#     ./run.sh push-staging [portal-name]
#
#   Sync production with production:
#     ./run.sh WARNING-push-production [portal-name]

# Verify both arguments were specified
if [[ -z $1 || -z $2 ]]; then
  echo "Error: Usage -
  Sync current with staging:
    ./run.sh push-staging [portal-name]

  Sync production with production:
    ./run.sh WARNING-push-production [portal-name]
  "
  exit 1
fi

# Verify first argument is either WARNING-push-production or push-staging
if [ "$1" != "WARNING-push-production" ] && [ "$1" != "push-staging" ]; then
  echo "Error: Incorrect argument $1, should be either WARNING-push-production or push-staging
  Usage:
    Sync current with staging:
      ./run.sh push-staging [portal-name]

    Sync production with production:
      ./run.sh WARNING-push-production [portal-name]
    "
  exit 1
fi

# PORTAL_APP="$(pnpm nx show project "$2" --json | jq -r '.sourceRoot')"
# jq is not installed on the build machine, so use node
PORTAL_APP="$(pnpm nx show project "$2" --json | node -pe "JSON.parse(require('fs').readFileSync('/dev/stdin').toString()).sourceRoot")"

# Check that directory exists
if [ ! -d ./"$PORTAL_APP" ]; then
  echo "Error: Folder $PORTAL_APP doesn't exist"
  exit 1
fi

cd ./"$PORTAL_APP"

chmod +x ./src/config/scripts/exportS3StagingBucketName.sh
# source lets the child process run in the current shell instead of creating its own
source ./src/config/scripts/exportS3StagingBucketName.sh
# check they defined the s3 bucket variables
if [[ -z "$S3_STAGING_BUCKET_LOCATION" || -z "$CF_STAGING_DIST_ID" ]]; then
  echo 'Error: exportS3StagingBucketName.sh must export bash variables S3_STAGING_BUCKET_LOCATION and CF_STAGING_DIST_ID'
  exit 1
fi
chmod +x ./src/config/scripts/exportS3ProductionBucketName.sh
source  ./src/config/scripts/exportS3ProductionBucketName.sh
if [[ -z "$S3_PRODUCTION_BUCK_LOCATION" || -z "$CF_PRODUCTION_DIST_ID" ]]; then
  echo 'Error: exportS3ProductionBucketName.sh must export bash variables S3_PRODUCTION_BUCK_LOCATION and CF_PRODUCTION_DIST_ID'
  exit 1
fi

if [ "$1" = "WARNING-push-production" ]; then
  # sync staging with prod
  aws s3 sync --delete --cache-control max-age=3000 "$S3_STAGING_BUCKET_LOCATION" "$S3_PRODUCTION_BUCK_LOCATION"
  # update robots.txt
cat > ./robots.txt <<EOL
User-agent: * 
Allow: /
EOL
  aws s3 cp --cache-control max-age=3000 ./robots.txt "$S3_PRODUCTION_BUCK_LOCATION"
  date > ./deploy_date.txt
  aws s3 cp --cache-control max-age=3000 ./deploy_date.txt "$S3_PRODUCTION_BUCK_LOCATION"
  aws cloudfront create-invalidation --distribution-id "$CF_PRODUCTION_DIST_ID" --paths "/*"

elif [ "$1" = "push-staging" ]; then
  # build is done by build step (like deploy.sh used to)

  # generate robots.txt
cat > ./build/robots.txt <<EOL
User-agent: * 
Disallow: /
EOL
  date > ./build/deploy_date.txt
  aws s3 sync --delete --cache-control max-age=0 ./build "$S3_STAGING_BUCKET_LOCATION"
  aws cloudfront create-invalidation --distribution-id "$CF_STAGING_DIST_ID" --paths "/*"
fi
echo 'Success - finished!'
exit 0