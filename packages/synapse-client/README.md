# synapse-client

This package generates TypeScript/JavaScript models and API clients for [Synapse](https://www.synapse.org/), a collaborative, open-source research platform that allows teams to share data, track analyses, and collaborate.

To generate code, we use the [Synapse REST Services](https://rest-docs.synapse.org/rest/index.html) OpenAPI Definition and the [OpenAPI Generator](https://openapi-generator.tech/). This package will also maintain wrappers, utility classes, and configuration used to improve developer experience.

## Generating code

To generate code for the models and services, simply run `pnpm nx run synapse-client:build`. This will trigger the OpenAPI Generator CLI and also run any scripts that may be needed to improve code generation.

## Upgrading the OpenAPI definition

At this time, the only published versions of the Synapse OpenAPI definition are for the current production stack, and for the staging stack. The staging stack typically elevated to production the following week.
We commit a stable copy of the OpenAPI definition to version control to ensure our generated code is consistent and does not cause unexpected regressions as the OpenAPI definition changes.

To update the OpenAPI definition, run `pnpm get-spec` to get the latest production OpenAPI definition, which will be saved in `./src/spec/openapispecification.json`.
You can also run `pnpm get-spec:staging` to get the OpenAPI definition associated with the current staging release. After retrieving the specification, you will once again need to run `pnpm build`.
Once you have new models built, tests and type-checking on the full project should be run to ensure the new spec does not introduce errors. Our CI process will catch this automatically.

## Upgrading the openapi-generator version and overriding templates

The current version of openapi-generator can be set by changing the version number set in the `pnpm configure` script.
When the version is changed, our template overrides should be updated.

To copy all the base template files into the `./out` directory, run the following command:

```shell
npx openapi-generator-cli author template -g typescript-fetch
```

Any template files that do not need to be modified or overridden can be deleted.
Existing template customizations must then be re-implemented in the new templates. The complexity of this task depends on how drastically the templates have changed upstream.
For this reason, we should limit the changes we make to templates, and clearly indicate the change and its impact.

We also maintain tests that verify that any custom changes we make to the templates function as expected, which should pass after each upgrade.
