import{x as p,a2 as m,jS as s,b as r,cu as n,fX as g}from"./iframe-BZoqbf8T.js";import{r as l}from"./mockHomepageQueryResultData-YpysAqw8.js";import{b as c}from"./SynapseHomepageV2-6QrPTi5i.js";import"./index-r8ZA1smB.js";import"./SageFullLogo-CkPo5hNy.js";import"./SynapsePlans-DSkm933Z.js";import"./index-CDOyncPU.js";import"./Plot-DRiijIkC.js";import"./index-Chjiymov.js";import"./Card-BVJDHK3N.js";import"./Chip-DWh3L3o0.js";import"./index-DD9jDIum.js";import"./SynapseNavDrawer-BWjDfs5d.js";import"./useDataAccessSubmission-qY2otCsS.js";import"./useInfiniteQuery-DDBDj7dn.js";import"./useDownloadList-Bt98a6it.js";import"./waitForAsyncResult-DPs9_Dvj.js";import"./CreateProjectModal-CmFtXnvV.js";import"./ConfirmationDialog-BvotHdXo.js";import"./DialogBase-CcQFp5O5.js";import"./Close-BmiGShPN.js";import"./HelpPopover-JjpkA04K.js";import"./MarkdownPopover-UFqyqYVS.js";import"./LightTooltip-C01xIOBo.js";import"./MarkdownSynapse-BhKULhlF.js";import"./SkeletonButton-CNv8YWby.js";import"./SkeletonInlineBlock-CT4iLvxR.js";import"./SkeletonTable-Cbhot3O8.js";import"./SkeletonParagraph-BxFUaFhk.js";import"./SynapseHomepageNavBar-Bm71I7SS.js";import"./SageResourcesPopover-CN170nnG.js";import"./Grid-KGWSaruy.js";import"./MenuItem-97gDT1Wf.js";import"./UserBadge-ueMkJ81N.js";import"./Slide-Lj8eW8kJ.js";import"./InputAdornment-M7pSpk5G.js";import"./listItemButtonClasses-Cd7AdLZO.js";import"./Badge-CJY4V-Aw.js";import"./usePreviousProps-Dkn6w4t9.js";import"./useGetEntityHeaders-BQkUdUXk.js";import"./NavigateNext-CM2MYtWa.js";import"./relativeTime-DWzL5P1y.js";const re={title:"Synapse/HomePage",component:c,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:i=>{window.alert(`SynapseHomepageV2 calling back to change route to ${i}`)}},loaders:[()=>{l()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...p(r),...m(r),s({portalOrigin:n.PORTAL,overrides:{[g.HOMEPAGE_CHATBOT]:!0}})]}}};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
