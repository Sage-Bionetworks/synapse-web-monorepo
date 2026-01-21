import{E as s,S as a}from"./ErrorPage-En-R4n5u.js";import"./iframe-BSxjDfu3.js";import"./index-Chi_LkuB.js";import"./useDOI-fI8djg2l.js";import"./waitForAsyncResult-DMYZAPMi.js";import"./useMessage-BDv3TgO6.js";import"./useUserBundle-CJruWbUT.js";import"./useSuspenseQuery-B5B_wZvU.js";import"./ConfirmationDialog-BqzMQSuY.js";import"./DialogBase-C7KiMXAc.js";import"./Close-C8jghUIv.js";import"./HelpPopover-Ck3jSwjq.js";import"./MarkdownPopover-CtYZclYs.js";import"./LightTooltip-C6ZdzN3s.js";import"./MarkdownSynapse-BPy50KJ3.js";import"./SkeletonButton-Bu5XGQ_G.js";import"./SkeletonInlineBlock-B21sfNKh.js";import"./SkeletonTable-Bd6B-VEF.js";import"./SkeletonParagraph-ssYRCcJC.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
