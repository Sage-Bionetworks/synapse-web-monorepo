import{o as e}from"./preload-helper-CsHsquCd.js";import{On as t,wn as n}from"./SynapseClient-CErk6Dnm.js";import{R as r,d as i,f as a,z as o}from"./iframe-DTKkxvr8.js";import{n as s,t as c}from"./SynapseChat-DQ3KALbw.js";import{n as l,t as u}from"./chatHandlers-B_7SQFZl.js";var d,f,p;e((()=>{l(),o(),a(),t(),s(),d={title:`Synapse/Chat`,component:c,parameters:{requireLogin:!0,chromatic:{viewports:[600,1200]}},argTypes:{isAuthenticated:{type:`boolean`}},args:{isAuthenticated:!0}},f={args:{initialMessage:`hello`},parameters:{stack:`mock`,msw:{handlers:[...i(n),...r(n),...u(n)]}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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