import{g as e}from"./chatHandlers-BF3ghTRL.js";import{g as a,d as s,b as r}from"./iframe-DuFc9wy7.js";import{S as o}from"./SynapseChat-DbY0DkWw.js";import"./index-Chi_LkuB.js";import"./SkeletonButton-p5NHVcC3.js";import"./SkeletonInlineBlock-DWi7tVQO.js";import"./SkeletonTable-9HY8re28.js";import"./SkeletonParagraph-DXhZKBI2.js";import"./DropdownSelect-B6got7az.js";import"./getValidReactChildren-CfqTF5ou.js";import"./MenuItem-BaPxBIGw.js";import"./index-browser-esm-k-o2Qe0C.js";import"./MarkdownSynapse-BVL-tgRC.js";import"./ListItem-gDoknv0B.js";import"./listItemButtonClasses-FzgRrT9s.js";import"./ListItemText-Cil9VStO.js";import"./KeyboardArrowDown-D6BRzTd0.js";import"./ArrowUpward-BpGDGW_s.js";const H={title:"Synapse/Chat",component:o,parameters:{requireLogin:!0,chromatic:{viewports:[600,1200]}},argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},t={args:{initialMessage:"hello"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...e(r)]}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    initialMessage: 'hello'
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getEntityHandlers(MOCK_REPO_ORIGIN), ...getChatbotHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...t.parameters?.docs?.source}}};const M=["ChatWithSynapse"];export{t as ChatWithSynapse,M as __namedExportsOrder,H as default};
