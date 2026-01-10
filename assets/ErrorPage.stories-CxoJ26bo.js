import{E as s,S as a}from"./ErrorPage-C9rM0yqA.js";import"./iframe-_xC4R-9l.js";import"./index-Chi_LkuB.js";import"./useDOI-C3mWn2Sj.js";import"./waitForAsyncResult-BkqUyjbv.js";import"./useMessage-Rh8NNq_g.js";import"./useUserBundle-rH4zVLMU.js";import"./useSuspenseQuery-BY1RfPC9.js";import"./ConfirmationDialog-CL4wb7EO.js";import"./DialogBase-Dp6M9JD0.js";import"./Close-BfP40Jkn.js";import"./HelpPopover-1mww7JNK.js";import"./MarkdownPopover-C9UGNyb0.js";import"./LightTooltip-C7ewj1jU.js";import"./MarkdownSynapse-Ct3w_uzW.js";import"./SkeletonButton-DYUdhb7U.js";import"./SkeletonInlineBlock-BJckmeYC.js";import"./SkeletonTable-8K81cLuT.js";import"./SkeletonParagraph-BJTsWPfq.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
