import{y as t,a1 as a,jI as i,b as r,cl as p,fK as m}from"./iframe-DGtd-eZ6.js";import{r as s}from"./mockHomepageQueryResultData-Bo_zK7if.js";import{b as n}from"./SynapseHomepageV2-DrHlVrQc.js";import"./index-Chi_LkuB.js";import"./SageFullLogo-DJI9c5iE.js";import"./SynapsePlans-CyeLkxc3.js";import"./index-D8a8tb7g.js";import"./Plot-D7p92NwG.js";import"./index-Chjiymov.js";import"./Card-DHfeIgmt.js";import"./Chip-CNav__8J.js";import"./index-DRd13Kob.js";import"./SynapseNavDrawer-dfB8j7g3.js";import"./useDataAccessSubmission-DUfPCbVV.js";import"./useInfiniteQuery-XzhrhxiT.js";import"./useDownloadList-Cbdkanxc.js";import"./waitForAsyncResult-D1IxOnOp.js";import"./useUserBundle-17T_kydg.js";import"./CreateProjectModal-Bl8Wqv6z.js";import"./ConfirmationDialog-GQl5NATU.js";import"./DialogBase-CMc4lLby.js";import"./Close-B_IJwyX4.js";import"./HelpPopover-Bexa4l-J.js";import"./MarkdownPopover-DFLb2Nun.js";import"./LightTooltip-DPmJZKdH.js";import"./MarkdownSynapse-Ck3-QFfE.js";import"./SkeletonButton-Dv9p8gRu.js";import"./SkeletonInlineBlock-BeCQqojL.js";import"./SkeletonTable-If1Q4Zg-.js";import"./SkeletonParagraph-B4bRIlqn.js";import"./SynapseHomepageNavBar-ByxEE1a5.js";import"./SageResourcesPopover-ppFd4iif.js";import"./Grid-CUXDyCY5.js";import"./MenuItem-CRv6srlg.js";import"./UserBadge-C0S6rE_-.js";import"./searchDefaults-DVmaYOdB.js";import"./Slide-3kaQb2-N.js";import"./InputAdornment-CzV_pMJJ.js";import"./listItemButtonClasses-CKLLnE8c.js";import"./Badge-BgPve0ng.js";import"./usePreviousProps-Cnwayz7H.js";import"./useGetEntityHeaders-DK-RsXTp.js";import"./relativeTime-DVX9LeFM.js";import"./NavigateNext-DiwJ15Jd.js";const ee={title:"Synapse/HomePage",component:n,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:o=>{window.alert(`SynapseHomepageV2 calling back to change route to ${o}`)}},loaders:[()=>{s()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...t(r),...a(r),i({portalOrigin:p.PORTAL,overrides:{[m.HOMEPAGE_CHATBOT]:!0}})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
