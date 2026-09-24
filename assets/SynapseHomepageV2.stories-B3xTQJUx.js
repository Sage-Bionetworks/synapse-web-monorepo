import{o as e}from"./preload-helper-CsHsquCd.js";import{Hn as t,Rn as n,zn as r}from"./synapse-client-Bqxhj3CF.js";import{B as i,H as a,U as o,V as s,W as c,_ as l,v as u,z as d}from"./iframe-D1xKL6TJ.js";import{i as f,t as p}from"./SynapseHomepageV2-BHZdPUN9.js";import{n as m,t as h}from"./mockHomepageQueryResultData-CqTuIodl.js";var g,_,v;e((()=>{a(),i(),u(),h(),t(),c(),f(),g={title:`Synapse/SynapseHomepageV2`,component:p,parameters:{chromatic:{viewports:[600,1200]}}},_={args:{gotoPlace:e=>{window.alert(`SynapseHomepageV2 calling back to change route to ${e}`)}},loaders:[()=>{m()}],parameters:{stack:`production`,design:{type:`figma`,url:`https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0`},msw:{handlers:[...d(n),...l(n),s({portalOrigin:r.PORTAL,overrides:{[o.HOMEPAGE_CHATBOT]:!0}})]}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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