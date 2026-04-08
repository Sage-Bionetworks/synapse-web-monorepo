import{S as o,E as s}from"./ErrorPage-WCiGYyUZ.js";import"./iframe-DvDRa5Q6.js";import"./index-Chi_LkuB.js";import"./useDOI-BKOYq4UP.js";import"./waitForAsyncResult-ChYBvEVS.js";import"./useMessage-BqthghmE.js";import"./useUserBundle-BPf8B545.js";import"./ConfirmationDialog-Cst2iXxg.js";import"./DialogBase-C4ETi5eI.js";import"./Close-LY7gHL5l.js";import"./HelpPopover-eW4-Xo3-.js";import"./MarkdownPopover-DkJdSjeV.js";import"./LightTooltip-CEbfXtfJ.js";import"./MarkdownSynapse-DpW9Rmmz.js";import"./SkeletonButton-DldMG8YD.js";import"./SkeletonInlineBlock-CqjLFWuf.js";import"./SkeletonTable-BUXMgZAX.js";import"./SkeletonParagraph-DNQOFkBl.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
