import{S as o,E as s}from"./ErrorPage-cJ2_olXS.js";import"./iframe-BknA5AKQ.js";import"./index-Chi_LkuB.js";import"./useDOI-BwqCNbLa.js";import"./waitForAsyncResult-aP8sJyJX.js";import"./useMessage-C_yrYHG0.js";import"./useUserBundle-CpQAXbXo.js";import"./ConfirmationDialog-DEKZKJ8u.js";import"./DialogBase-2oKzQzDh.js";import"./Close-Dt0xqxPt.js";import"./HelpPopover-CoqMnHLA.js";import"./MarkdownPopover-UDNbtmIF.js";import"./LightTooltip-T0pPDs7d.js";import"./MarkdownSynapse-D0cltami.js";import"./SkeletonButton-DS3-vsq6.js";import"./SkeletonInlineBlock-CJPbZx5E.js";import"./SkeletonTable-DbyGjMNM.js";import"./SkeletonParagraph-COPAUoGX.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
