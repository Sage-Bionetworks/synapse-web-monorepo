import{n as e}from"./chunk-jRWAZmH_.js";import{A as t,D as n,O as r,R_ as i,_ as a,ag as o,hv as s,ig as c,k as l,sg as u,v as d}from"./iframe-Cc_1Im-O.js";import{i as f,t as p}from"./SynapseHomepageV2-BCaydVmv.js";import{n as m,t as h}from"./mockHomepageQueryResultData-D2qCqoln.js";var g,_,v;e((()=>{t(),r(),d(),h(),u(),i(),f(),g={title:`Synapse/SynapseHomepageV2`,component:p,parameters:{chromatic:{viewports:[600,1200]}}},_={args:{gotoPlace:e=>{window.alert(`SynapseHomepageV2 calling back to change route to ${e}`)}},loaders:[()=>{m()}],parameters:{stack:`production`,design:{type:`figma`,url:`https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0`},msw:{handlers:[...n(c),...a(c),l({portalOrigin:o.PORTAL,overrides:{[s.HOMEPAGE_CHATBOT]:!0}})]}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`DemoVersion2`]}))();export{_ as DemoVersion2,v as __namedExportsOrder,g as default};