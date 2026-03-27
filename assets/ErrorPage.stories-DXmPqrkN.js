import{E as s,S as o}from"./ErrorPage-1CqV6X-7.js";import"./iframe-k6B4MjXD.js";import"./index-Chi_LkuB.js";import"./useDOI-DvPAqgSQ.js";import"./waitForAsyncResult-VxUG6_F-.js";import"./useMessage-D2fuW8ao.js";import"./useUserBundle-9_lecAHf.js";import"./ConfirmationDialog-QQIwXsjr.js";import"./DialogBase-Ccfo_49T.js";import"./Close-DOldyZv5.js";import"./HelpPopover-t1MsDT6m.js";import"./MarkdownPopover-D-j3as32.js";import"./LightTooltip-D4E2KaZT.js";import"./MarkdownSynapse-EyuM-I29.js";import"./SkeletonButton-DUY-d9ph.js";import"./SkeletonInlineBlock-DCdHLNp-.js";import"./SkeletonTable-DolM1Kfd.js";import"./SkeletonParagraph-B7V0f3GA.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
