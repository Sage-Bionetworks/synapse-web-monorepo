import{x as p,a2 as m,jS as s,b as r,cu as n,fX as g}from"./iframe-CGmVaDjG.js";import{r as l}from"./mockHomepageQueryResultData-ChWHn4wG.js";import{b as c}from"./SynapseHomepageV2-Cnf-TA3B.js";import"./index-r8ZA1smB.js";import"./SageFullLogo-QMwmWvKA.js";import"./SynapsePlans-WYeZM0j4.js";import"./index-BCwB7rkk.js";import"./Plot-DmOEe2t3.js";import"./index-Chjiymov.js";import"./Card-C00TRiyT.js";import"./Chip-DOrw28hN.js";import"./index-Bg4ai4NK.js";import"./SynapseNavDrawer-By3CYcH9.js";import"./useDataAccessSubmission-BGklvKov.js";import"./useInfiniteQuery-BOwZO-RU.js";import"./useDownloadList-C3I0JGMu.js";import"./waitForAsyncResult-h6I1MqyA.js";import"./CreateProjectModal-CfQfchi7.js";import"./ConfirmationDialog-Be0gJysx.js";import"./DialogBase-B3tdGTOA.js";import"./Close-lxYenFCK.js";import"./HelpPopover-2nxZPXpX.js";import"./MarkdownPopover-aHrxZUZD.js";import"./LightTooltip-ClWSh7qk.js";import"./MarkdownSynapse-V28WkNFd.js";import"./SkeletonButton-B4_njZrh.js";import"./SkeletonInlineBlock-DlR8y1uS.js";import"./SkeletonTable-DNeEDdIn.js";import"./SkeletonParagraph-Dm_x6xws.js";import"./SynapseHomepageNavBar-4I2lvBLs.js";import"./SageResourcesPopover-DUSpPR7s.js";import"./Grid-CUFsX9EA.js";import"./MenuItem-UENhvr4V.js";import"./UserBadge-CNPQXBDq.js";import"./Slide-a3Hp9ZMf.js";import"./InputAdornment-BaEASxwI.js";import"./listItemButtonClasses-CX5_diOU.js";import"./Badge-BhCIUxog.js";import"./usePreviousProps-DapeRrTY.js";import"./useGetEntityHeaders-BLUzSDiz.js";import"./NavigateNext-uS-viMgr.js";import"./relativeTime-DWzL5P1y.js";const re={title:"Synapse/HomePage",component:c,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:i=>{window.alert(`SynapseHomepageV2 calling back to change route to ${i}`)}},loaders:[()=>{l()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...p(r),...m(r),s({portalOrigin:n.PORTAL,overrides:{[g.HOMEPAGE_CHATBOT]:!0}})]}}};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
