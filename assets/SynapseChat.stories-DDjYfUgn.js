import{o as e}from"./preload-helper-CsHsquCd.js";import{Pn as t,Rn as n}from"./synapse-client-CmSRto0s.js";import{n as r,t as i}from"./SynapseChat-BuLBsm4Z.js";import{n as a,t as o}from"./chatHandlers-VeGVos-8.js";var s,c,l,u;e((()=>{a(),n(),r(),s={title:`Synapse/Chat`,component:i,parameters:{requireLogin:!0,chromatic:{viewports:[600,1200]},stack:`mock`,msw:{handlers:{chatbot:o(t)}}},argTypes:{isAuthenticated:{type:`boolean`}},args:{isAuthenticated:!0}},c={args:{initialMessage:`hello`}},l={args:{allowAttachments:!0}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    initialMessage: 'hello'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    allowAttachments: true
  }
}`,...l.parameters?.docs?.source},description:{story:`Demonstrates attaching local files to a chat message. Use the "+" button to upload one or
more files, then send the message -- the mocked response reports the first attachment as
FAILED and the rest as STAGED (see chatHandlers.ts) so both outcomes can be exercised.`,...l.parameters?.docs?.description}}},u=[`ChatWithSynapse`,`WithAttachments`]}))();export{c as ChatWithSynapse,l as WithAttachments,u as __namedExportsOrder,s as default};