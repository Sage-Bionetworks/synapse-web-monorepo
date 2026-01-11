import{E as s,S as a}from"./ErrorPage-ClJlc_q9.js";import"./iframe-DmQVC8QI.js";import"./index-Chi_LkuB.js";import"./useDOI-D14NtL6l.js";import"./waitForAsyncResult-Dl15MFWN.js";import"./useMessage-30Ran_P3.js";import"./useUserBundle-BJGdVvY0.js";import"./useSuspenseQuery-BohpWjm9.js";import"./ConfirmationDialog-OJeXIr_I.js";import"./DialogBase-Bs_nIYab.js";import"./Close-BMrHQB2l.js";import"./HelpPopover-DRZXBx0T.js";import"./MarkdownPopover-BdSro2xf.js";import"./LightTooltip-he-g-8N4.js";import"./MarkdownSynapse-DmgMCbzG.js";import"./SkeletonButton-DiNloKU2.js";import"./SkeletonInlineBlock-DroApun6.js";import"./SkeletonTable-C27BPd4C.js";import"./SkeletonParagraph-uPmYqKww.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
