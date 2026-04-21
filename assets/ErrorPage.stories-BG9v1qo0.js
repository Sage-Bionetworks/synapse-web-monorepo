import{S as a,E as s}from"./ErrorPage-wKqTeZQj.js";import"./iframe-BDH9K3aQ.js";import"./index-Chi_LkuB.js";import"./useDOI-B4wAYexm.js";import"./waitForAsyncResult-Cx0cMxIa.js";import"./useMessage-CPthknWz.js";import"./useUserBundle-BHTJB607.js";import"./queryOptions-C9woPjwX.js";import"./ConfirmationDialog-Baaf23T_.js";import"./DialogBase-B3CH9IvN.js";import"./Close-BQ3Dsdqr.js";import"./HelpPopover-rgAqoORW.js";import"./MarkdownPopover-DSGPjAkb.js";import"./LightTooltip-CH8V7Sc-.js";import"./MarkdownSynapse-BfgcgRyQ.js";import"./SkeletonButton-8Qglx0Lx.js";import"./SkeletonInlineBlock-C7j3Fduy.js";import"./SkeletonTable-DpnDnZ6A.js";import"./SkeletonParagraph-4XI-GQEQ.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
