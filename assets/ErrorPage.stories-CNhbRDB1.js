import{E as s,S as o}from"./ErrorPage-AMMLisUU.js";import"./iframe-CZFJJ8mF.js";import"./index-Chi_LkuB.js";import"./useDOI-Bb8tDOY0.js";import"./waitForAsyncResult-Qnp59KSm.js";import"./useMessage-pgRGXmcd.js";import"./useUserBundle-d_Y8_V2h.js";import"./ConfirmationDialog-CGBNjPCW.js";import"./DialogBase-DDBsPCb6.js";import"./Close-wucZufu-.js";import"./HelpPopover-C73Dk8f0.js";import"./MarkdownPopover-By4CdHrM.js";import"./LightTooltip-DVNwweRq.js";import"./MarkdownSynapse-E3IF_o1S.js";import"./SkeletonButton-1FI8gwoL.js";import"./SkeletonInlineBlock-CK8FFc-3.js";import"./SkeletonTable-Q3nUli7s.js";import"./SkeletonParagraph-DvXQwRCq.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
