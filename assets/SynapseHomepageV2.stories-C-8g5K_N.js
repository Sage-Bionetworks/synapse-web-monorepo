import{x as t,a2 as a,jQ as i,b as r,cy as p,e3 as m}from"./iframe-CmoSAPSB.js";import{r as s}from"./mockHomepageQueryResultData-Dx9JglhW.js";import{b as n}from"./SynapseHomepageV2-kgjVWcvc.js";import"./index-Chi_LkuB.js";import"./SageFullLogo-Biavlp7X.js";import"./SynapsePlans-CzK7DlZc.js";import"./index-nOawvgvH.js";import"./Plot-B5GLToA-.js";import"./index-Chjiymov.js";import"./Card-KnQ9tlyZ.js";import"./Chip-B9lbWoVh.js";import"./index-C2zeCRkX.js";import"./SynapseNavDrawer-CxgCDYBL.js";import"./useDataAccessSubmission-CFyqW5jb.js";import"./useInfiniteQuery-apdbL5yC.js";import"./useDownloadList-XD_V4Ubc.js";import"./waitForAsyncResult-CM2dynh9.js";import"./useGetFeatureFlag-5UWgRVKf.js";import"./useUserBundle-CwnnfMaT.js";import"./useSuspenseQuery-BKY6Qa88.js";import"./CreateProjectModal-vM_QFrAJ.js";import"./ConfirmationDialog-DzbbPL6e.js";import"./DialogBase-Bqr0n33q.js";import"./Close-yUN2-UGG.js";import"./HelpPopover-Cvjj8rL7.js";import"./MarkdownPopover-B6HZYL0b.js";import"./LightTooltip-8uaDTCAj.js";import"./MarkdownSynapse-vijXPkmg.js";import"./SkeletonButton-BiCcSD_e.js";import"./SkeletonInlineBlock-Cx8PzyyP.js";import"./SkeletonTable-BfBRnH8d.js";import"./SkeletonParagraph-JgANzJ5n.js";import"./SynapseHomepageNavBar-BP6kYyyd.js";import"./SageResourcesPopover-BvA7GJgS.js";import"./Grid-Dz0d_gTv.js";import"./MenuItem-Dt0yDuqb.js";import"./UserBadge-zo9ivwKg.js";import"./Slide-DGZngN3-.js";import"./InputAdornment-CA2rN1qy.js";import"./listItemButtonClasses-C6QQJw1t.js";import"./Badge-CmfuUwVT.js";import"./usePreviousProps-BNvj5C1X.js";import"./useGetEntityHeaders-NMjoebvG.js";import"./NavigateNext-CHflbn6j.js";import"./relativeTime-DVX9LeFM.js";const re={title:"Synapse/HomePage",component:n,parameters:{chromatic:{viewports:[600,1200]}}},e={args:{gotoPlace:o=>{window.alert(`SynapseHomepageV2 calling back to change route to ${o}`)}},loaders:[()=>{s()}],parameters:{stack:"production",design:{type:"figma",url:"https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0"},msw:{handlers:[...t(r),...a(r),i({portalOrigin:p.PORTAL,overrides:{[m.HOMEPAGE_CHATBOT]:!0}})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
