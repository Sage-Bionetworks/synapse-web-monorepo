import{S as o,E as s}from"./ErrorPage-Bxc8bafO.js";import"./iframe-I9EoyWQf.js";import"./index-Chi_LkuB.js";import"./useDOI-DVcico3r.js";import"./waitForAsyncResult-xTHI72A6.js";import"./useMessage-UccyfZPF.js";import"./useUserBundle-B0BzK8VS.js";import"./ConfirmationDialog-Cn8YG5nL.js";import"./DialogBase-mhO3z0mU.js";import"./Close-C4Fuzij-.js";import"./HelpPopover-CSkKFQDG.js";import"./MarkdownPopover-CZrsA1Ve.js";import"./LightTooltip-BjpzGQlc.js";import"./MarkdownSynapse-DmmReL7B.js";import"./SkeletonButton-BZ4IW0NV.js";import"./SkeletonInlineBlock-CnFxuHgE.js";import"./SkeletonTable-Daoy3Wk1.js";import"./SkeletonParagraph-C2Jym8Lt.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
