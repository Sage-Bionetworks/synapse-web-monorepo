import{E as s,S as o}from"./ErrorPage-CZ9D7gBs.js";import"./iframe-CCrcZxgU.js";import"./index-Chi_LkuB.js";import"./useDOI-DAkyvqp6.js";import"./waitForAsyncResult-BZ2TkiIU.js";import"./useMessage-Da6_vM8i.js";import"./useUserBundle-BX_9QzHX.js";import"./ConfirmationDialog-D414-GDQ.js";import"./DialogBase-CeubuD3-.js";import"./Close-CM4W6Pks.js";import"./HelpPopover-BR72KBQJ.js";import"./MarkdownPopover-BZ4yirLT.js";import"./LightTooltip-BQGvE2MH.js";import"./MarkdownSynapse-FC1rcF9v.js";import"./SkeletonButton-BtsVrZX-.js";import"./SkeletonInlineBlock-D21wux6D.js";import"./SkeletonTable-Ba707JDB.js";import"./SkeletonParagraph--DCUjqtN.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.DOWN,
    message: "We're busy updating Synapse for you and will be back soon."
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.ACCESS_DENIED,
    entityId: 'syn12345'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.NOT_FOUND
  }
}`,...a.parameters?.docs?.source}}};const U=["Maintenance","NoAccess","Unavailable"];export{r as Maintenance,e as NoAccess,a as Unavailable,U as __namedExportsOrder,f as default};
