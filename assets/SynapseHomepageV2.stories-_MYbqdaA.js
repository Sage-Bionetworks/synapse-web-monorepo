import{x as p,a2 as m,jQ as s,b as r,cA as n,fV as g}from"./iframe-BDc0Xlhy.js";import{r as l}from"./mockHomepageQueryResultData-CZoDnZ10.js";import{b as c}from"./SynapseHomepageV2-isTEc-I1.js";import"./index-r8ZA1smB.js";import"./SageFullLogo-G5C30baD.js";import"./SynapsePlans-CV6kP1el.js";import"./index-BGSxlx4g.js";import"./Plot-trRQktQw.js";import"./index-Chjiymov.js";import"./Card-Cd1qTK2e.js";import"./Chip-BVXU1kgT.js";import"./index-C41l0OuT.js";import"./SynapseNavDrawer-3o69P4JV.js";import"./useDataAccessSubmission-4-JJrwYi.js";import"./useInfiniteQuery-CsjtSfjB.js";import"./useDownloadList-Cj5NDzoU.js";import"./waitForAsyncResult-DtiRzrTL.js";import"./CreateProjectModal-CXhyvERP.js";import"./ConfirmationDialog-VnZWqUcw.js";import"./DialogBase-B1eCoCTw.js";import"./Close-CUTSnCxN.js";import"./HelpPopover-B3UcgT8N.js";import"./MarkdownPopover-BGH4CVk-.js";import"./LightTooltip-DBJFfDVa.js";import"./MarkdownSynapse-GiDTGx5a.js";import"./SkeletonButton-DOlvDp9u.js";import"./SkeletonInlineBlock-BzdKRqEw.js";import"./SkeletonTable-DvNgt2M0.js";import"./SkeletonParagraph-BrPTge09.js";import"./SynapseHomepageNavBar-Cyoe92zw.js";import"./SageResourcesPopover-DK-Ic29K.js";import"./Grid-DJrpU52t.js";import"./MenuItem-CGmsTxjm.js";import"./UserBadge-DJ1RxlFI.js";import"./Slide-Wuc6ycMx.js";import"./InputAdornment-DNkgThJj.js";import"./listItemButtonClasses-Dkr1AD7c.js";import"./Badge-DYXo_VOu.js";import"./usePreviousProps-BjaJ6N-w.js";import"./useGetEntityHeaders-lpxCWaG1.js";import"./NavigateNext--XQ92-79.js";import"./relativeTime-DWzL5P1y.js";const re={title:"Synapse/HomePage",component:c,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:i=>{window.alert(`SynapseHomepageV2 calling back to change route to ${i}`)}},loaders:[()=>{l()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...p(r),...m(r),s({portalOrigin:n.PORTAL,overrides:{[g.HOMEPAGE_CHATBOT]:!0}})]}}};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
