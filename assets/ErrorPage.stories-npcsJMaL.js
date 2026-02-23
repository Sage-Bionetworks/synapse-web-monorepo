import{E as s,S as a}from"./ErrorPage-BE8zvl99.js";import"./iframe-81JeKJJY.js";import"./index-Chi_LkuB.js";import"./useDOI-Bke_HnVI.js";import"./waitForAsyncResult-CioJFFf0.js";import"./useMessage-fBJUMCHx.js";import"./useUserBundle-C7u0mSik.js";import"./useSuspenseQuery-CSCSqsGh.js";import"./ConfirmationDialog-BVlCcFDa.js";import"./DialogBase-D68R31mJ.js";import"./Close-6ce7Xvww.js";import"./HelpPopover-DYuSk176.js";import"./MarkdownPopover-Bj6RQTTJ.js";import"./LightTooltip-DwzQ7zV9.js";import"./MarkdownSynapse-lWMCRscm.js";import"./SkeletonButton-DXhUVC8E.js";import"./SkeletonInlineBlock-D-xx-S6B.js";import"./SkeletonTable-CUpkK98S.js";import"./SkeletonParagraph-c7JB1JZa.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
