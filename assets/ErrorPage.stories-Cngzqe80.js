import{E as s,S as o}from"./ErrorPage-qSKX0YxS.js";import"./iframe-Dbbh8EoS.js";import"./index-Chi_LkuB.js";import"./useDOI-Dk0tYoZ0.js";import"./waitForAsyncResult-DTgU9Rmq.js";import"./useMessage-D77Jg7P5.js";import"./useUserBundle-CZY1dyhP.js";import"./ConfirmationDialog-DgOVI2l3.js";import"./DialogBase-DP21qmxt.js";import"./Close-Dh11qsnE.js";import"./HelpPopover-D9KVZzsy.js";import"./MarkdownPopover-BphtwQmM.js";import"./LightTooltip-CYhWOoK6.js";import"./MarkdownSynapse-Na_JpKhK.js";import"./SkeletonButton-BznCZj-O.js";import"./SkeletonInlineBlock-BfsUoAAw.js";import"./SkeletonTable-Cpo7iVUX.js";import"./SkeletonParagraph-DMnuMidF.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
