import{y as t,a3 as a,jG as i,b as r,ck as p,dT as m}from"./iframe-CDA0-aTC.js";import{r as s}from"./mockHomepageQueryResultData-CXcWCP0M.js";import{b as n}from"./SynapseHomepageV2-CGrO0EDY.js";import"./index-Chi_LkuB.js";import"./SageFullLogo-36laoPYD.js";import"./SynapsePlans-D92PbWns.js";import"./index-MFNVkJUC.js";import"./Plot-CJ0HX0xS.js";import"./index-Chjiymov.js";import"./Card-CNpk9I0N.js";import"./Chip-iqmVqxV9.js";import"./index-Dm5gKV9A.js";import"./SynapseNavDrawer-COZac3qR.js";import"./useDataAccessSubmission-D6RpsZTW.js";import"./useInfiniteQuery-DxqH_ygE.js";import"./useDownloadList-WTkoOKPo.js";import"./waitForAsyncResult-BWlwG1-C.js";import"./useUserBundle-h3_N8fPQ.js";import"./CreateProjectModal-DpAtHuwc.js";import"./ConfirmationDialog-BLrGR5e1.js";import"./DialogBase-BSeeM2-T.js";import"./Close-dI8UPeeO.js";import"./HelpPopover-CUD98UAA.js";import"./MarkdownPopover-eReN4x4q.js";import"./LightTooltip-T2fsq3mX.js";import"./MarkdownSynapse-D1PgnQma.js";import"./SkeletonButton-CyZvMjY_.js";import"./SkeletonInlineBlock-CP8CpyNB.js";import"./SkeletonTable-CTSMcV9b.js";import"./SkeletonParagraph-BVmBcN9J.js";import"./SynapseHomepageNavBar-CTMvwUir.js";import"./SageResourcesPopover-BxLuNqnk.js";import"./Grid-DPWyAXOo.js";import"./MenuItem-D14RUsdm.js";import"./UserBadge-CeyI1m7V.js";import"./searchDefaults-CcpWy15U.js";import"./Slide-xsgo24-r.js";import"./InputAdornment-CEDL7AxI.js";import"./listItemButtonClasses-Cl_Cj6sz.js";import"./Badge-DLblP2EJ.js";import"./usePreviousProps-D7ud0x9i.js";import"./useGetEntityHeaders-BwdcXOX6.js";import"./NavigateNext-Dl6ca9ob.js";import"./relativeTime-DVX9LeFM.js";const ee={title:"Synapse/HomePage",component:n,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:o=>{window.alert(`SynapseHomepageV2 calling back to change route to ${o}`)}},loaders:[()=>{s()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...t(r),...a(r),i({portalOrigin:p.PORTAL,overrides:{[m.HOMEPAGE_CHATBOT]:!0}})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
