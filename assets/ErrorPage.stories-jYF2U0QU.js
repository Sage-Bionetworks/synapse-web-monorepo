import{S as o,E as s}from"./ErrorPage-C_kdEzWY.js";import"./iframe-C5G3mSsR.js";import"./index-Chi_LkuB.js";import"./useDOI-DoOJopr1.js";import"./waitForAsyncResult-0sW71vVw.js";import"./useMessage-C08jM4Up.js";import"./useUserBundle-b7Uv0-A-.js";import"./ConfirmationDialog-Br5927dU.js";import"./DialogBase-D3E-ORM4.js";import"./Close-DMmJiCqc.js";import"./HelpPopover-TqGD_tY5.js";import"./MarkdownPopover-C1geqiut.js";import"./LightTooltip-BCSWtQqF.js";import"./MarkdownSynapse-BKYTzrKF.js";import"./SkeletonButton-_Eu_07NL.js";import"./SkeletonInlineBlock-BpaxCT_H.js";import"./SkeletonTable-q_wTrDuF.js";import"./SkeletonParagraph-B8DwnroK.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
