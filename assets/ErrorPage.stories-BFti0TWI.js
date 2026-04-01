import{E as s,S as o}from"./ErrorPage-COlU9M7W.js";import"./iframe-ClE2Hy4B.js";import"./index-Chi_LkuB.js";import"./useDOI-SpxdwWYa.js";import"./waitForAsyncResult-DSJ6PnH_.js";import"./useMessage-CrSmRQfo.js";import"./useUserBundle-0g-k7q7C.js";import"./ConfirmationDialog-BMQMl3nb.js";import"./DialogBase-DsoF6kFj.js";import"./Close-B-5zc9Mn.js";import"./HelpPopover-CS-MG7ku.js";import"./MarkdownPopover-BV7I0bXQ.js";import"./LightTooltip-CUHr0mUG.js";import"./MarkdownSynapse-b_n8loNV.js";import"./SkeletonButton-DSmPjAvU.js";import"./SkeletonInlineBlock-DYja8lR7.js";import"./SkeletonTable-D7N707Oc.js";import"./SkeletonParagraph-Br74pmuK.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
