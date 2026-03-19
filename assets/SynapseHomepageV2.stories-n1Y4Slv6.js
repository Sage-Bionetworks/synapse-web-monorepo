import{y as t,a3 as a,jI as i,b as r,cl as p,fK as m}from"./iframe-BfDC4V0n.js";import{r as s}from"./mockHomepageQueryResultData-CmNxn8wy.js";import{b as n}from"./SynapseHomepageV2-DU4UBzod.js";import"./index-Chi_LkuB.js";import"./SageFullLogo-LROftJ5H.js";import"./SynapsePlans-CBCimXBa.js";import"./index-BUCfmZ1o.js";import"./Plot-mEJ5HRWt.js";import"./index-Chjiymov.js";import"./Card-BWuYZE85.js";import"./Chip-B3QjRI9f.js";import"./index-D_SprHXq.js";import"./SynapseNavDrawer-B0g2L1_v.js";import"./useDataAccessSubmission-IHFNObgW.js";import"./useInfiniteQuery-DM4nXvzm.js";import"./useDownloadList-DAG36Y4Y.js";import"./waitForAsyncResult-2K2Nze7q.js";import"./useUserBundle-CgRRg9_x.js";import"./CreateProjectModal-jZnNDqdq.js";import"./ConfirmationDialog-Btpz93A2.js";import"./DialogBase-yHroOJ8_.js";import"./Close-CgiQG4j8.js";import"./HelpPopover-Dg3wd6VC.js";import"./MarkdownPopover-Cd4Su9xF.js";import"./LightTooltip-B1uK46ji.js";import"./MarkdownSynapse-Doq5YFEA.js";import"./SkeletonButton-kWC2bpgD.js";import"./SkeletonInlineBlock-Dr1CyrsC.js";import"./SkeletonTable-PdwLXVTh.js";import"./SkeletonParagraph-DUo_BCXn.js";import"./SynapseHomepageNavBar-Cs-Nd4q_.js";import"./SageResourcesPopover-BP9r9Z3c.js";import"./Grid-BDFn4F6-.js";import"./MenuItem-Dqvfd__a.js";import"./UserBadge-BVCVeHNC.js";import"./searchDefaults-Cwjz2IvX.js";import"./Slide-Bd7zg9ZQ.js";import"./InputAdornment-C-mhbZbI.js";import"./listItemButtonClasses-CZDR-qIN.js";import"./Badge-ei2MXLi7.js";import"./usePreviousProps-Dh34bYaX.js";import"./useGetEntityHeaders-2JechIOY.js";import"./relativeTime-DVX9LeFM.js";import"./NavigateNext-BjubXJ1F.js";const ee={title:"Synapse/HomePage",component:n,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:o=>{window.alert(`SynapseHomepageV2 calling back to change route to ${o}`)}},loaders:[()=>{s()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...t(r),...a(r),i({portalOrigin:p.PORTAL,overrides:{[m.HOMEPAGE_CHATBOT]:!0}})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const re=["DemoVersion2"];export{e as DemoVersion2,re as __namedExportsOrder,ee as default};
