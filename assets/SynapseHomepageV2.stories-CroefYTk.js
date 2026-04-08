import{C as t,b as r,a0 as a,jH as i,ca as p,fJ as m}from"./iframe-D7cxPiDf.js";import{r as s}from"./mockHomepageQueryResultData-BcqJOIMK.js";import{b as n}from"./SynapseHomepageV2-BJ-39B8j.js";import"./index-Chi_LkuB.js";import"./SageFullLogo-Q7g8m68J.js";import"./SynapsePlans-DCjBbRZ4.js";import"./index-DlBcq_bV.js";import"./Plot-Cgyb9XDv.js";import"./index-Chjiymov.js";import"./Card-w3ZTOvJG.js";import"./Chip-DysZYHv9.js";import"./index-Dfurbkx6.js";import"./SynapseNavDrawer-CRU-Wtom.js";import"./useDataAccessSubmission-_qohQ6xx.js";import"./useInfiniteQuery-8o2gAKoR.js";import"./useDownloadList-DyReIVzo.js";import"./waitForAsyncResult-C2mLuWhG.js";import"./useUserBundle-BfK4pX7T.js";import"./CreateProjectModal-rZ_wkXfi.js";import"./ConfirmationDialog-DUvSWS7G.js";import"./DialogBase-5a5Z8JWG.js";import"./Close-Du54B76W.js";import"./HelpPopover-dkwX9Qyj.js";import"./MarkdownPopover-BoWdnzj9.js";import"./LightTooltip-BKRysDKC.js";import"./MarkdownSynapse-BKDmyY35.js";import"./SkeletonButton-C1ogbO9H.js";import"./SkeletonInlineBlock-CPizO8Fa.js";import"./SkeletonTable-CXYD3wmd.js";import"./SkeletonParagraph-BqM2-1Ca.js";import"./SynapseHomepageNavBar-DQbpJES6.js";import"./SageResourcesPopover-FNyIpZqs.js";import"./Grid-B9SC3qZ6.js";import"./MenuItem-D-DyuXNw.js";import"./UserBadge-fquBPCcK.js";import"./searchDefaults-DqXuQq3z.js";import"./Slide-BiIBtQGN.js";import"./InputAdornment-CYYSAV9B.js";import"./listItemButtonClasses-Bb2XoFHG.js";import"./Badge-Dq23crcq.js";import"./usePreviousProps-4c5lPU7n.js";import"./useGetEntityHeaders-Nf3Wk7OG.js";import"./relativeTime-DVX9LeFM.js";import"./NavigateNext-4Wk8CD1m.js";const ee={title:"Synapse/HomePage",component:n,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:o=>{window.alert(`SynapseHomepageV2 calling back to change route to ${o}`)}},loaders:[()=>{s()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...t(r),...a(r),i({portalOrigin:p.PORTAL,overrides:{[m.HOMEPAGE_CHATBOT]:!0}})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
