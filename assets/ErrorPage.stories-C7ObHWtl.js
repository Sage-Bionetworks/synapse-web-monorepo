import{E as s,S as o}from"./ErrorPage-BSq4aZjV.js";import"./iframe-CDThL800.js";import"./index-Chi_LkuB.js";import"./useDOI-DmQGKbR4.js";import"./waitForAsyncResult-dtz7xKcF.js";import"./useMessage-CUI975NO.js";import"./useUserBundle-Buy8yH5D.js";import"./ConfirmationDialog-Die5M7Ig.js";import"./DialogBase-D7t67H5I.js";import"./Close-BK5tRb3m.js";import"./HelpPopover-Dcl1P8CO.js";import"./MarkdownPopover-BxrNYFSZ.js";import"./LightTooltip-CeD-Iueq.js";import"./MarkdownSynapse-D1fATXb_.js";import"./SkeletonButton-BWSz9WUF.js";import"./SkeletonInlineBlock-B-Z5JZ59.js";import"./SkeletonTable-CKMKjGQn.js";import"./SkeletonParagraph-DNn6pQr4.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
