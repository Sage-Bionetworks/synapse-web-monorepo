import{E as s,S as a}from"./ErrorPage-Bt5HyEpx.js";import"./iframe-OvMmZLQw.js";import"./index-Chi_LkuB.js";import"./useDOI-ClwBFUXj.js";import"./waitForAsyncResult-Bz0m8qDt.js";import"./useMessage-B4f_2Ght.js";import"./useUserBundle-CBDFXWMp.js";import"./useSuspenseQuery-C4irymMN.js";import"./ConfirmationDialog-CjxFskfc.js";import"./DialogBase-ibfiDrrj.js";import"./Close-C3EhJtlG.js";import"./HelpPopover-6zcoBJtq.js";import"./MarkdownPopover-DIqu7B8a.js";import"./LightTooltip-D4lO7JMJ.js";import"./MarkdownSynapse-C8qQ4WRw.js";import"./SkeletonButton-Cyy-yL2p.js";import"./SkeletonInlineBlock-DfEg9q_u.js";import"./SkeletonTable-BYbIFMu2.js";import"./SkeletonParagraph-DkLTjuRc.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
