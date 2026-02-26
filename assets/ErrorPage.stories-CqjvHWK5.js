import{E as s,S as a}from"./ErrorPage-CDY8T2cn.js";import"./iframe-DH1YdleT.js";import"./index-Chi_LkuB.js";import"./useDOI-CNADoBTT.js";import"./waitForAsyncResult-CmUvr6xM.js";import"./useMessage-Bk8iYy7o.js";import"./useUserBundle-DYo1KdiC.js";import"./useSuspenseQuery-D4jnvJmQ.js";import"./ConfirmationDialog-SNOhH4NP.js";import"./DialogBase-D5LKNQOh.js";import"./Close-DCSUXUpP.js";import"./HelpPopover-CTeHImmX.js";import"./MarkdownPopover-DFqTBoMm.js";import"./LightTooltip-CZ16DjXG.js";import"./MarkdownSynapse-BUNA2qa9.js";import"./SkeletonButton-COeTp7fr.js";import"./SkeletonInlineBlock-CPHdUQ8C.js";import"./SkeletonTable-DicgxcdD.js";import"./SkeletonParagraph-Dq5xJIxI.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
