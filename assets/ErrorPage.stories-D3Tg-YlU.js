import{E as s,S as o}from"./ErrorPage-Di2F1Uun.js";import"./iframe-Du6HmmeA.js";import"./index-Chi_LkuB.js";import"./useDOI-DChffspk.js";import"./waitForAsyncResult-1YSjruIx.js";import"./useMessage-VqLOIY95.js";import"./useUserBundle-Bri-n8ny.js";import"./ConfirmationDialog-C8KHwV0t.js";import"./DialogBase-Bo2YvE_C.js";import"./Close-Cg0hP_SZ.js";import"./HelpPopover-DpT2pzHF.js";import"./MarkdownPopover-QWNYSrbD.js";import"./LightTooltip-zyXlWYi4.js";import"./MarkdownSynapse-BKsKuzoi.js";import"./SkeletonButton-B7NYOcGY.js";import"./SkeletonInlineBlock-hXkytNVp.js";import"./SkeletonTable-DFkOLILK.js";import"./SkeletonParagraph-xJMe6-dP.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
