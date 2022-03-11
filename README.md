### This project is code for Sage Bionetworks user account portal.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `yarn link-src` `yarn unlink-src`
To run a portal with a local version of SRC run the following commands:

```sh
# In Synapse-React-Client/
# Symlink the package itself as well as the local react, react-router, and react-router-dom packages
$ yarn link-src
$ yarn build

# In this project
$ yarn link-src
$ yarn start
# Note that you can make changes in the SRC project and reflect
# them in this project by running yarn build again. This project
# can continue to run as you make changes.
```

To unlink synapse react-client run `yarn unlink-src`

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
