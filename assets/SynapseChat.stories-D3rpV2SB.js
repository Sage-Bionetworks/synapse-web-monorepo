import{g as e}from"./chatHandlers-s6F9vUWB.js";import{g as a,d as s,b as r}from"./iframe-CsSu4aY1.js";import{S as o}from"./SynapseChat-JK32uSZn.js";import"./index-Chi_LkuB.js";import"./SkeletonButton-CJUI3Sjx.js";import"./SkeletonInlineBlock-Bq8lQ2xh.js";import"./SkeletonTable-B-kH2kE9.js";import"./SkeletonParagraph-Cpkk7Gw6.js";import"./DropdownSelect-CcxD7yeq.js";import"./getValidReactChildren-xsfSPs5W.js";import"./MenuItem-DMX9IaUe.js";import"./index-browser-esm-k-o2Qe0C.js";import"./MarkdownSynapse-hmG2FW9K.js";import"./ListItem-oxCb3vqO.js";import"./listItemButtonClasses-ByML3Or5.js";import"./ListItemText-BH1v3rPX.js";import"./KeyboardArrowDown-ClErImNM.js";import"./ArrowUpward-aSmo9smx.js";const H={title:"Synapse/Chat",component:o,parameters:{requireLogin:!0,chromatic:{viewports:[600,1200]}},argTypes:{isAuthenticated:{type:"boolean"}},args:{isAuthenticated:!0}},t={args:{initialMessage:"hello"},parameters:{stack:"mock",msw:{handlers:[...a(r),...s(r),...e(r)]}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
