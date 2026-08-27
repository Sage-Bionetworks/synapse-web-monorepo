import{o as e}from"./preload-helper-CsHsquCd.js";import{Pn as t,Rn as n}from"./synapse-client-CmSRto0s.js";import{M as r,N as i,U as a,W as o,d as s,f as c}from"./iframe-Thp0mAsS.js";import{n as l,t as u}from"./SynapseChat-USRU3zXK.js";import{n as d,t as f}from"./chatHandlers-z73JxDiB.js";var p,m,h,g,_;e((()=>{d(),o(),i(),c(),n(),l(),p={title:`Synapse/Chat`,component:u,parameters:{requireLogin:!0,chromatic:{viewports:[600,1200]}},argTypes:{isAuthenticated:{type:`boolean`}},args:{isAuthenticated:!0}},m={userProfile:s(t),entity:a(t),chatbot:f(t)},h={args:{initialMessage:`hello`},parameters:{stack:`mock`,msw:{handlers:m}}},g={args:{allowAttachments:!0},parameters:{stack:`mock`,msw:{handlers:[...s(t),...a(t),...f(t),...r(t)]}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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