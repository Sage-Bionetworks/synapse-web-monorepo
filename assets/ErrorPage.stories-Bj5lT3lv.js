import{E as s,S as o}from"./ErrorPage-BTRxSdKC.js";import"./iframe-BPIYH1oT.js";import"./index-Chi_LkuB.js";import"./useDOI-DkhYr9_4.js";import"./waitForAsyncResult-D2S7oeqa.js";import"./useMessage-jW86oi3n.js";import"./useUserBundle-D1sKaGLt.js";import"./ConfirmationDialog-BEwxNdsX.js";import"./DialogBase-YPU6xwB9.js";import"./Close-DUKe32AS.js";import"./HelpPopover-csZgSs5v.js";import"./MarkdownPopover-C_LkEX6f.js";import"./LightTooltip-C4JhsBFK.js";import"./MarkdownSynapse-B95PEuB_.js";import"./SkeletonButton-BzOCV9D1.js";import"./SkeletonInlineBlock-BqdJTX4s.js";import"./SkeletonTable-DGggFpSD.js";import"./SkeletonParagraph-CVXQh454.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
