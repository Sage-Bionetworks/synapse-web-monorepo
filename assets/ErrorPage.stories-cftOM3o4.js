import{E as s,S as a}from"./ErrorPage-DlsfLFwT.js";import"./iframe-vUTu6M8D.js";import"./index-Chi_LkuB.js";import"./useDOI-CTY-752_.js";import"./waitForAsyncResult-BbE7SamT.js";import"./useMessage-2_4_lsC1.js";import"./useUserBundle-Bg0iomTg.js";import"./useSuspenseQuery-p_6e0XOX.js";import"./ConfirmationDialog-BPtNL54i.js";import"./DialogBase-B4OLAYCG.js";import"./Close-BcTGfgsy.js";import"./HelpPopover-BizYwA07.js";import"./MarkdownPopover-CLoC-k0L.js";import"./LightTooltip-pWgB8TwE.js";import"./MarkdownSynapse-CF0aiU3p.js";import"./SkeletonButton-BfImOAlj.js";import"./SkeletonInlineBlock-Dw1qUrgT.js";import"./SkeletonTable-CYuF7-ZU.js";import"./SkeletonParagraph-DI0oUi2H.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
