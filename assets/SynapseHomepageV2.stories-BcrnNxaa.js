import{n as e}from"./chunk-zsgVPwQN.js";import{R as t,t as n}from"./dist-jiKX-16m.js";import{Sn as r,Tn as i,xn as a}from"./SynapseClient-BzG4sNth.js";import{a as o,i as s}from"./tableQueryHandlers-8JDNSnwq.js";import{n as c,t as l}from"./featureFlagHandlers-BEE9cNLZ.js";import{n as u,t as d}from"./fileHandlers-plYKtWFF.js";import{i as f,t as p}from"./SynapseHomepageV2-CgNmbFKK.js";import{n as m,t as h}from"./mockHomepageQueryResultData-ywBmbo33.js";var g,_,v;e((()=>{c(),u(),o(),h(),i(),n(),f(),g={title:`Synapse/SynapseHomepageV2`,component:p,parameters:{chromatic:{viewports:[600,1200]}}},_={args:{gotoPlace:e=>{window.alert(`SynapseHomepageV2 calling back to change route to ${e}`)}},loaders:[()=>{m()}],parameters:{stack:`production`,design:{type:`figma`,url:`https://www.figma.com/design/z2pi8sF6E2he3Q0ncey1S0/Synapse-Homepage-Refresh-(Copy)?node-id=2097-64422&t=lbZKhHAaWWC5JfDB-0`},msw:{handlers:[...d(a),...s(a),l({portalOrigin:r.PORTAL,overrides:{[t.HOMEPAGE_CHATBOT]:!0}})]}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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