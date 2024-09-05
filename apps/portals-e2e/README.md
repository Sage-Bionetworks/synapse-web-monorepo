# Portals End-to-End Testing Workflow

## Setting up End-to-End testing for a New Portal

1. Add the Portal's `apps/portals/` directory name to the `Portal` type in `src/configs/routesConfig.ts`, e.g. `elportal` for Elite Portal.
2. Add the Portal to relevant configuration files in `src/configs`, e.g. use `src/configs/exploreConfig.ts` to list the expected objects (cards, charts, table, people) on each Explore tab of the Portal.
3. Ensure that the e2e tests for the Portal run locally, as described [here](#local).
4. Add the Portal configurations directory name to the `PORTALS` environment variable in the GitHub Action workflow for end-to-end testing: `.github/workflows/end-to-end-test-portals.yml`.
5. Ensure that the e2e tests for the Portal run in CI, as described [here](#ci).

## Dev Setup

### Local

1. Create a `.env` file with the following environment variables: `PORTAL`. The value should match one of the Portal directory names in `apps/portals/`, e.g. 'adknowledgeportal'.
2. Build the Portal: `pnpm portal:build`.
3. Start the Portal: `pnpm portal:start`. The Portal will be available at `http://localhost:3000`.
4. Run tests: `pnpm e2e`. Tests can be run multiple times against the running Portal.
5. Stop the Portal: `pnpm portal:stop`.

### CI

In your forked repository, ensure that [Actions](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository) are enabled.

In your forked repository, tests will run on each push to your forked repository. In the Sage-Bionetworks repo, tests will run on each PR or push to main. In both cases, the Playwright report will be saved as a GitHub Artifact.

The GitHub UI or CLI can be used to view the reports:

- GitHub UI
  - Navigate to the Action run summary page.
  - Download the report named "html-report--attempt-{number}". _Note:_ only the report from the latest attempt will be available.
  - Unzip and move the files into the `playwright-report` directory in the `apps/portals` subdirectory of synapse-web-monorepo.
  - Run `yarn e2e:report` to view the HTML report in the browser.
- GitHub CLI
  - Install [GitHub CLI](https://cli.github.com/), if necessary.
  - Install [jq](https://jqlang.github.io/jq/download/), if necessary.
  - [Authenticate](https://cli.github.com/manual/gh_auth_login) with a GitHub host, if necessary.
  - Run `e2e/view_github_report.sh` with the following arguments: GitHub repo owner name and the GitHub run ID of the report to view. The HTML report will open in the browser.
