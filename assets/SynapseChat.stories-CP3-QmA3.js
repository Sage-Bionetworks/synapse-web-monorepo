import{n as e}from"./chunk-zsgVPwQN.js";import{Tn as t,xn as n}from"./SynapseClient-CWPGHuo8.js";import{n as r,t as i}from"./entityHandlers-AD7WbYeX.js";import{n as a,r as o}from"./userProfileHandlers-pH6rlbEc.js";import{n as s,t as c}from"./SynapseChat-Cob0mQCT.js";import{n as l,t as u}from"./chatHandlers-DPJtZcQB.js";var d,f,p;e((()=>{l(),r(),o(),t(),s(),d={title:`Synapse/Chat`,component:c,parameters:{requireLogin:!0,chromatic:{viewports:[600,1200]}},argTypes:{isAuthenticated:{type:`boolean`}},args:{isAuthenticated:!0}},f={args:{initialMessage:`hello`},parameters:{stack:`mock`,msw:{handlers:[...a(n),...i(n),...u(n)]}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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