import{x as p,a2 as m,jS as s,b as r,cu as n,fX as g}from"./iframe-BdkWYmI6.js";import{r as l}from"./mockHomepageQueryResultData-De6TpRYh.js";import{b as c}from"./SynapseHomepageV2-DC-VNzMB.js";import"./index-r8ZA1smB.js";import"./SageFullLogo-CYr26lS6.js";import"./SynapsePlans-CnpfVAcw.js";import"./index-DbuXYfPR.js";import"./Plot-Csqt_8qP.js";import"./index-Chjiymov.js";import"./Card-CgIKbIE3.js";import"./Chip-4C804CUR.js";import"./index-Bp1wqoF0.js";import"./SynapseNavDrawer-DPz0ytM4.js";import"./useDataAccessSubmission-D0DGu7Co.js";import"./useInfiniteQuery-DuX9lKhO.js";import"./useDownloadList-ijvtVgRS.js";import"./waitForAsyncResult-CPMDfSSN.js";import"./CreateProjectModal-Cmq69lR-.js";import"./ConfirmationDialog-D261UfJ4.js";import"./DialogBase-AFyAqR5r.js";import"./Close-uDi--C--.js";import"./HelpPopover-B9Z4iGdd.js";import"./MarkdownPopover-BHBiy4N1.js";import"./LightTooltip-CG5Avdd3.js";import"./MarkdownSynapse-Bv4Hlehq.js";import"./SkeletonButton-DYpS-IT5.js";import"./SkeletonInlineBlock-B4ZEP19M.js";import"./SkeletonTable-BveBy0vn.js";import"./SkeletonParagraph-CVsqmSli.js";import"./SynapseHomepageNavBar-C85V7WPW.js";import"./SageResourcesPopover-B3nM6p0Q.js";import"./Grid-Bf8-FmNM.js";import"./MenuItem-CP_h11Bc.js";import"./UserBadge-D-KTw3YH.js";import"./Slide-Bl82Xfkw.js";import"./InputAdornment-Do8RfQZE.js";import"./listItemButtonClasses-HKd3bwBP.js";import"./Badge-1gMdCbwX.js";import"./usePreviousProps-BS-9dGVZ.js";import"./useGetEntityHeaders-DJ1qRJ5j.js";import"./NavigateNext-BQPhacc5.js";import"./relativeTime-DWzL5P1y.js";const re={title:"Synapse/HomePage",component:c,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:i=>{window.alert(`SynapseHomepageV2 calling back to change route to ${i}`)}},loaders:[()=>{l()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...p(r),...m(r),s({portalOrigin:n.PORTAL,overrides:{[g.HOMEPAGE_CHATBOT]:!0}})]}}};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
