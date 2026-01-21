import{E as s,S as a}from"./ErrorPage-BSS30jAi.js";import"./iframe-DrCEazsW.js";import"./index-Chi_LkuB.js";import"./useDOI-DSWRzj4q.js";import"./waitForAsyncResult-CxldH0I6.js";import"./useMessage-nQv6Ads4.js";import"./useUserBundle-CYm_bsjI.js";import"./useSuspenseQuery-DQ6p8VKt.js";import"./ConfirmationDialog-Dhl79wf0.js";import"./DialogBase-BH_HDzHK.js";import"./Close-CxIjT6Fh.js";import"./HelpPopover-DbOYMGtK.js";import"./MarkdownPopover-C7OUxN4B.js";import"./LightTooltip-CVm0W9H0.js";import"./MarkdownSynapse-cqZxM6bP.js";import"./SkeletonButton-C4mWmh8D.js";import"./SkeletonInlineBlock-DNr-Di6Y.js";import"./SkeletonTable-BtmY8UyV.js";import"./SkeletonParagraph-DxARbxEV.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
