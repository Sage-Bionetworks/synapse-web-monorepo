import{S as a,E as s}from"./ErrorPage-C1TtUq8n.js";import"./iframe-B_8Pbtyy.js";import"./index-Chi_LkuB.js";import"./useDOI-Ck5VehAG.js";import"./waitForAsyncResult-DE3NDXIz.js";import"./useMessage-BYXo5IX_.js";import"./useUserBundle-AYZLZe6H.js";import"./queryOptions-C9woPjwX.js";import"./ConfirmationDialog-Cj7M6sK5.js";import"./DialogBase-BsBgus9N.js";import"./Close-DmraeU9A.js";import"./HelpPopover-DFhkNVag.js";import"./MarkdownPopover-CqCpxQwy.js";import"./LightTooltip-DL-di1QQ.js";import"./MarkdownSynapse-HYoIGTcS.js";import"./SkeletonButton-C2boYaKt.js";import"./SkeletonInlineBlock-ChbxFlxk.js";import"./SkeletonTable-DZYgPiW7.js";import"./SkeletonParagraph-CanILnI9.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.DOWN,
    message: "We're busy updating Synapse for you and will be back soon."
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.ACCESS_DENIED,
    entityId: 'syn12345'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.NOT_FOUND
  }
}`,...o.parameters?.docs?.source}}};const A=["Maintenance","NoAccess","Unavailable"];export{r as Maintenance,e as NoAccess,o as Unavailable,A as __namedExportsOrder,U as default};
