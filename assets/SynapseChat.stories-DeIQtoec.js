import{o as e}from"./preload-helper-CsHsquCd.js";import{An as t,En as n}from"./synapse-client-T1VPIVgj.js";import{D as r,O as i,R as a,d as o,f as s,z as c}from"./iframe-Dj3g8ZTR.js";import{n as l,t as u}from"./SynapseChat-BqYnFCXv.js";import{n as d,t as f}from"./chatHandlers-PbwLGKvO.js";var p,m,h,g,_;e((()=>{d(),c(),i(),s(),t(),l(),p={title:`Synapse/Chat`,component:u,parameters:{requireLogin:!0,chromatic:{viewports:[600,1200]}},argTypes:{isAuthenticated:{type:`boolean`}},args:{isAuthenticated:!0}},m={userProfile:o(n),entity:a(n),chatbot:f(n)},h={args:{initialMessage:`hello`},parameters:{stack:`mock`,msw:{handlers:m}}},g={args:{allowAttachments:!0},parameters:{stack:`mock`,msw:{handlers:[...o(n),...a(n),...f(n),...r(n)]}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    initialMessage: 'hello'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    allowAttachments: true
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getChatbotHandlers(MOCK_REPO_ORIGIN), ...getFileHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...g.parameters?.docs?.source},description:{story:`Demonstrates attaching local files to a chat message. Use the "+" button to upload one or
more files, then send the message -- the mocked response reports the first attachment as
FAILED and the rest as STAGED (see chatHandlers.ts) so both outcomes can be exercised.`,...g.parameters?.docs?.description}}},_=[`ChatWithSynapse`,`WithAttachments`]}))();export{h as ChatWithSynapse,g as WithAttachments,_ as __namedExportsOrder,p as default};