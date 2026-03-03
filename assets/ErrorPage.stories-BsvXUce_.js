import{E as s,S as o}from"./ErrorPage-pT9Y8R6-.js";import"./iframe-CR9Kppk9.js";import"./index-Chi_LkuB.js";import"./useDOI-DkJooMEE.js";import"./waitForAsyncResult-D7JaeIIS.js";import"./useMessage-D_9o0M7Y.js";import"./useUserBundle-BZz123Kg.js";import"./ConfirmationDialog-BXteRzfy.js";import"./DialogBase-DXW71yq5.js";import"./Close-4K7Ixs7T.js";import"./HelpPopover-DZ345V92.js";import"./MarkdownPopover-olh3PRGS.js";import"./LightTooltip-z2lc9QXh.js";import"./MarkdownSynapse-C76XvQvw.js";import"./SkeletonButton-DgY4znPZ.js";import"./SkeletonInlineBlock-D-RkmMYK.js";import"./SkeletonTable-DJdtHoqT.js";import"./SkeletonParagraph-DAQxrYxE.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
