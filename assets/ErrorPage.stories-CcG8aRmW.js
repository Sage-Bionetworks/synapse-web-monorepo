import{E as s,S as a}from"./ErrorPage-F012xNLZ.js";import"./iframe-IkK4rSOB.js";import"./index-Chi_LkuB.js";import"./useDOI-CIuCIhUA.js";import"./waitForAsyncResult-CX6oV0ES.js";import"./useMessage-D5FggYmt.js";import"./useUserBundle-B3YXjSMX.js";import"./useSuspenseQuery-D8qvYmV_.js";import"./ConfirmationDialog-Qnuw1A6n.js";import"./DialogBase-DjKiii1p.js";import"./Close-DJYHgqb-.js";import"./HelpPopover-N2Q7oHWa.js";import"./MarkdownPopover-DcD4fm5a.js";import"./LightTooltip-3kR8WXpt.js";import"./MarkdownSynapse-DW-6eoVs.js";import"./SkeletonButton-CzqxZow7.js";import"./SkeletonInlineBlock-CUWgPSJQ.js";import"./SkeletonTable-CHtYHCYt.js";import"./SkeletonParagraph-Ckq6DzI_.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.DOWN,
    message: "We're busy updating Synapse for you and will be back soon."
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.ACCESS_DENIED,
    entityId: 'syn12345'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.NOT_FOUND
  }
}`,...o.parameters?.docs?.source}}};const A=["Maintenance","NoAccess","Unavailable"];export{r as Maintenance,e as NoAccess,o as Unavailable,A as __namedExportsOrder,U as default};
