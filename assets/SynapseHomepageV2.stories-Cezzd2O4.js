import{x as p,a1 as m,jK as s,b as r,cz as n,fx as g}from"./iframe-DkJtXMGY.js";import{r as l}from"./mockHomepageQueryResultData-eO6Af5iv.js";import{b as c}from"./SynapseHomepageV2-BUdIEy2d.js";import"./index-r8ZA1smB.js";import"./SageFullLogo-DML8i7x_.js";import"./SynapsePlans-DtgmhCZb.js";import"./index-DHBZhc45.js";import"./Plot-DFQXQU_N.js";import"./index-Chjiymov.js";import"./SqlFunctions-DDowXms4.js";import"./Card-BrdkgB5x.js";import"./Chip-C5Eg6zQf.js";import"./index-BhkdXidL.js";import"./SynapseNavDrawer-DOfYaT-Q.js";import"./useDataAccessSubmission-BStWTxwZ.js";import"./useInfiniteQuery-iYy68X6j.js";import"./useDownloadList-BqvEC_EH.js";import"./CreateProjectModal-gTG2fJZ_.js";import"./ConfirmationDialog-DYXCYbxt.js";import"./DialogBase-buJoyvfa.js";import"./Close-BlNc4-DS.js";import"./HelpPopover-Bw54_hwN.js";import"./MarkdownPopover-HbQMpPTM.js";import"./LightTooltip-DemkIWEH.js";import"./MarkdownSynapse-Cj88j8IZ.js";import"./SkeletonButton-Wvy1B_g_.js";import"./SkeletonInlineBlock-BZs9NYqd.js";import"./SkeletonTable-Boy2sN_O.js";import"./SkeletonParagraph-D2M_qyIo.js";import"./SynapseHomepageNavBar-DKG8f3kh.js";import"./SageResourcesPopover-C3cNZhWY.js";import"./Grid-CVeqhvD2.js";import"./MenuItem-__VZzdvD.js";import"./UserBadge-D10KGNES.js";import"./Slide-BZRb7OmG.js";import"./InputAdornment-C08nIKom.js";import"./listItemButtonClasses-CsxA2vb9.js";import"./Badge-DvAhZHUM.js";import"./usePreviousProps-B2s_NTFp.js";import"./useGetEntityHeaders-BV7RK0QT.js";import"./NavigateNext-Dt6_koBc.js";import"./relativeTime-DWzL5P1y.js";const re={title:"Synapse/HomePage",component:c,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:i=>{window.alert(`SynapseHomepageV2 calling back to change route to ${i}`)}},loaders:[()=>{l()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...p(r),...m(r),s({portalOrigin:n.PORTAL,overrides:{[g.HOMEPAGE_CHATBOT]:!0}})]}}};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
