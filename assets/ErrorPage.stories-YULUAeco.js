import{E as s,S as o}from"./ErrorPage-BdVT2XM5.js";import"./iframe-Bppf-2Xb.js";import"./index-Chi_LkuB.js";import"./useDOI-DFFwrm2f.js";import"./waitForAsyncResult-B1ylm2d6.js";import"./useMessage-D_NPSed4.js";import"./useUserBundle-Bz68MuAV.js";import"./ConfirmationDialog-Gd10OZKA.js";import"./DialogBase-DiQjK8QP.js";import"./Close-C0gBeEqv.js";import"./HelpPopover-CFG8wYnx.js";import"./MarkdownPopover-DEUp7YgC.js";import"./LightTooltip-CGlFhZF-.js";import"./MarkdownSynapse-CXgwuaB5.js";import"./SkeletonButton-BFle63Mn.js";import"./SkeletonInlineBlock-DZgUMGJu.js";import"./SkeletonTable-BMvof9lJ.js";import"./SkeletonParagraph-Cgi3RpEx.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
