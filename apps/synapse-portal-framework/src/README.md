This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Structure of the codebase

<pre>
├── App.scss              # Main styling for the application, uses variables from test-configuration/_overrides.scss
├── App.tsx               # Main entry point with route configuration
├── Footer.tsx            # Footer with contact us/terms of service
├── Header.tsx            # Home page header with summary and title
├── Home.tsx              # Home page
├── Navbar.tsx            # Navbar that reads over the routes
├── RouteResolver.tsx     # For any subpage not in Home/Explore this hooks up the configuration to that URL
├── config                # The main configuration folder read for the app 
├── test-configuration    # Folder with an example config that gets used for testing
├── index.ts              # Boilerplate code that hooks the application up with index.html
├── components            # portal specific components that are not related to layout
├── configurations        # folder containing all the portal configs
├── tests                 # all the tests for the application
└── types                 # types used throughout the project
</pre>

# Configuration Example

For full code see [test-configuration](https://github.com/portals/app-template/src/test-configuration)

Structure of test-configuration

<pre>
test-configuration/
├── .env                                    # Configure portal-specific environment variables, such as title and description
├── exploreHomeConfiguration                # Configure the data for explore and home page
│   ├── standards.ts                             
│   ├── index.ts                            
│   └── publications.ts                     
├── footerConfig.ts                         # Configure the footer data -- terms of use, contact us
├── headerConfig.ts                         # Configure the text on the header of the home page
├── routesConfig.ts                         # Configure main routes for the app -- what is available and what synapse object 
├── scripts                                 # build scripts that export s3 bucket names
│   ├── exportS3ProductionBucketName.sh     
│   └── exportS3StagingBucketName.sh        
└── style                                   
    ├── _variable_overrides.scss            # sets SCSS variable like the main theme colors
    ├── _style_overrides.scss               # custom SCSS selectors to override the defaults
    └── header.svg                          # OPTIONAL: File that will be used for background-img on home page header
</pre>

## SCSS Compilation Strategy

We are currently using [Dart Sass](https://sass-lang.com/dart-sass) and taking advantage of its [module system](https://sass-lang.com/documentation/at-rules/use). Key differences between the module system and the legacy `@import` rule are

- `@use` imports can use namespaces. They do not load global variables.
- Each file is loaded only once if called via `@use`.

To support building the package without specifying a portal configuration, we have empty overrides files at [src/style/\_variable_overrides.scss](style/_variable_overrides.scss) and [src/style/\_style_overrides.scss](style/_style_overrides.scss). Without these files, Sass compilation will fail.

We ensure that overrides in Portal configurations are used over these blank configurations by placing the active configuration folder earlier in the order of the (load paths)[https://sass-lang.com/documentation/cli/dart-sass#load-path] in our `build-css` command in [package.json](../package.json).

# Adding new components from SRC or the portal

To use a new component, simply export it from the package in which it is written and import it on the portal page in which you will use it.

Note - if exposing a component from the portal side, you will need to make sure that the component is exported from [index.ts](./portal-components/index.ts).

# Key Portal Components

## DetailsPages

The detail pages ([e.g.](https://staging.adknowledgeportal.synapse.org/Explore/Studies/DetailsPage?Study=syn5550404])) give
a deeper dive into a particular portal section. Read more in the [component](components/DetailsPage/DetailsPage.tsx).

# How to Log In to a Portal Running on Localhost

To log in to the portal running on localhost, follow these steps:

1. Start the SageAccountWeb application locally by navigating to the app directory and running pnpm start (located in apps/SageAccountWeb).
2. Once the application is running, log in to the local Accounts site.
3. After successfully logging in, refresh the portal page to complete the process.
