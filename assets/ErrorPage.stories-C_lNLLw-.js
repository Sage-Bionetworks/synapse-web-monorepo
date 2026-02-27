import{E as s,S as o}from"./ErrorPage-CrJEGDZS.js";import"./iframe-BjBBiDsW.js";import"./index-Chi_LkuB.js";import"./useDOI-BK7-eox6.js";import"./waitForAsyncResult-BqjDaxAd.js";import"./useMessage-DL9gNLRb.js";import"./useUserBundle-ATC_tAU4.js";import"./ConfirmationDialog-D0UfN1Xa.js";import"./DialogBase-czf-e16q.js";import"./Close-L1FnxEBh.js";import"./HelpPopover-BtucvZ0a.js";import"./MarkdownPopover-DE2XYuuV.js";import"./LightTooltip-DhGFGjue.js";import"./MarkdownSynapse-BDqMYaol.js";import"./SkeletonButton-Bl0qAliy.js";import"./SkeletonInlineBlock-Cx_wfJlM.js";import"./SkeletonTable-DFpSOBHH.js";import"./SkeletonParagraph-CeuyOR5i.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
