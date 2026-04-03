import{S as o,E as s}from"./ErrorPage-CFQ1V4xo.js";import"./iframe-BbbR7k03.js";import"./index-Chi_LkuB.js";import"./useDOI-Bu9krgNO.js";import"./waitForAsyncResult-RRdJUPgA.js";import"./useMessage-DRVnUilm.js";import"./useUserBundle-DbQDA0bX.js";import"./ConfirmationDialog-Cco6Zt2n.js";import"./DialogBase-DG8acb1Q.js";import"./Close-BJFIRJbz.js";import"./HelpPopover-Fxn4OJ3p.js";import"./MarkdownPopover-DjDkPlLu.js";import"./LightTooltip-CglVqYUv.js";import"./MarkdownSynapse-ZvWb7i2I.js";import"./SkeletonButton-DffrNQo6.js";import"./SkeletonInlineBlock-BbM-xsbl.js";import"./SkeletonTable-Dx60MFYV.js";import"./SkeletonParagraph-NMWzktwn.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
