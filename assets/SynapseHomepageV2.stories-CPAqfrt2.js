import{o as e}from"./preload-helper-CsHsquCd.js";import{Bn as t,Un as n,zn as r}from"./synapse-client-C0WJQHYT.js";import{B as i,G as a,H as o,U as s,V as c,W as l,_ as u,v as d}from"./iframe-swsu7uUG.js";import{i as f,t as p}from"./SynapseHomepageV2-BJTc_U-r.js";import{n as m,t as h}from"./mockHomepageQueryResultData-HnQZplE1.js";var g,_,v;e((()=>{s(),c(),d(),h(),n(),a(),f(),g={title:`Synapse/SynapseHomepageV2`,component:p,parameters:{chromatic:{viewports:[600,1200]}}},_={args:{gotoPlace:e=>{window.alert(`SynapseHomepageV2 calling back to change route to ${e}`)}},loaders:[()=>{m()}],parameters:{stack:`production`,design:{type:`figma`,url:`https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0`},msw:{handlers:[...i(r),...u(r),o({portalOrigin:t.PORTAL,overrides:{[l.HOMEPAGE_CHATBOT]:!0}})]}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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