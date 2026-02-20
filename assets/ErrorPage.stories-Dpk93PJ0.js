import{E as s,S as a}from"./ErrorPage-C94uYL0H.js";import"./iframe-Cb9YNozx.js";import"./index-Chi_LkuB.js";import"./useDOI-DQJGg87c.js";import"./waitForAsyncResult-B1wy4cLa.js";import"./useMessage-L4IHTfm8.js";import"./useUserBundle--HGZeLM6.js";import"./useSuspenseQuery-DijQnciR.js";import"./ConfirmationDialog-Cy0nFlwJ.js";import"./DialogBase-CgXBzYW4.js";import"./Close-CQaXLTm7.js";import"./HelpPopover-BQnaThHT.js";import"./MarkdownPopover-DhA9uHcY.js";import"./LightTooltip-CdqBbLFh.js";import"./MarkdownSynapse-DVECeIy7.js";import"./SkeletonButton-n18AgO8O.js";import"./SkeletonInlineBlock-Cy31Etok.js";import"./SkeletonTable-D9G853Nf.js";import"./SkeletonParagraph-C98TKSTr.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
