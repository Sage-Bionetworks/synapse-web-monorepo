# A framework for Synapse portals

The synapse-portal-framework project contains shared code for all Synapse portals.

### Example sites:

- [AMP-AD Knowledge Portal](https://adknowledgeportal.synapse.org)
- [NF Data Portal](https://nf.synapse.org)
- [Cancer Complexity Data Portal](https://cancercomplexity.synapse.org)

### Building a portal

- The [../portals/](../portals) directory contains each portal configuration
- To create a new portal, copy an existing portal configuration (found in [../portals/](../portals/)) that most closely matches the target configuration, and update it to match the new portal design requirements.

### Running a portal locally

To run a portal locally, navigate to the directory of the portal configuration, and run `pnpm start`.

# Build/Deploy Process

Note - [Jenkins](http://build-system-portals.sagebase.org:8080/login) is accessible only through VPN, reach out to IT to set this up.

## Automatic Updates to Staging

When a pull request is merged, the following will occur:

If `package.json` was updated all the staging websites will be built automatically.

If any file under `../portals/portal-name/*` is updated then the staging site for **portal-name** will update.
e.g. updating `../portals/adknowledgeportal/routesConfig.ts` will update `staging.adknowledgeportal.synapse.org`.

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
