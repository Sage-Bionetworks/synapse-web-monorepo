import{S as o,E as s}from"./ErrorPage-BQy4yzbk.js";import"./iframe-Dwm9QZ_I.js";import"./index-Chi_LkuB.js";import"./useDOI-CEpJAPqH.js";import"./waitForAsyncResult-D1OBZWiQ.js";import"./useMessage-DhzNSzdR.js";import"./useUserBundle-rJLvBIVN.js";import"./ConfirmationDialog-CHhvt_BX.js";import"./DialogBase-pWEI67Dp.js";import"./Close-DNV_aDsb.js";import"./HelpPopover-DSvAr6aj.js";import"./MarkdownPopover-ChhIn-uU.js";import"./LightTooltip-3cLsOXKA.js";import"./MarkdownSynapse-DFdN_MTr.js";import"./SkeletonButton-DgRSBFJp.js";import"./SkeletonInlineBlock-Oe83SNYG.js";import"./SkeletonTable-CYNdtRWy.js";import"./SkeletonParagraph-BN0GLaey.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
