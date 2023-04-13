#!/bin/bash -e
# Usage:
#   ./replaceIndexHtmlStaticValues.sh [portal-name]

# Verify argument was specified
if [[ -z $1 ]]; then
  echo "Error: Usage -
  Replace index.html variables using current portal name:
    ./replaceIndexHtmlStaticValues.sh [portal-name]
  "
  exit 1
fi

chmod +x ./parseJsonKeyValue.py
PORTAL_NAME=`./parseJsonKeyValue.py name`
PORTAL_DESCRIPTION=`./parseJsonKeyValue.py description`
PORTAL_PROD_URL="https:\/\/$1.synapse.org"

sed -i "s/%PRODUCTION_URL%/$PORTAL_PROD_URL/g" ./public/index.html
sed -i "s/%PORTAL_NAME%/$PORTAL_NAME/g" ./public/index.html
sed -i "s/%PORTAL_DESCRIPTION%/$PORTAL_DESCRIPTION/g" ./public/index.html
