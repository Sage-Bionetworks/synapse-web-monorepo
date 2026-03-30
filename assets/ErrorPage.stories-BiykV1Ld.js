import{E as s,S as o}from"./ErrorPage-Ca_18ecU.js";import"./iframe-Cj0e1zel.js";import"./index-Chi_LkuB.js";import"./useDOI-CM4xtExd.js";import"./waitForAsyncResult-DUIXWeDU.js";import"./useMessage-BZPU4xBr.js";import"./useUserBundle-B7cMc4nB.js";import"./ConfirmationDialog-BOs_vWQu.js";import"./DialogBase-BtW1rv2q.js";import"./Close-B0Ezzxla.js";import"./HelpPopover-vs9IjcEE.js";import"./MarkdownPopover-DANY9xik.js";import"./LightTooltip-GdOigsor.js";import"./MarkdownSynapse-C0Os_jLu.js";import"./SkeletonButton-70dk5TWK.js";import"./SkeletonInlineBlock-ChrVufN-.js";import"./SkeletonTable-CBixK2YG.js";import"./SkeletonParagraph-BiV9WxhL.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
