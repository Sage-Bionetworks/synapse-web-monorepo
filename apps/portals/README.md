# A single codebase for Synapse portals

### Example sites:

- [AMP-AD Knowledge Portal](https://adknowledgeportal.synapse.org)
- [NF Data Portal](https://nf.synapse.org)
- [CSBC / PS-ON Data Portal](https://csbc-pson.synapse.org)

### Building a portal

- src/configurations is the folder of all existing portals
- src/configuration/config-shell is a portal template that can be copied and filled out where the TODOs are written.

### Running a portal locally

To run a portal locally, use the linkConfig script, which copies configuration files for the portal that you specify
(replace \<portal-name\> with one of the subfolder names, like `nf` or `adknowledgeportal`):

```
./linkConfig.sh <portal-name>
```

# Build/Deploy Process

Note - [Jenkins](http://build-system-portals.sagebase.org:8080/login) is accessible only through VPN, reach out to IT to set this up.

## Automatic Updates to Staging

When a pull request is merged, the following will occur:

If `package.json` was updated all the staging websites will be built automatically.

If any file under `src/configurations/portal-name/*` is updated then the staging site for **portal-name** will update.
e.g. updating `src/configurations/adknoweldgeportal/routesConfig.ts` will update adknowledgeportal staging.

## Jenkins Jobs

Job Naming:
Each portal has its own staging job, named `deploy-portalname-staging`, e.g. `deploy-cancercomplexity-staging`

Making a new staging job

- Copy one of the staging jobs
- Change the `Source Code Management/Additional Behaviours/Included Regions` section to only include that portal's configuration folder.
- Change the `Build/Execute Shell` section to build the portal

## Deploy the Staging version to Production

Run `deploy-portal-production` with parameters, using the portal's folder name, e.g. 'nf' or 'cancercomplexity'
This will copy everything from the staging bucket to the production bucket for that portal. Approval from the portal owner must be obtained before running this job.

## Jenkins build script

The code that is run on jenkins is in `run.sh`

Usage:
Sync current with staging:
`$ ./run.sh push-staging [portal-name]`

Sync production with production:
`$ ./run.sh WARNING-push-production [portal-name]`
