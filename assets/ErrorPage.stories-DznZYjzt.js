import{E as s,S as o}from"./ErrorPage-CQFk0S4C.js";import"./iframe-DATRO4pg.js";import"./index-Chi_LkuB.js";import"./useDOI-CeGLahw_.js";import"./waitForAsyncResult-D3dzznpQ.js";import"./useMessage-CBm6jw4h.js";import"./useUserBundle-B4qTlzlm.js";import"./ConfirmationDialog-YayW6Yer.js";import"./DialogBase-C1AukqcU.js";import"./Close-DSBWsbNS.js";import"./HelpPopover-BpoQ9RLF.js";import"./MarkdownPopover-C8lzSMfg.js";import"./LightTooltip-DjHUKC3t.js";import"./MarkdownSynapse-COvAtPgs.js";import"./SkeletonButton-D-kO1kuw.js";import"./SkeletonInlineBlock-BHsC0ZVh.js";import"./SkeletonTable-CwWcK3KH.js";import"./SkeletonParagraph-BO1hpxq5.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
