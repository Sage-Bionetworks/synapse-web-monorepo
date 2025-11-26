import{x as p,a2 as m,jT as s,b as r,cu as n,fX as g}from"./iframe-DbV7x0Bc.js";import{r as l}from"./mockHomepageQueryResultData-D8K6tgeI.js";import{b as c}from"./SynapseHomepageV2-BM5r4jNg.js";import"./index-r8ZA1smB.js";import"./SageFullLogo-rml10iHv.js";import"./SynapsePlans-DDHZ317m.js";import"./index-yuUJvbCW.js";import"./Plot-CouSJ-gL.js";import"./index-Chjiymov.js";import"./Card-BlOhhd1x.js";import"./Chip-Df3eRAme.js";import"./index-D2Qrjv69.js";import"./SynapseNavDrawer-BSN8CLQu.js";import"./useDataAccessSubmission-IcJdAb4M.js";import"./useInfiniteQuery-CQxVeuk5.js";import"./useDownloadList-DW9G_217.js";import"./waitForAsyncResult-CpQAJoNL.js";import"./CreateProjectModal-Cw1VwV88.js";import"./ConfirmationDialog-fMOwxCoC.js";import"./DialogBase-BD7SYBJ5.js";import"./Close--0rVQaHw.js";import"./HelpPopover-D60yTUPQ.js";import"./MarkdownPopover-CeZB9GVN.js";import"./LightTooltip-Djp-H0Gj.js";import"./MarkdownSynapse-jLoV8o0B.js";import"./SkeletonButton-CEdKSSw-.js";import"./SkeletonInlineBlock-DPkHUg7t.js";import"./SkeletonTable-D35PHSUs.js";import"./SkeletonParagraph-CtXDblG_.js";import"./SynapseHomepageNavBar-B9VGYmRE.js";import"./SageResourcesPopover-BITxdh_6.js";import"./Grid-C1yu_EgY.js";import"./MenuItem-tbPVUwvL.js";import"./UserBadge-CSeyrS-i.js";import"./Slide-D-rAIbeg.js";import"./InputAdornment-CD8h06zt.js";import"./listItemButtonClasses-B5QWTHx6.js";import"./Badge-DVD_8EcH.js";import"./usePreviousProps-Ce7xHsAY.js";import"./useGetEntityHeaders-DHRHztRX.js";import"./NavigateNext-M5KuB30h.js";import"./relativeTime-DWzL5P1y.js";const re={title:"Synapse/HomePage",component:c,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:i=>{window.alert(`SynapseHomepageV2 calling back to change route to ${i}`)}},loaders:[()=>{l()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...p(r),...m(r),s({portalOrigin:n.PORTAL,overrides:{[g.HOMEPAGE_CHATBOT]:!0}})]}}};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
