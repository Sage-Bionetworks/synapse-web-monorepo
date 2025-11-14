import{x as p,a2 as m,jS as s,b as r,cu as n,fX as g}from"./iframe-Zu8RvZUL.js";import{r as l}from"./mockHomepageQueryResultData-DwaHxTt0.js";import{b as c}from"./SynapseHomepageV2-kzQY2o9-.js";import"./index-r8ZA1smB.js";import"./SageFullLogo-ByLSnwkx.js";import"./SynapsePlans--PF-Zt3s.js";import"./index-CAGzsY8e.js";import"./Plot-uIUAIC23.js";import"./index-Chjiymov.js";import"./Card-6xQl6A3R.js";import"./Chip-CUvuriGX.js";import"./index-C-A1emnN.js";import"./SynapseNavDrawer-C-oAbKUR.js";import"./useDataAccessSubmission-BVop7Ud6.js";import"./useInfiniteQuery-DY2EkPTt.js";import"./useDownloadList-BbS0F4XD.js";import"./waitForAsyncResult-SpHtqb6W.js";import"./CreateProjectModal-DNNRCSvW.js";import"./ConfirmationDialog-DWaYymem.js";import"./DialogBase-D0lW8KgR.js";import"./Close-Ce4QSXM9.js";import"./HelpPopover-DTUJNc5J.js";import"./MarkdownPopover-CDbCCKmS.js";import"./LightTooltip-3uyB0mdk.js";import"./MarkdownSynapse-Bf4DcIpi.js";import"./SkeletonButton-WXJ0zPic.js";import"./SkeletonInlineBlock-CowlHzP_.js";import"./SkeletonTable-CPpj76Kj.js";import"./SkeletonParagraph-DoX1NVXB.js";import"./SynapseHomepageNavBar-D0arUA05.js";import"./SageResourcesPopover-BK0jOM1e.js";import"./Grid-_ErRMDJp.js";import"./MenuItem-DJ5K5GB8.js";import"./UserBadge-BWB7RQzA.js";import"./Slide-BE9eTcHn.js";import"./InputAdornment-fXG0GIPB.js";import"./listItemButtonClasses-BSHcDgpS.js";import"./Badge-C5G9pOE5.js";import"./usePreviousProps-CxbZOgZo.js";import"./useGetEntityHeaders-XbyfVw2J.js";import"./NavigateNext-AL87Lo9x.js";import"./relativeTime-DWzL5P1y.js";const re={title:"Synapse/HomePage",component:c,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:i=>{window.alert(`SynapseHomepageV2 calling back to change route to ${i}`)}},loaders:[()=>{l()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...p(r),...m(r),s({portalOrigin:n.PORTAL,overrides:{[g.HOMEPAGE_CHATBOT]:!0}})]}}};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
