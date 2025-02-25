## This project is code for OneSage user account portal.

_Production_ branch is automatically deployed to https://accounts.synapse.org

_Staging_ branch is automatically deployed to https://staging.accounts.synapse.org

## How do I add my app to OneSage?

1. [Create an OAuth 2.0 Client for use with Synapse](https://help.synapse.org/docs/Using-Synapse-as-an-OAuth-Server.2048327904.html). You can skip this step if you have an internal app running on a known .synapse.org subdomain.
2. Create a new Jira ticket in the [PORTALS project](https://sagebionetworks.jira.com/jira/software/c/projects/PORTALS/issues), or [open a Service Desk ticket](https://sagebionetworks.jira.com/servicedesk/customer/portal/9) if outside Sage, requesting that your app be listed in OneSage. Please include the following information:
   - **Default URL**: Where can we find the production version of this app?
   - **Name**: The friendly name of your app
   - **Logo**: Your app logo. The logo should contain the name of your app, and preferably be a svg.
   - **Primary and Secondary colors**: These are used to generate a palette.
   - **Description**: A plain text short description of your app (<200 characters).
   - **OAuth Client ID**: If using an OAuth Client to connect, please provide your 'client ID'. This value will be used as your 'appId'.
3. Web Engineering will send you an 'appId'. To show the user a branded experience, the 'appId' should be given as a query parameter when you link to the OneSage website for sign-in or account registration (see below). After account creation, users will be redirected to the URL that you provided above (as the Default URL).

_Note to Web Engineer:_ We are currently using [this Synapse Table](https://www.synapse.org/Synapse:syn45291362/tables/) as the data source.

## Entry points

### Redirect to App

_/_

The root prompts you to sign in or register for an account. Once this is complete, the user will be redirected back to the calling app (see the note about query parameters below).

### Account Registration

_/register1_

Takes you to a place where you can create a Sage account. It links to Google-based account creation, or email-based account creation.

### Profile Validation

_/authenticated/validate_

Walks you through account identity verification. This will prompt for login if a session is not already established.

### My Account

_/authenticated/myaccount_

Takes you to your Sage Account Settings page. This will prompt for login if a session is not already established.

### Joining a team

_/jointeam?signedToken=_

When inviting a Synapse user (or external email) to join a Synapse Team, this route should be used. The Synapse backend will append a (hex encoded) signed token to this route. The OneSage website will process this accordingly. If the user already has an account, they will be immediately added to the Team. If they do not yet have an account, this will lead the user through the registration process and eventually add the user to the Team.

### Force logout

_/logout_

This will immediately log you out of your account.

### Note about query parameters

All routes look for the query parameter 'appId' to set the source app configuration (icon, application name, ...). For example, '/register1?appId=MTB' can be used to register for a new Sage Bionetworks account with the Mobile Toolbox product branding.

## Available Scripts

In the project directory, you can run:

### `pnpm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `pnpm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `pnpm build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Pointing to another stack

To start or build the app and have it point to another stack, add the parameter --mode=\<stack\> where stack is one of:

- production
- staging
- development

For example, to start the app and have it point to the production stack, run:

```
pnpm start --mode=production
```

We are using [Vite to pass environment variables](https://vite.dev/guide/env-and-mode#env-variables-and-modes) into the
app. This command would cause Vite to load the environment variables from the .env and the .env.production files.
