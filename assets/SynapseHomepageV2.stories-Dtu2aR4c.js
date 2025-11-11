import{x as p,a2 as m,jS as s,b as r,cu as n,fX as g}from"./iframe-0_E6QA5q.js";import{r as l}from"./mockHomepageQueryResultData-C0mldCUy.js";import{b as c}from"./SynapseHomepageV2-TIRqqj18.js";import"./index-r8ZA1smB.js";import"./SageFullLogo-BUnUUo_n.js";import"./SynapsePlans-C8VVHzm9.js";import"./index-B6hx-QRK.js";import"./Plot-DJrMHUsA.js";import"./index-Chjiymov.js";import"./Card-BUNvL0MS.js";import"./Chip-CGQIXmoB.js";import"./index-BqiUF3nO.js";import"./SynapseNavDrawer-CrpxGX9Q.js";import"./useDataAccessSubmission-BzP402XH.js";import"./useInfiniteQuery-CHkzf4rJ.js";import"./useDownloadList-D_dxt3j7.js";import"./waitForAsyncResult-DhOtx3GO.js";import"./CreateProjectModal-DS59YdEF.js";import"./ConfirmationDialog-FBI9JYIN.js";import"./DialogBase-DH7mUDhm.js";import"./Close-BPBl1RMs.js";import"./HelpPopover-DU2BwJqT.js";import"./MarkdownPopover-CxR3E5eY.js";import"./LightTooltip-Cbbiylwj.js";import"./MarkdownSynapse-KMP-leAR.js";import"./SkeletonButton-B7g5trXc.js";import"./SkeletonInlineBlock-C6wGBfZc.js";import"./SkeletonTable-DeeOmUeM.js";import"./SkeletonParagraph--7EvjUiD.js";import"./SynapseHomepageNavBar-Y6bK3s4V.js";import"./SageResourcesPopover-woKCK-qe.js";import"./Grid-XQrIDmWa.js";import"./MenuItem-CAzHj_Ft.js";import"./UserBadge-KfQC8GAX.js";import"./Slide-D5R6_j3F.js";import"./InputAdornment-DJtSQFoe.js";import"./listItemButtonClasses-CadlTcWg.js";import"./Badge-BDzsvDHi.js";import"./usePreviousProps-CEEBDOLm.js";import"./useGetEntityHeaders-6x9o9mjr.js";import"./NavigateNext-B6GIhh2N.js";import"./relativeTime-DWzL5P1y.js";const re={title:"Synapse/HomePage",component:c,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:i=>{window.alert(`SynapseHomepageV2 calling back to change route to ${i}`)}},loaders:[()=>{l()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...p(r),...m(r),s({portalOrigin:n.PORTAL,overrides:{[g.HOMEPAGE_CHATBOT]:!0}})]}}};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const oe=["DemoVersion2"];export{e as DemoVersion2,oe as __namedExportsOrder,re as default};
