import{S as o,E as s}from"./ErrorPage-CAubN0Vn.js";import"./iframe-Bg-s9pTZ.js";import"./index-Chi_LkuB.js";import"./useDOI-Zj_rBQMc.js";import"./waitForAsyncResult-CHOW76L3.js";import"./useMessage-Csr7WP2B.js";import"./useUserBundle-Dt_B1mhI.js";import"./ConfirmationDialog-D8nwHqWo.js";import"./DialogBase-DgBP91vj.js";import"./Close-1Ub5h9Ti.js";import"./HelpPopover-cbNyKjRR.js";import"./MarkdownPopover-DsmK9fKf.js";import"./LightTooltip-CZzLKYGi.js";import"./MarkdownSynapse-xJpqab6Z.js";import"./SkeletonButton-Dp_QSsYr.js";import"./SkeletonInlineBlock-BF2HGXEd.js";import"./SkeletonTable-Bbn4NeNZ.js";import"./SkeletonParagraph-B9vNapgZ.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
