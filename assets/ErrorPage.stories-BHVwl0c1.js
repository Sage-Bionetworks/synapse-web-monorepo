import{E as s,S as o}from"./ErrorPage-DY_GK1aW.js";import"./iframe-DmJPOOU_.js";import"./index-Chi_LkuB.js";import"./useDOI-CwTN6Yc8.js";import"./waitForAsyncResult-Zpnvj1oQ.js";import"./useMessage-CVIXVE6P.js";import"./useUserBundle-BrqV_bO4.js";import"./ConfirmationDialog-hpX1a8na.js";import"./DialogBase-D-N6jGJj.js";import"./Close-DOrDhmY8.js";import"./HelpPopover-CH-RPBO_.js";import"./MarkdownPopover-BCp9ClLr.js";import"./LightTooltip-Cww8R-MD.js";import"./MarkdownSynapse-C6q6tMz7.js";import"./SkeletonButton-Cd2blMTY.js";import"./SkeletonInlineBlock-rRVfoSJd.js";import"./SkeletonTable-B15aTznV.js";import"./SkeletonParagraph-B8-jdRST.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
