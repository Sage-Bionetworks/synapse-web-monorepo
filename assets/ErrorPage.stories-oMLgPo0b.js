import{E as s,S as o}from"./ErrorPage-wp_4uXDF.js";import"./iframe-B7KGf7-k.js";import"./index-Chi_LkuB.js";import"./useDOI-C4ihutDi.js";import"./waitForAsyncResult-BR6t2Qc2.js";import"./useMessage-B17LTMLY.js";import"./useUserBundle-Dv5e5E2c.js";import"./ConfirmationDialog-CfHwuMwA.js";import"./DialogBase-D0__VBEg.js";import"./Close-T1I-2ajn.js";import"./HelpPopover-rsd36_y9.js";import"./MarkdownPopover-CgOyBUHV.js";import"./LightTooltip-BjN2xTIz.js";import"./MarkdownSynapse-1Rv7JxA3.js";import"./SkeletonButton-DY-_GYdD.js";import"./SkeletonInlineBlock-C6U7Upal.js";import"./SkeletonTable-DLLgVxsK.js";import"./SkeletonParagraph-D-OkfrQQ.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
