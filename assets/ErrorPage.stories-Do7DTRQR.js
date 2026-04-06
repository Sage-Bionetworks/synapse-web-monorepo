import{S as o,E as s}from"./ErrorPage-DAdkaz9x.js";import"./iframe-DEq4Fwc_.js";import"./index-Chi_LkuB.js";import"./useDOI-shMS_wHn.js";import"./waitForAsyncResult-BosLm77H.js";import"./useMessage-D7LKTCXl.js";import"./useUserBundle-DhUzGqE3.js";import"./ConfirmationDialog-r9JWHI-k.js";import"./DialogBase-C4vq_sVg.js";import"./Close-YBK2a75v.js";import"./HelpPopover-kHe5ruIB.js";import"./MarkdownPopover-CvAv5IbO.js";import"./LightTooltip-YqL3Vmul.js";import"./MarkdownSynapse-C1TpcYQU.js";import"./SkeletonButton-Cgw-w1QX.js";import"./SkeletonInlineBlock-Ct1mjrTN.js";import"./SkeletonTable-CssHy_cG.js";import"./SkeletonParagraph-C2zzRv3g.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
