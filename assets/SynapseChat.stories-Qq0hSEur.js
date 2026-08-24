import{o as e}from"./preload-helper-CsHsquCd.js";import{Ln as t,Nn as n}from"./synapse-client-DLEPPQHq.js";import{M as r,N as i,U as a,W as o,d as s,f as c}from"./iframe-D9LF-DAA.js";import{n as l,t as u}from"./SynapseChat-j25ZywCW.js";import{n as d,t as f}from"./chatHandlers-Bj9-uohP.js";var p,m,h,g,_;e((()=>{d(),o(),i(),c(),t(),l(),p={title:`Synapse/Chat`,component:u,parameters:{requireLogin:!0,chromatic:{viewports:[600,1200]}},argTypes:{isAuthenticated:{type:`boolean`}},args:{isAuthenticated:!0}},m={userProfile:s(n),entity:a(n),chatbot:f(n)},h={args:{initialMessage:`hello`},parameters:{stack:`mock`,msw:{handlers:m}}},g={args:{allowAttachments:!0},parameters:{stack:`mock`,msw:{handlers:[...s(n),...a(n),...f(n),...r(n)]}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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