#!/bin/bash -e
# Usage:
#   Sync current with staging:
#     ./deploy.sh push-staging [portal-name]
#
#   Sync production with production:
#     ./deploy.sh WARNING-push-production [portal-name]

# Verify both arguments were specified
if [[ -z $1 || -z $2 ]]; then
  echo "Error: Usage -
  Sync current with staging:
    ./deploy.sh push-staging [portal-name]

  Sync production with production:
    ./deploy.sh WARNING-push-production [portal-name]
  "
  exit 1
fi

# Verify first argument is either WARNING-push-production or push-staging
if [ $1 != "WARNING-push-production" ] && [ $1 != "push-staging" ]; then
  echo "Error: Incorrect argument $1, should be either WARNING-push-production or push-staging
  Usage:
    Sync current with staging:
      ./deploy.sh push-staging [portal-name]

    Sync production with production:
      ./deploy.sh WARNING-push-production [portal-name]
    "
  exit 1
fi

PORTAL_CONFIGURATION=src/config

# Check that directory exists
if [ ! -d $PORTAL_CONFIGURATION ]; then
  echo "Error: Folder $PORTAL_CONFIGURATION doesn't exit"
  exit 1
fi

chmod +x ./$PORTAL_CONFIGURATION/scripts/exportS3StagingBucketName.sh
# source lets the child process run in the current shell instead of creating its own
source ./$PORTAL_CONFIGURATION/scripts/exportS3StagingBucketName.sh
# check they defined the s3 bucket variable
if [ -z "$S3_STAGING_BUCKET_LOCATION" ]; then
  echo 'Error: exportS3StagingBucketName.sh must export bash variable S3_STAGING_BUCKET_LOCATION'
  exit 1
fi
chmod +x ./$PORTAL_CONFIGURATION/scripts/exportS3ProductionBucketName.sh
source  ./$PORTAL_CONFIGURATION/scripts/exportS3ProductionBucketName.sh
if [ -z "$S3_PRODUCTION_BUCK_LOCATION" ]; then
  echo 'Error: exportS3ProductionBucketName.sh must export bash variable S3_PRODUCTION_BUCK_LOCATION'
  exit 1
fi

if [ "$1" = "WARNING-push-production" ]; then
  # sync staging with prod
  aws s3 sync --delete --cache-control max-age=3000 $S3_STAGING_BUCKET_LOCATION $S3_PRODUCTION_BUCK_LOCATION
  # update robots.txt
cat > ./robots.txt <<EOL
User-agent: * 
Allow: /
EOL
  aws s3 cp --cache-control max-age=3000 ./robots.txt $S3_PRODUCTION_BUCK_LOCATION
  date > ./deploy_date.txt
  aws s3 cp --cache-control max-age=3000 ./deploy_date.txt $S3_PRODUCTION_BUCK_LOCATION

elif [ "$1" = "push-staging" ]; then
  # build was done by build step
  # generate robots.txt
cat > ./build/robots.txt <<EOL
User-agent: * 
Disallow: /
EOL
  date > ./build/deploy_date.txt
  aws s3 sync --delete --cache-control max-age=0 ./build $S3_STAGING_BUCKET_LOCATION
fi
echo 'Success - finished!'
exit 0