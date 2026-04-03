import{C as t,b as r,a0 as a,jH as i,ca as p,fJ as m}from"./iframe-BbbR7k03.js";import{r as s}from"./mockHomepageQueryResultData-Dwvs0zGL.js";import{b as n}from"./SynapseHomepageV2-Xw3tRDkg.js";import"./index-Chi_LkuB.js";import"./SageFullLogo-BAj0XPmC.js";import"./SynapsePlans-BUfYoRXk.js";import"./index-d3sIcD1f.js";import"./Plot-C-miYUxT.js";import"./index-Chjiymov.js";import"./Card-DrotIdtr.js";import"./Chip-Diq7UYnO.js";import"./index-BW5_rLqK.js";import"./SynapseNavDrawer-DQR9J0cG.js";import"./useDataAccessSubmission-DMuEosMf.js";import"./useInfiniteQuery-l0M08Fky.js";import"./useDownloadList-DDv9LSFx.js";import"./waitForAsyncResult-RRdJUPgA.js";import"./useUserBundle-DbQDA0bX.js";import"./CreateProjectModal-isne4dP_.js";import"./ConfirmationDialog-Cco6Zt2n.js";import"./DialogBase-DG8acb1Q.js";import"./Close-BJFIRJbz.js";import"./HelpPopover-Fxn4OJ3p.js";import"./MarkdownPopover-DjDkPlLu.js";import"./LightTooltip-CglVqYUv.js";import"./MarkdownSynapse-ZvWb7i2I.js";import"./SkeletonButton-DffrNQo6.js";import"./SkeletonInlineBlock-BbM-xsbl.js";import"./SkeletonTable-Dx60MFYV.js";import"./SkeletonParagraph-NMWzktwn.js";import"./SynapseHomepageNavBar-D13RuorE.js";import"./SageResourcesPopover-D8OqR8E_.js";import"./Grid-Cywb-Hob.js";import"./MenuItem-DDa15_zq.js";import"./UserBadge-DWO5wDPo.js";import"./searchDefaults-BAPuYu8l.js";import"./Slide-CK8WG2Ud.js";import"./InputAdornment-Y7XAEVkA.js";import"./listItemButtonClasses-ByP_VaKk.js";import"./Badge-Qg2jsCrb.js";import"./usePreviousProps-QHb4mi79.js";import"./useGetEntityHeaders-B1fFE1So.js";import"./relativeTime-DVX9LeFM.js";import"./NavigateNext-1idGZR9x.js";const ee={title:"Synapse/HomePage",component:n,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:o=>{window.alert(`SynapseHomepageV2 calling back to change route to ${o}`)}},loaders:[()=>{s()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...t(r),...a(r),i({portalOrigin:p.PORTAL,overrides:{[m.HOMEPAGE_CHATBOT]:!0}})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
