import{E as s,S as o}from"./ErrorPage-CWC4H4qM.js";import"./iframe-DlAeJyvm.js";import"./index-Chi_LkuB.js";import"./useDOI-BKSSwd58.js";import"./waitForAsyncResult-y1s50yqK.js";import"./useMessage-BlZZiQvy.js";import"./useUserBundle-BDeD3kk8.js";import"./ConfirmationDialog-BREVjTJW.js";import"./DialogBase-BrTsbhWa.js";import"./Close-DIOhH67l.js";import"./HelpPopover-C7aATcX6.js";import"./MarkdownPopover-CipjSExT.js";import"./LightTooltip-D-pIKqvq.js";import"./MarkdownSynapse-DknW4l8A.js";import"./SkeletonButton-BcA4f8OA.js";import"./SkeletonInlineBlock-NsF75vHh.js";import"./SkeletonTable-DPSdTVk3.js";import"./SkeletonParagraph-B7DNR62K.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
