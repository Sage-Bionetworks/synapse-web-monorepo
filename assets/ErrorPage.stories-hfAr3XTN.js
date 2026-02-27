import{E as s,S as o}from"./ErrorPage-D-D4Eoce.js";import"./iframe-D5fi-UCI.js";import"./index-Chi_LkuB.js";import"./useDOI-Bs_89WHy.js";import"./waitForAsyncResult-BWOFUmRc.js";import"./useMessage-c4TR0_c6.js";import"./useUserBundle-BCRG-aLd.js";import"./ConfirmationDialog-8rzP4g0a.js";import"./DialogBase-xIV-zqs7.js";import"./Close-BMHbbE_Q.js";import"./HelpPopover-BWSi51uC.js";import"./MarkdownPopover-D-5Kyx4k.js";import"./LightTooltip-DaJf-vKS.js";import"./MarkdownSynapse-BtPA8Eyc.js";import"./SkeletonButton-NAUvRsI1.js";import"./SkeletonInlineBlock-C_oItAmZ.js";import"./SkeletonTable-BVeoay1H.js";import"./SkeletonParagraph-DOydOX8X.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
