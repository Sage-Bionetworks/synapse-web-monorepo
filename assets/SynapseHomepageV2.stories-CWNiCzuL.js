import{x as t,a2 as a,jP as i,b as r,cy as p,e3 as m}from"./iframe-Byg5KEO3.js";import{r as s}from"./mockHomepageQueryResultData-Bb3uY47K.js";import{b as n}from"./SynapseHomepageV2-DySJsLlK.js";import"./index-Chi_LkuB.js";import"./SageFullLogo-DS0vKYd9.js";import"./SynapsePlans-BeBjKcjH.js";import"./index-CzHzmpi-.js";import"./Plot-HRXLFiS2.js";import"./index-Chjiymov.js";import"./Card-BiYdDpof.js";import"./Chip-S8C0h81Q.js";import"./index-ChYi0wId.js";import"./SynapseNavDrawer-Ztu8sy8p.js";import"./useDataAccessSubmission-C6eZc-Mu.js";import"./useInfiniteQuery-CZPJsNj1.js";import"./useDownloadList-Cm0tU31q.js";import"./waitForAsyncResult-B51ARsMA.js";import"./useGetFeatureFlag-DKH0uI1r.js";import"./useUserBundle-CIHk5rZS.js";import"./useSuspenseQuery-BsTrDnpu.js";import"./CreateProjectModal-Be0QvCYO.js";import"./ConfirmationDialog-JsFCfxK0.js";import"./DialogBase-CnDWnT2B.js";import"./Close-CpMA1DKn.js";import"./HelpPopover-CT10kuL6.js";import"./MarkdownPopover-DISWB6lN.js";import"./LightTooltip-MazkSLsv.js";import"./MarkdownSynapse-DUFzxpBi.js";import"./SkeletonButton-4jGLqIPK.js";import"./SkeletonInlineBlock-BMXq3IDQ.js";import"./SkeletonTable-DoPPIijf.js";import"./SkeletonParagraph-Bg9PA-th.js";import"./SynapseHomepageNavBar-C1ghJBRr.js";import"./SageResourcesPopover-DqnKZ6Gk.js";import"./Grid-DxpU9yRv.js";import"./MenuItem-CHAd-f9u.js";import"./UserBadge-BLjnlATj.js";import"./Slide-CLLlQmZJ.js";import"./InputAdornment-qFRcmL-P.js";import"./listItemButtonClasses-CSdhhBnK.js";import"./Badge-BbkIuyvC.js";import"./usePreviousProps-Dn7MxSj9.js";import"./useGetEntityHeaders-D0a4CxFL.js";import"./NavigateNext-BLFupgfT.js";import"./relativeTime-DVX9LeFM.js";const re={title:"Synapse/HomePage",component:n,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:o=>{window.alert(`SynapseHomepageV2 calling back to change route to ${o}`)}},loaders:[()=>{s()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...t(r),...a(r),i({portalOrigin:p.PORTAL,overrides:{[m.HOMEPAGE_CHATBOT]:!0}})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
