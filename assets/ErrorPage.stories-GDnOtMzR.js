import{E as s,S as a}from"./ErrorPage-CQtiJl8I.js";import"./iframe-CqOjta_N.js";import"./index-Chi_LkuB.js";import"./useDOI-DMQTLxeg.js";import"./waitForAsyncResult-CbIqhu6Z.js";import"./useMessage-BEGD3al9.js";import"./useUserBundle-D8JYfTyv.js";import"./useSuspenseQuery-BD3WNLbV.js";import"./ConfirmationDialog-NO_pJ3mE.js";import"./DialogBase-CYbBRd4W.js";import"./Close-B3SqSRyi.js";import"./HelpPopover-CldbtdCh.js";import"./MarkdownPopover-uBOu0K68.js";import"./LightTooltip-DC7cbKib.js";import"./MarkdownSynapse-D2zbplv6.js";import"./SkeletonButton-BR5YXC6L.js";import"./SkeletonInlineBlock-CN4aVK2u.js";import"./SkeletonTable-BGlGLKIw.js";import"./SkeletonParagraph-B4VFFfOl.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
