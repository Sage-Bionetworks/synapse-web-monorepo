import{x as p,a2 as m,jT as s,b as r,cu as n,fX as g}from"./iframe-TYPaZ6LN.js";import{r as l}from"./mockHomepageQueryResultData-auQ2l6vB.js";import{b as c}from"./SynapseHomepageV2-CkTEIQBW.js";import"./index-r8ZA1smB.js";import"./SageFullLogo-Bn3pY5vC.js";import"./SynapsePlans-fwOUKdlq.js";import"./index-CBvYzC39.js";import"./Plot-CQFFqt4n.js";import"./index-Chjiymov.js";import"./Card-CPwsCsQR.js";import"./Chip-CqTIrq2s.js";import"./index-C_dXWgcu.js";import"./SynapseNavDrawer-DtS7-y1n.js";import"./useDataAccessSubmission-DYN9xARs.js";import"./useInfiniteQuery-DGBLsrXS.js";import"./useDownloadList-BINbgJDr.js";import"./waitForAsyncResult-DQIt1aUV.js";import"./CreateProjectModal-BnxaJZsQ.js";import"./ConfirmationDialog-DPmq4FUs.js";import"./DialogBase-2bW80153.js";import"./Close-5hmioipF.js";import"./HelpPopover-7_yWsHqt.js";import"./MarkdownPopover-DXfCvJzS.js";import"./LightTooltip-DMsvcwJu.js";import"./MarkdownSynapse-DUiCZcKp.js";import"./SkeletonButton-BeXgw9Nt.js";import"./SkeletonInlineBlock-BBtOGIqx.js";import"./SkeletonTable-CKGrlPmE.js";import"./SkeletonParagraph-CEVUjrsB.js";import"./SynapseHomepageNavBar-BmBk_UrB.js";import"./SageResourcesPopover-D3CDi0FK.js";import"./Grid-DpofsVqj.js";import"./MenuItem--XzA7FJc.js";import"./UserBadge-AucszkFw.js";import"./Slide-9yZ-rJTk.js";import"./InputAdornment-BWq8sWaH.js";import"./listItemButtonClasses-XoWfpIRR.js";import"./Badge-Cs2WTHRP.js";import"./usePreviousProps-DeNrApD0.js";import"./useGetEntityHeaders-C92eLHA4.js";import"./NavigateNext-BI8ZzI52.js";import"./relativeTime-DWzL5P1y.js";const re={title:"Synapse/HomePage",component:c,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:i=>{window.alert(`SynapseHomepageV2 calling back to change route to ${i}`)}},loaders:[()=>{l()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...p(r),...m(r),s({portalOrigin:n.PORTAL,overrides:{[g.HOMEPAGE_CHATBOT]:!0}})]}}};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
