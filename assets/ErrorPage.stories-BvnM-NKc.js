import{S as o,E as s}from"./ErrorPage-CvWMDSgm.js";import"./iframe-Dh1-Bj9i.js";import"./index-Chi_LkuB.js";import"./useDOI-FYlcxw2m.js";import"./waitForAsyncResult-BRya9LLw.js";import"./useMessage-DTaLMzuI.js";import"./useUserBundle-BOEHsSlJ.js";import"./ConfirmationDialog-Dy9AxfBp.js";import"./DialogBase-Cs4R-zR2.js";import"./Close-D_7cgIwF.js";import"./HelpPopover-DkPOfTbO.js";import"./MarkdownPopover-D5SjgShk.js";import"./LightTooltip-DzvAkcfH.js";import"./MarkdownSynapse-IvCz3QWr.js";import"./SkeletonButton-C-IErnIc.js";import"./SkeletonInlineBlock-D9o-fuxy.js";import"./SkeletonTable-nkHHAelC.js";import"./SkeletonParagraph-Cbgp8OCT.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
