import{x as t,a2 as a,jQ as i,b as r,cy as p,e3 as m}from"./iframe-BhrR5Sll.js";import{r as s}from"./mockHomepageQueryResultData-CzMN2PvS.js";import{b as n}from"./SynapseHomepageV2-DrovV4fl.js";import"./index-Chi_LkuB.js";import"./SageFullLogo-CDeu0sFP.js";import"./SynapsePlans-DLILt1In.js";import"./index-CWXMHv8E.js";import"./Plot-LoeTPjCE.js";import"./index-Chjiymov.js";import"./Card-D2q1-b23.js";import"./Chip-BT3G1XLE.js";import"./index-CPX53gcL.js";import"./SynapseNavDrawer-3t7F2_E8.js";import"./useDataAccessSubmission-CDomkyR3.js";import"./useInfiniteQuery-BrWjCX7v.js";import"./useDownloadList-Bn6eB3m7.js";import"./waitForAsyncResult-i8Wd7E9l.js";import"./useGetFeatureFlag-D7CxAo11.js";import"./useUserBundle-hOPzwbRd.js";import"./useSuspenseQuery-CuIa-HUN.js";import"./CreateProjectModal-y19HopNG.js";import"./ConfirmationDialog-B44tNgOv.js";import"./DialogBase-BYIqUMiE.js";import"./Close-8bb5EJ6t.js";import"./HelpPopover-lG-0-_4j.js";import"./MarkdownPopover-Dra-bAXM.js";import"./LightTooltip-CtyC1diu.js";import"./MarkdownSynapse-gk6o-aVH.js";import"./SkeletonButton-CXfcR02x.js";import"./SkeletonInlineBlock-BVfsrZM3.js";import"./SkeletonTable-bVZR_JBz.js";import"./SkeletonParagraph-BvDfq1qX.js";import"./SynapseHomepageNavBar-Ds2ziX9W.js";import"./SageResourcesPopover-B7aM87Fk.js";import"./Grid-Dfl2LtvY.js";import"./MenuItem-BJbLDGlr.js";import"./UserBadge-B_-Td5kg.js";import"./Slide-j8yXPvTf.js";import"./InputAdornment-vUCDV8FZ.js";import"./listItemButtonClasses-DXNiEFb2.js";import"./Badge-DrqJM5K_.js";import"./usePreviousProps-N55TCA3c.js";import"./useGetEntityHeaders-C1mvfARP.js";import"./NavigateNext-BICj-L7u.js";import"./relativeTime-DVX9LeFM.js";const re={title:"Synapse/HomePage",component:n,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:o=>{window.alert(`SynapseHomepageV2 calling back to change route to ${o}`)}},loaders:[()=>{s()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...t(r),...a(r),i({portalOrigin:p.PORTAL,overrides:{[m.HOMEPAGE_CHATBOT]:!0}})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const oe=["DemoVersion2"];export{e as DemoVersion2,oe as __namedExportsOrder,re as default};
