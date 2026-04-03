import{C as t,b as r,a0 as a,jH as i,ca as p,fJ as m}from"./iframe-BfB6FrYj.js";import{r as s}from"./mockHomepageQueryResultData-Cih_M26u.js";import{b as n}from"./SynapseHomepageV2-3wzfhlij.js";import"./index-Chi_LkuB.js";import"./SageFullLogo-tiDm2FJS.js";import"./SynapsePlans-Cj915WfX.js";import"./index-ClDczKFJ.js";import"./Plot-D6Qd4ZE_.js";import"./index-Chjiymov.js";import"./Card-CnH2dOyE.js";import"./Chip-H1nC51OX.js";import"./index-DcdQR_Vf.js";import"./SynapseNavDrawer-DaGPS6eY.js";import"./useDataAccessSubmission-BelpgIKC.js";import"./useInfiniteQuery-DyZ1e7rN.js";import"./useDownloadList-DHcFKa8U.js";import"./waitForAsyncResult-D09eoT_z.js";import"./useUserBundle-3O_Oxfpc.js";import"./CreateProjectModal-CIqJzvMk.js";import"./ConfirmationDialog-DRAawVI6.js";import"./DialogBase-Oo5YqmVI.js";import"./Close-BRAhiQKl.js";import"./HelpPopover-BCQ8LHno.js";import"./MarkdownPopover-DQe0NYIR.js";import"./LightTooltip-BjAj_W1D.js";import"./MarkdownSynapse-BMEskP2u.js";import"./SkeletonButton-CyKkbiIk.js";import"./SkeletonInlineBlock-CtmRc0d4.js";import"./SkeletonTable-KlaWzsOV.js";import"./SkeletonParagraph-CD0x-Nfw.js";import"./SynapseHomepageNavBar-BfC6X3Db.js";import"./SageResourcesPopover-DrE19zzE.js";import"./Grid-CKKdVltP.js";import"./MenuItem-CG4XGW7R.js";import"./UserBadge-Db9DswDw.js";import"./searchDefaults-X38YizXS.js";import"./Slide-fxlBEj70.js";import"./InputAdornment-B4GfmCdD.js";import"./listItemButtonClasses-8UczhBBp.js";import"./Badge-BIVgbCXA.js";import"./usePreviousProps-Dh5fkFTb.js";import"./useGetEntityHeaders-CUEIP8c6.js";import"./relativeTime-DVX9LeFM.js";import"./NavigateNext-BMkGaC7h.js";const ee={title:"Synapse/HomePage",component:n,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:o=>{window.alert(`SynapseHomepageV2 calling back to change route to ${o}`)}},loaders:[()=>{s()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...t(r),...a(r),i({portalOrigin:p.PORTAL,overrides:{[m.HOMEPAGE_CHATBOT]:!0}})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
