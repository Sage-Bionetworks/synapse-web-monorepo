import{S as o,E as s}from"./ErrorPage-ICQsyMBe.js";import"./iframe-BJt7q_JV.js";import"./index-Chi_LkuB.js";import"./useDOI-PUiaTV9D.js";import"./waitForAsyncResult-BgaWG6Sd.js";import"./useMessage-CH7BDJE8.js";import"./useUserBundle-DxuM9JQF.js";import"./ConfirmationDialog-DhIfbqQu.js";import"./DialogBase-DNgmg92r.js";import"./Close-CnuYTtXB.js";import"./HelpPopover-BKPDM7P7.js";import"./MarkdownPopover-iIdPMRk3.js";import"./LightTooltip-boxSQgEG.js";import"./MarkdownSynapse-BHezFvPm.js";import"./SkeletonButton-CQzFd6lb.js";import"./SkeletonInlineBlock-DWTLId8s.js";import"./SkeletonTable-BoHNQ0XH.js";import"./SkeletonParagraph-76490YmJ.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
