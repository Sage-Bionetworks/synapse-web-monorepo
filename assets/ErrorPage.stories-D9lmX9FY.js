import{S as o,E as s}from"./ErrorPage-QVRCWOdm.js";import"./iframe-xuGDYskk.js";import"./index-Chi_LkuB.js";import"./useDOI-BJXoUJm4.js";import"./waitForAsyncResult-CSnsF4Ja.js";import"./useMessage-DmYLCYV7.js";import"./useUserBundle-DtSERE0H.js";import"./ConfirmationDialog-CeVmcrd5.js";import"./DialogBase-D_8BDBtZ.js";import"./Close-DW9kzD-X.js";import"./HelpPopover-w8ni5A6U.js";import"./MarkdownPopover-DTgCpJv6.js";import"./LightTooltip-lMMHMay2.js";import"./MarkdownSynapse-Dqj1e4cl.js";import"./SkeletonButton-Ba2syrHs.js";import"./SkeletonInlineBlock-CuJjaS51.js";import"./SkeletonTable-Bn51DOnQ.js";import"./SkeletonParagraph-BP-szXpV.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
