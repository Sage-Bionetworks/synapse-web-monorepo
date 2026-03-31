import{E as s,S as o}from"./ErrorPage-1LJ12Vd4.js";import"./iframe-DhpKet55.js";import"./index-Chi_LkuB.js";import"./useDOI-DEaaOHIL.js";import"./waitForAsyncResult-QZl5rD0d.js";import"./useMessage-DfTL4Wwq.js";import"./useUserBundle-MoKPhqqG.js";import"./ConfirmationDialog-C_059iZP.js";import"./DialogBase-CQOhgDpz.js";import"./Close-gzmIzwoR.js";import"./HelpPopover-CPRkTcWQ.js";import"./MarkdownPopover-BFmylr6y.js";import"./LightTooltip-B31RTkkv.js";import"./MarkdownSynapse-BSCmNA0L.js";import"./SkeletonButton-DB6VnDRU.js";import"./SkeletonInlineBlock-BpymSWGX.js";import"./SkeletonTable-CDPXZ6i1.js";import"./SkeletonParagraph-CQn9tuId.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
