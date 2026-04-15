import{S as o,E as s}from"./ErrorPage-RdcRpXUN.js";import"./iframe-ufwdWoqd.js";import"./index-Chi_LkuB.js";import"./useDOI-BtqDTsSg.js";import"./waitForAsyncResult-DggNm0mu.js";import"./useMessage-D4w6UHKX.js";import"./useUserBundle-D634yYlN.js";import"./ConfirmationDialog-B8w3enam.js";import"./DialogBase-Dsbgm9mp.js";import"./Close-Dv4tXZl4.js";import"./HelpPopover-sYQ3nyHD.js";import"./MarkdownPopover-FbcchaUo.js";import"./LightTooltip-DY5-pD6A.js";import"./MarkdownSynapse-CMjYBWsu.js";import"./SkeletonButton-LGNxHtYx.js";import"./SkeletonInlineBlock-DJWeJEjH.js";import"./SkeletonTable-Dud8tXGA.js";import"./SkeletonParagraph-Br9-4-N8.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
