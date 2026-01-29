import{x as t,a2 as a,jQ as i,b as r,cy as p,e3 as m}from"./iframe-DY1t7RUX.js";import{r as s}from"./mockHomepageQueryResultData-Db8vVvzY.js";import{b as n}from"./SynapseHomepageV2-CVbofY7y.js";import"./index-Chi_LkuB.js";import"./SageFullLogo--FphFU4H.js";import"./SynapsePlans-Bwf5nPdF.js";import"./index-C2nYb52T.js";import"./Plot-Brp33d7i.js";import"./index-Chjiymov.js";import"./Card-7QnyKRpy.js";import"./Chip-1hYgjVpt.js";import"./index-By-2rY5w.js";import"./SynapseNavDrawer-BMJ6cdKP.js";import"./useDataAccessSubmission-CJsEGfzn.js";import"./useInfiniteQuery-Bh-67AIU.js";import"./useDownloadList-C4X6y1vW.js";import"./waitForAsyncResult-BSO7bq76.js";import"./useGetFeatureFlag-BywWmDzJ.js";import"./useUserBundle-DPIgGoEf.js";import"./useSuspenseQuery-xirJCFap.js";import"./CreateProjectModal-DiY_r0Rk.js";import"./ConfirmationDialog-Bj6eqrOC.js";import"./DialogBase-DO28beWj.js";import"./Close-CDgVbOyZ.js";import"./HelpPopover-C9D9Mwao.js";import"./MarkdownPopover-St2sJIEx.js";import"./LightTooltip-DVzuHePn.js";import"./MarkdownSynapse-BvADFsyz.js";import"./SkeletonButton-DnY8-1vA.js";import"./SkeletonInlineBlock-DZRcElE1.js";import"./SkeletonTable-Q2u-z5xw.js";import"./SkeletonParagraph-DFydk1yR.js";import"./SynapseHomepageNavBar-BL9qLYBy.js";import"./SageResourcesPopover-DrScF_il.js";import"./Grid-DZsdJ4GR.js";import"./MenuItem-C2Xe6MJI.js";import"./UserBadge-5rHSNfxc.js";import"./Slide-BzoQ7vTc.js";import"./InputAdornment-HbC4oK3B.js";import"./listItemButtonClasses-eVbC5euL.js";import"./Badge-BUDRDVRi.js";import"./usePreviousProps-pJvpTXgT.js";import"./useGetEntityHeaders-DoDslOvD.js";import"./NavigateNext-CIi4Mfr6.js";import"./relativeTime-DVX9LeFM.js";const re={title:"Synapse/HomePage",component:n,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:o=>{window.alert(`SynapseHomepageV2 calling back to change route to ${o}`)}},loaders:[()=>{s()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...t(r),...a(r),i({portalOrigin:p.PORTAL,overrides:{[m.HOMEPAGE_CHATBOT]:!0}})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
