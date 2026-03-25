import{E as s,S as o}from"./ErrorPage-D2rHI044.js";import"./iframe-BnwOOxVB.js";import"./index-Chi_LkuB.js";import"./useDOI-BHJNu9gG.js";import"./waitForAsyncResult-BwMI6IBL.js";import"./useMessage-DEcAvjV-.js";import"./useUserBundle-DzFa2F0q.js";import"./ConfirmationDialog-BdmzWONJ.js";import"./DialogBase-Dbn_HhWz.js";import"./Close-DsW9lEMH.js";import"./HelpPopover-f6Y-8lBt.js";import"./MarkdownPopover-dEsnVknt.js";import"./LightTooltip-BKLx-2zI.js";import"./MarkdownSynapse-CudWy8rb.js";import"./SkeletonButton-Cx1YwYzw.js";import"./SkeletonInlineBlock-CZWtZtay.js";import"./SkeletonTable-Dk7rdMrJ.js";import"./SkeletonParagraph-Bx2C1bW5.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
