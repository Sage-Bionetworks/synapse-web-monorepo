import{S as a,E as s}from"./ErrorPage-B6q3poJD.js";import"./iframe-BfPCYB0E.js";import"./index-Chi_LkuB.js";import"./useDOI-B-mjn5EX.js";import"./waitForAsyncResult-srqq3Arv.js";import"./useMessage-CE0b5xV_.js";import"./useUserBundle-CKxh-kvY.js";import"./queryOptions-C9woPjwX.js";import"./ConfirmationDialog-8SnXnQ-s.js";import"./DialogBase-BW5bnvAH.js";import"./Close-Buelrktg.js";import"./HelpPopover-BsJ_8UVh.js";import"./MarkdownPopover-TvgvUYyl.js";import"./LightTooltip-CdZMPFTC.js";import"./MarkdownSynapse-DczAMsEj.js";import"./SkeletonButton-Cp9NnTu7.js";import"./SkeletonInlineBlock-D4QJhjaO.js";import"./SkeletonTable-O-QCdGWt.js";import"./SkeletonParagraph-KYHFxt8I.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
