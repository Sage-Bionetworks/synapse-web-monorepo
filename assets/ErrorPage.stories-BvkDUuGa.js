import{S as o,E as s}from"./ErrorPage-Bd9AnbvP.js";import"./iframe-DnxOmzjq.js";import"./index-Chi_LkuB.js";import"./useDOI-BbDdEMP3.js";import"./waitForAsyncResult-BAePJVUi.js";import"./useMessage-BUtLyweP.js";import"./useUserBundle-ecNJunIY.js";import"./ConfirmationDialog-DmtyRXb1.js";import"./DialogBase-D3z_RB8X.js";import"./Close-BG6pWxxQ.js";import"./HelpPopover-7iTAnRZF.js";import"./MarkdownPopover-BBvcdCrE.js";import"./LightTooltip-DBTB_o03.js";import"./MarkdownSynapse-Dhwl4QzF.js";import"./SkeletonButton-BsjS3fr7.js";import"./SkeletonInlineBlock-Df91B-1t.js";import"./SkeletonTable-CwpgexC9.js";import"./SkeletonParagraph-gynKm0um.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
