import{E as s,S as o}from"./ErrorPage-B5a4BoHw.js";import"./iframe-DrwjMxxV.js";import"./index-Chi_LkuB.js";import"./useDOI-CokCugCO.js";import"./waitForAsyncResult-B2qc9SR4.js";import"./useMessage-BxB_BG0b.js";import"./useUserBundle-Bvpmk8jd.js";import"./ConfirmationDialog-B4VjD6Ag.js";import"./DialogBase-nWKWc-JJ.js";import"./Close-CigZT9Cr.js";import"./HelpPopover-B9CXRuRH.js";import"./MarkdownPopover-DnCXWrW5.js";import"./LightTooltip-CaqdPU_H.js";import"./MarkdownSynapse-CBAvDJdh.js";import"./SkeletonButton-B0AmZCB5.js";import"./SkeletonInlineBlock-CN425wR7.js";import"./SkeletonTable-hPiR5C1z.js";import"./SkeletonParagraph-zDUPBNGu.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
