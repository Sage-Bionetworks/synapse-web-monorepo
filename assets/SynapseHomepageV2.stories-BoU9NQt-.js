import{x as p,a2 as m,jS as s,b as r,cu as n,fX as g}from"./iframe-B9o6ulgU.js";import{r as l}from"./mockHomepageQueryResultData-DNsNA8E2.js";import{b as c}from"./SynapseHomepageV2-bxuoO2Q5.js";import"./index-r8ZA1smB.js";import"./SageFullLogo-Clq0HS8f.js";import"./SynapsePlans-5-Rz-eTp.js";import"./index-DBQxEvYA.js";import"./Plot-CrBuor4S.js";import"./index-Chjiymov.js";import"./Card-CklRZ_sR.js";import"./Chip-BZa4nVPR.js";import"./index-Cr_TSGSN.js";import"./SynapseNavDrawer-hV4K7V5M.js";import"./useDataAccessSubmission-Co-k67WP.js";import"./useInfiniteQuery-kNzCWB85.js";import"./useDownloadList-aGpXH5kq.js";import"./waitForAsyncResult-B-gUJVep.js";import"./CreateProjectModal-C5xItCOw.js";import"./ConfirmationDialog-0cY4R4NJ.js";import"./DialogBase-DvQ37JZ_.js";import"./Close-Cr1Q2hlA.js";import"./HelpPopover-B3caARoU.js";import"./MarkdownPopover-C5YeO7AB.js";import"./LightTooltip-nJQSerho.js";import"./MarkdownSynapse-DSGkOyxP.js";import"./SkeletonButton-BXySJEex.js";import"./SkeletonInlineBlock-BVBMyQK3.js";import"./SkeletonTable-CEQwMQho.js";import"./SkeletonParagraph-BgTZ32N4.js";import"./SynapseHomepageNavBar-DlSjbPkI.js";import"./SageResourcesPopover-CIlSIs9r.js";import"./Grid-C3CpraHr.js";import"./MenuItem-DlWBPIOu.js";import"./UserBadge-BRWqD6Ez.js";import"./Slide-COrahQZh.js";import"./InputAdornment-Bw_6EkKp.js";import"./listItemButtonClasses-CSkNAwo0.js";import"./Badge-CXx7W5A8.js";import"./usePreviousProps-D6TuvjuT.js";import"./useGetEntityHeaders-DPQZXzWu.js";import"./NavigateNext-BK7ImYLv.js";import"./relativeTime-DWzL5P1y.js";const re={title:"Synapse/HomePage",component:c,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:i=>{window.alert(`SynapseHomepageV2 calling back to change route to ${i}`)}},loaders:[()=>{l()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...p(r),...m(r),s({portalOrigin:n.PORTAL,overrides:{[g.HOMEPAGE_CHATBOT]:!0}})]}}};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
