import{C as t,b as e,a0 as a,jH as i,cc as p,fJ as m}from"./iframe-BdS9-wdc.js";import{r as s}from"./mockHomepageQueryResultData-6kqbOZec.js";import{b as n}from"./SynapseHomepageV2-ba_NxPaB.js";import"./index-Chi_LkuB.js";import"./SageFullLogo-Bmk5HZvk.js";import"./SynapsePlans-CNFOGKiP.js";import"./index-I1xrS6Ue.js";import"./Plot-BgE2n0cF.js";import"./index-Chjiymov.js";import"./Card-CQz4BqJK.js";import"./Chip-B8w46sev.js";import"./index-BmEGML5A.js";import"./SynapseNavDrawer-CBDA00ug.js";import"./useDataAccessSubmission-BhnT5Khi.js";import"./useInfiniteQuery-B54oxMok.js";import"./useDownloadList-WUXQpt7p.js";import"./waitForAsyncResult-D_w9yvxy.js";import"./useUserBundle-CW56QhDS.js";import"./CreateProjectModal-eioN23Em.js";import"./ConfirmationDialog-_KtxKo5o.js";import"./DialogBase-B_l53LD_.js";import"./Close-SS6nyoVB.js";import"./HelpPopover-B69_BQlI.js";import"./MarkdownPopover-BlinJcsM.js";import"./LightTooltip-B9hgSUpU.js";import"./MarkdownSynapse-DzEXO47M.js";import"./SkeletonButton-BtChI9G1.js";import"./SkeletonInlineBlock-B1VKeUrN.js";import"./SkeletonTable-E-xscDs6.js";import"./SkeletonParagraph-BQttfzOt.js";import"./SynapseHomepageNavBar-Cq65TOpZ.js";import"./SageResourcesPopover-Ccz4slOU.js";import"./Grid-BXS4f0R9.js";import"./MenuItem-BSB47y6Q.js";import"./UserBadge-DiTjYkKT.js";import"./useUserGroupHeader-DhQzbsNW.js";import"./searchDefaults-uP64HJSx.js";import"./Slide-T9AFnny1.js";import"./InputAdornment-aUp1k2Ka.js";import"./listItemButtonClasses-ChAWww3W.js";import"./Badge-Di1HQy5g.js";import"./usePreviousProps-CRbVQsCb.js";import"./useGetEntityHeaders-Cqaui4eI.js";import"./relativeTime-DVX9LeFM.js";import"./NavigateNext-CcBcxquL.js";const er={title:"Synapse/HomePage",component:n,parameters:{chromatic:{viewports:[600,1200]}}},r={args:{gotoPlace:o=>{window.alert(`SynapseHomepageV2 calling back to change route to ${o}`)}},loaders:[()=>{s()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...t(e),...a(e),i({portalOrigin:p.PORTAL,overrides:{[m.HOMEPAGE_CHATBOT]:!0}})]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const or=["DemoVersion2"];export{r as DemoVersion2,or as __namedExportsOrder,er as default};
