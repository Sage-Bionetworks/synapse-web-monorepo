import{x as p,a2 as m,jS as s,b as r,cu as n,fX as g}from"./iframe-DIMEjUPI.js";import{r as l}from"./mockHomepageQueryResultData-RkkoaYv8.js";import{b as c}from"./SynapseHomepageV2-sa6XDRhE.js";import"./index-r8ZA1smB.js";import"./SageFullLogo-B0ghXPmp.js";import"./SynapsePlans-CL8rfBZo.js";import"./index--WpEDtNe.js";import"./Plot-DMi3yJWX.js";import"./index-Chjiymov.js";import"./Card-DixV1MtV.js";import"./Chip-ZO2rUNAI.js";import"./index-DFMTwDmD.js";import"./SynapseNavDrawer-BhEXyL78.js";import"./useDataAccessSubmission-T5_4i-nq.js";import"./useInfiniteQuery-B3QbwDE7.js";import"./useDownloadList-CkTPkPRn.js";import"./waitForAsyncResult-CzVQMPp-.js";import"./CreateProjectModal-DAQf-tJF.js";import"./ConfirmationDialog-B1FlComz.js";import"./DialogBase-BDHvanOc.js";import"./Close-C8OV6fZk.js";import"./HelpPopover-CaBwlcgk.js";import"./MarkdownPopover-DzSTgYwR.js";import"./LightTooltip-Cm8af4zC.js";import"./MarkdownSynapse-Bhx1KV-s.js";import"./SkeletonButton-ojrK8vH7.js";import"./SkeletonInlineBlock-Dg59gf8O.js";import"./SkeletonTable-DUsfALmI.js";import"./SkeletonParagraph-DE5PaDJj.js";import"./SynapseHomepageNavBar-DKLiQqwl.js";import"./SageResourcesPopover-Db_ETQkT.js";import"./Grid-yk5XGKmz.js";import"./MenuItem-BkjCu_eC.js";import"./UserBadge-ewXLXfpL.js";import"./Slide-Da2DqGwz.js";import"./InputAdornment-CkQHZRPZ.js";import"./listItemButtonClasses-y5Z8JbLJ.js";import"./Badge-DuthT5Ot.js";import"./usePreviousProps-8ZeCNWQS.js";import"./useGetEntityHeaders-BYFPJOkI.js";import"./NavigateNext-CacoA9dh.js";import"./relativeTime-DWzL5P1y.js";const re={title:"Synapse/HomePage",component:c,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:i=>{window.alert(`SynapseHomepageV2 calling back to change route to ${i}`)}},loaders:[()=>{l()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...p(r),...m(r),s({portalOrigin:n.PORTAL,overrides:{[g.HOMEPAGE_CHATBOT]:!0}})]}}};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
