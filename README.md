## This project is code for OneSage user account portal.

_Production_ branch is automatically deployed to https://accounts.sagebionetworks.org

_Staging_ branch is automatically deployed to https://staging.accounts.sagebionetworks.org

## Entry points

### Account Registration

_/_

The root prompts you to sign in or register for an account. Once this is complete, the user will be redirected back to the calling app (see the note about query parameters below).

### Account Registration

_/register1_

Takes you to a place where you can create a Sage account. It links to Google-based account creation, and standard Login (if you already have an account).

### Profile Validation

_/authenticated/validate_

Walks you through account identity verification. This will prompt for login if a session is not already established.

### My Account

_/authenticated/myaccount_

Takes you to your Sage Account Settings page. This will prompt for login if a session is not already established.

### Joining a team

_/jointeam?signedToken=_

When inviting a Synapse user (or external email) to join a Synapse Team, this route should be used. The Synapse backend will append a (hex encoded) signed token to this route. The OneSage website will process this accordingly. If the user already has an account, they will be immediately added to the Team. If they do not yet have an account, this will lead the user through the registration process, and conclude with attempting to add the user to the Team.

### Force logout

_/logout_

### Note about query parameters

All routes look for the query parameter 'appId' to set the source app configuration (icon, application name, ...). For example, '/register1?appId=MTB' can be used to register for a new Sage Bionetworks account with the Mobile Toolbox product branding.
All routes also looks for the query parameter 'redirectURL'. This is used to redirect back to the source app on various pages on the OneSage website.

This will immediately log you out of your account.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
