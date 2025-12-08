import{x as p,a2 as m,jO as s,b as r,cy as n,fT as g}from"./iframe-DslgKmO_.js";import{r as l}from"./mockHomepageQueryResultData-CrSd6kF9.js";import{b as c}from"./SynapseHomepageV2-DsXxvh6F.js";import"./index-r8ZA1smB.js";import"./SageFullLogo-DJYEpl3_.js";import"./SynapsePlans-C5UeOhco.js";import"./index-BFji_VzE.js";import"./Plot-CSBrTKcC.js";import"./index-Chjiymov.js";import"./Card-CiAcqMR5.js";import"./Chip-BUIb0Z0i.js";import"./index-CeAJJ3j5.js";import"./SynapseNavDrawer-CGBMx01B.js";import"./useDataAccessSubmission-Cu1LchBz.js";import"./useInfiniteQuery-DxxIkqas.js";import"./useDownloadList-CF45iTfw.js";import"./waitForAsyncResult-B3GGJxY9.js";import"./useUserBundle-tammJvdO.js";import"./useSuspenseQuery-x1rZi4HF.js";import"./CreateProjectModal-Dm51d4rG.js";import"./ConfirmationDialog-CWzD-n3R.js";import"./DialogBase-Ityd6EiB.js";import"./Close-3QTznoYW.js";import"./HelpPopover-D-66GZ4O.js";import"./MarkdownPopover-Efr0b0ny.js";import"./LightTooltip-DtnUKaEX.js";import"./MarkdownSynapse-BtLlVZBF.js";import"./SkeletonButton-CrnZOVdp.js";import"./SkeletonInlineBlock-iMtCHDfe.js";import"./SkeletonTable-B6rYfEE0.js";import"./SkeletonParagraph-CWIA3BjK.js";import"./SynapseHomepageNavBar-YERA0_jG.js";import"./SageResourcesPopover-BWTbJiBX.js";import"./Grid-DPWZ7bDy.js";import"./MenuItem-CTidO0-V.js";import"./UserBadge-BanEe0Rj.js";import"./Slide-DrBE8msl.js";import"./InputAdornment-B8fX64h3.js";import"./listItemButtonClasses-XKo5iVko.js";import"./Badge-zWhMSQqn.js";import"./usePreviousProps-D79KkPg-.js";import"./useGetEntityHeaders-DurlUPhZ.js";import"./NavigateNext-C1E7ADmV.js";import"./relativeTime-DWzL5P1y.js";const te={title:"Synapse/HomePage",component:c,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:i=>{window.alert(`SynapseHomepageV2 calling back to change route to ${i}`)}},loaders:[()=>{l()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...p(r),...m(r),s({portalOrigin:n.PORTAL,overrides:{[g.HOMEPAGE_CHATBOT]:!0}})]}}};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    gotoPlace: (href: string) => {
      window.alert(\`SynapseHomepageV2 calling back to change route to \${href}\`);
    }
  },
  loaders: [() => {
    registerSynapseHomepageMockQueries();
  }],
  parameters: {
    stack: 'production',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0'
    },
    msw: {
      handlers: [...getFileHandlers(MOCK_REPO_ORIGIN), ...getHandlersForTableQuery(MOCK_REPO_ORIGIN), getFeatureFlagsOverride({
        portalOrigin: PRODUCTION_ENDPOINT_CONFIG.PORTAL,
        overrides: {
          [FeatureFlagEnum.HOMEPAGE_CHATBOT]: true
        }
      })]
    }
  }
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const ae=["DemoVersion2"];export{e as DemoVersion2,ae as __namedExportsOrder,te as default};
