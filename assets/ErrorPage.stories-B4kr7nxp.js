import{S as o,E as s}from"./ErrorPage-CqW246mQ.js";import"./iframe-90f2SQV6.js";import"./index-Chi_LkuB.js";import"./useDOI-B4sXPFtO.js";import"./waitForAsyncResult-CVdtmRIr.js";import"./useMessage-TST9H4p2.js";import"./useUserBundle-C1tRTjHW.js";import"./ConfirmationDialog-DhI1owhm.js";import"./DialogBase-BMvwer8M.js";import"./Close-BwldKowt.js";import"./HelpPopover-3OLq6Qvv.js";import"./MarkdownPopover-C7xEr92D.js";import"./LightTooltip-DEc6XzHa.js";import"./MarkdownSynapse-CYc-SfSz.js";import"./SkeletonButton-DayzDEfl.js";import"./SkeletonInlineBlock-5v-gOL2x.js";import"./SkeletonTable-CUhBOjKD.js";import"./SkeletonParagraph-Bta19Z9s.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
