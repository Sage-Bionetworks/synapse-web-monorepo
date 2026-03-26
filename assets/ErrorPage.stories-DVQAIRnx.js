import{E as s,S as o}from"./ErrorPage-2-eNqTCz.js";import"./iframe-D7hmFFD3.js";import"./index-Chi_LkuB.js";import"./useDOI-Ba_-yzfG.js";import"./waitForAsyncResult-q57WhOvs.js";import"./useMessage-D_GizSUh.js";import"./useUserBundle-DevMQvcY.js";import"./ConfirmationDialog-D56eSZEC.js";import"./DialogBase-C0-vtQvS.js";import"./Close-1n6W943I.js";import"./HelpPopover-B0CLm-hu.js";import"./MarkdownPopover-BlNh2jNC.js";import"./LightTooltip-C6WNo1mK.js";import"./MarkdownSynapse-BOtk1yaV.js";import"./SkeletonButton-BRppMIVv.js";import"./SkeletonInlineBlock-J2_tfC8B.js";import"./SkeletonTable-DwOxfj-6.js";import"./SkeletonParagraph-RrPVfHxb.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
