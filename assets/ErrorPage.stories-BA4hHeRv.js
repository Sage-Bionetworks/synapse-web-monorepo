import{E as s,S as a}from"./ErrorPage-Bpv22xGR.js";import"./iframe-Djf1Gvja.js";import"./index-Chi_LkuB.js";import"./useDOI-BlX8jm5h.js";import"./waitForAsyncResult-CjjrhT2Q.js";import"./useMessage-BGf6fRSE.js";import"./useUserBundle-CRYenpVP.js";import"./useSuspenseQuery-DqFkurJD.js";import"./ConfirmationDialog-COmnWvpz.js";import"./DialogBase-DFoHyZgy.js";import"./Close-Clk8l4Z7.js";import"./HelpPopover-COYTKA2i.js";import"./MarkdownPopover-15pHq4Q_.js";import"./LightTooltip-CCYEKJGf.js";import"./MarkdownSynapse-MozwM0EG.js";import"./SkeletonButton-D5sJL5B9.js";import"./SkeletonInlineBlock-CSkbk-eL.js";import"./SkeletonTable-CUnfVmXh.js";import"./SkeletonParagraph-nhe0tvw8.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
