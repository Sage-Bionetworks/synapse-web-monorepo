import{y as t,a1 as a,jI as i,b as r,cl as p,fK as m}from"./iframe-k6B4MjXD.js";import{r as s}from"./mockHomepageQueryResultData-BTgTsDpw.js";import{b as n}from"./SynapseHomepageV2-DwNb_M_s.js";import"./index-Chi_LkuB.js";import"./SageFullLogo-Cm0W2kak.js";import"./SynapsePlans-BXXaborG.js";import"./index-D0k3efTh.js";import"./Plot-Di80v9A2.js";import"./index-Chjiymov.js";import"./Card-BYlpnDBX.js";import"./Chip-ClQuTivw.js";import"./index-WOehqnwl.js";import"./SynapseNavDrawer-CIHy6ILp.js";import"./useDataAccessSubmission-BSKNIhCV.js";import"./useInfiniteQuery-CFREU8Pv.js";import"./useDownloadList-wG2PFdeR.js";import"./waitForAsyncResult-VxUG6_F-.js";import"./useUserBundle-9_lecAHf.js";import"./CreateProjectModal-RzxxWWNI.js";import"./ConfirmationDialog-QQIwXsjr.js";import"./DialogBase-Ccfo_49T.js";import"./Close-DOldyZv5.js";import"./HelpPopover-t1MsDT6m.js";import"./MarkdownPopover-D-j3as32.js";import"./LightTooltip-D4E2KaZT.js";import"./MarkdownSynapse-EyuM-I29.js";import"./SkeletonButton-DUY-d9ph.js";import"./SkeletonInlineBlock-DCdHLNp-.js";import"./SkeletonTable-DolM1Kfd.js";import"./SkeletonParagraph-B7V0f3GA.js";import"./SynapseHomepageNavBar-D5JhXDRz.js";import"./SageResourcesPopover-Cnmbw60b.js";import"./Grid-0yqev7cN.js";import"./MenuItem-DIdsJc7D.js";import"./UserBadge-CTPE8I7e.js";import"./searchDefaults-D9K-2IVY.js";import"./Slide-CSmYZSnW.js";import"./InputAdornment-heMVe1bs.js";import"./listItemButtonClasses-C21jZuS6.js";import"./Badge-DYw4_THJ.js";import"./usePreviousProps-TBUXOJTu.js";import"./useGetEntityHeaders-D7JbI84x.js";import"./relativeTime-DVX9LeFM.js";import"./NavigateNext-Celq8m1z.js";const ee={title:"Synapse/HomePage",component:n,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:o=>{window.alert(`SynapseHomepageV2 calling back to change route to ${o}`)}},loaders:[()=>{s()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...t(r),...a(r),i({portalOrigin:p.PORTAL,overrides:{[m.HOMEPAGE_CHATBOT]:!0}})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
