import{E as s,S as a}from"./ErrorPage-DucDz7sD.js";import"./iframe-BoCRNbsR.js";import"./index-Chi_LkuB.js";import"./useDOI-DMr5cXdz.js";import"./waitForAsyncResult-Djp5_FTn.js";import"./useMessage-QsOBquPp.js";import"./useUserBundle-CSKimz6W.js";import"./useSuspenseQuery-BPlGfXJb.js";import"./ConfirmationDialog-DXOTVrB0.js";import"./DialogBase-BB6caHGd.js";import"./Close-DsrOrIhe.js";import"./HelpPopover-_vX2Eq3R.js";import"./MarkdownPopover-CTLC6eAI.js";import"./LightTooltip-BeuPdc0Y.js";import"./MarkdownSynapse-DncFydPI.js";import"./SkeletonButton-DmCSxkyJ.js";import"./SkeletonInlineBlock-C7NJLvZR.js";import"./SkeletonTable-COyqVKjD.js";import"./SkeletonParagraph-DoTSC7_a.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
