import{E as s,S as o}from"./ErrorPage-DPTbAY30.js";import"./iframe-E5Ka0mIZ.js";import"./index-Chi_LkuB.js";import"./useDOI-D9tyqZXE.js";import"./waitForAsyncResult-Ch7CSCFI.js";import"./useMessage-CA54of7S.js";import"./useUserBundle-BGioipGE.js";import"./ConfirmationDialog-ZdQ-24Ic.js";import"./DialogBase-JVTM_oQl.js";import"./Close-EPxz31Ms.js";import"./HelpPopover-CvoNF05b.js";import"./MarkdownPopover-DD6HYN95.js";import"./LightTooltip-B5aPrNqD.js";import"./MarkdownSynapse-BDwlDcaF.js";import"./SkeletonButton-kIjuP8ut.js";import"./SkeletonInlineBlock-C_4IQROm.js";import"./SkeletonTable-Crx1Nozv.js";import"./SkeletonParagraph-9oETCVT4.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
