import{E as s,S as o}from"./ErrorPage-CfU_Wvbr.js";import"./iframe-qVlGQSuu.js";import"./index-Chi_LkuB.js";import"./useDOI-Dh_Bqi2P.js";import"./waitForAsyncResult-BOGARwTt.js";import"./useMessage-DUxbg6a3.js";import"./useUserBundle-CxwxuS4g.js";import"./ConfirmationDialog-Ds9LhYtk.js";import"./DialogBase-zjWOIfZo.js";import"./Close-DTZpuwIC.js";import"./HelpPopover-BHPw_eXc.js";import"./MarkdownPopover-CmvfCcSZ.js";import"./LightTooltip-D3Im4lvV.js";import"./MarkdownSynapse-DTMlkJjz.js";import"./SkeletonButton-BV9DAa_g.js";import"./SkeletonInlineBlock-DBJoLAHS.js";import"./SkeletonTable-bCltNDze.js";import"./SkeletonParagraph-DMHFsIQV.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
