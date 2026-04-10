import{S as o,E as s}from"./ErrorPage-DyXXybNn.js";import"./iframe-QSWh_nl6.js";import"./index-Chi_LkuB.js";import"./useDOI-Dx9xw1RG.js";import"./waitForAsyncResult-BDSBWlFn.js";import"./useMessage-C69Zdmiq.js";import"./useUserBundle-Dx6kjAkx.js";import"./ConfirmationDialog-CX4ewaN9.js";import"./DialogBase-D2MmUTIb.js";import"./Close-QryVeLEP.js";import"./HelpPopover-Bcffqgpu.js";import"./MarkdownPopover-c1W7vBzm.js";import"./LightTooltip-6Ty6ser2.js";import"./MarkdownSynapse-CJNodr3S.js";import"./SkeletonButton-Ca6I-8rV.js";import"./SkeletonInlineBlock-rFa2WtsV.js";import"./SkeletonTable-D0oXxerW.js";import"./SkeletonParagraph-C2ql9lI3.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
