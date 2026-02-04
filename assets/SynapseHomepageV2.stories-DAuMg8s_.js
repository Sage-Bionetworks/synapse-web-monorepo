import{x as t,a2 as a,jQ as i,b as r,cy as p,e3 as m}from"./iframe-C64n1GD8.js";import{r as s}from"./mockHomepageQueryResultData-DSnNESZ2.js";import{b as n}from"./SynapseHomepageV2-9spyj5yB.js";import"./index-Chi_LkuB.js";import"./SageFullLogo-MwAv9zT-.js";import"./SynapsePlans-Dwvq1iyn.js";import"./index-0fyHRnZi.js";import"./Plot-yBdxttQC.js";import"./index-Chjiymov.js";import"./Card-BkBy63xK.js";import"./Chip-B6rIlUNr.js";import"./index-C-1MBf7J.js";import"./SynapseNavDrawer-B9Ae_f15.js";import"./useDataAccessSubmission-AIKpKilC.js";import"./useInfiniteQuery-17Rp3FWY.js";import"./useDownloadList-C4UJPJ6W.js";import"./waitForAsyncResult-BWPXdSyA.js";import"./useGetFeatureFlag-AwX_rLoL.js";import"./useUserBundle-D00teTqN.js";import"./useSuspenseQuery-DKR51829.js";import"./CreateProjectModal-DW42-iIL.js";import"./ConfirmationDialog-0v5aIB6P.js";import"./DialogBase-CvFrMWW4.js";import"./Close-jGAkMweY.js";import"./HelpPopover-DMcj4HzC.js";import"./MarkdownPopover-aVtIL7z6.js";import"./LightTooltip-DDkKmTHq.js";import"./MarkdownSynapse-CenQtkph.js";import"./SkeletonButton-BHX6f9gP.js";import"./SkeletonInlineBlock-CDYMy8y_.js";import"./SkeletonTable-QL6vSy9n.js";import"./SkeletonParagraph-Duc3bDvV.js";import"./SynapseHomepageNavBar-YdXvUDA9.js";import"./SageResourcesPopover-BjXmTqAa.js";import"./Grid-DqBexckt.js";import"./MenuItem-BnAVJRr4.js";import"./UserBadge-gsVQwvQr.js";import"./Slide-D00Byrzd.js";import"./InputAdornment-CyOFPwVG.js";import"./listItemButtonClasses-YtkzxDhc.js";import"./Badge-Dl0jZHfF.js";import"./usePreviousProps-jrNC5DIm.js";import"./useGetEntityHeaders-CxkARZm6.js";import"./NavigateNext-D2VTmyrH.js";import"./relativeTime-DVX9LeFM.js";const re={title:"Synapse/HomePage",component:n,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:o=>{window.alert(`SynapseHomepageV2 calling back to change route to ${o}`)}},loaders:[()=>{s()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...t(r),...a(r),i({portalOrigin:p.PORTAL,overrides:{[m.HOMEPAGE_CHATBOT]:!0}})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const oe=["DemoVersion2"];export{e as DemoVersion2,oe as __namedExportsOrder,re as default};
