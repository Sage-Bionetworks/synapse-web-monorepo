import{o as e}from"./preload-helper-CsHsquCd.js";import{Tn as t,kn as n}from"./synapse-client-D4aDg0QE.js";import{R as r,d as i,f as a,z as o}from"./iframe-mgK-BYfM.js";import{n as s,t as c}from"./SynapseChat-CCkAvCpE.js";import{n as l,t as u}from"./chatHandlers-DVhQf71R.js";var d,f,p;e((()=>{l(),o(),a(),n(),s(),d={title:`Synapse/Chat`,component:c,parameters:{requireLogin:!0,chromatic:{viewports:[600,1200]}},argTypes:{isAuthenticated:{type:`boolean`}},args:{isAuthenticated:!0}},f={args:{initialMessage:`hello`},parameters:{stack:`mock`,msw:{handlers:[...i(t),...r(t),...u(t)]}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    initialMessage: 'hello'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getChatbotHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...f.parameters?.docs?.source}}},p=[`ChatWithSynapse`]}))();export{f as ChatWithSynapse,p as __namedExportsOrder,d as default};