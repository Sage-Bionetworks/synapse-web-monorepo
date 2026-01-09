import{E as s,S as a}from"./ErrorPage-BzK560Oa.js";import"./iframe-DCJ7skCF.js";import"./index-Chi_LkuB.js";import"./useDOI-DNy1WNL4.js";import"./waitForAsyncResult-MnBw5tPF.js";import"./useMessage-BuZWJtaY.js";import"./useUserBundle-B1IzmcZW.js";import"./useSuspenseQuery-hpjNpxLU.js";import"./ConfirmationDialog-CNckvYkU.js";import"./DialogBase-DG8iPOdE.js";import"./Close-D40JfmeO.js";import"./HelpPopover-DR0W0zRn.js";import"./MarkdownPopover-C1w3Ce6S.js";import"./LightTooltip-C9fCe4UT.js";import"./MarkdownSynapse-BU0jW5rD.js";import"./SkeletonButton-Ckcy3ANt.js";import"./SkeletonInlineBlock-XM0IHiqH.js";import"./SkeletonTable-91lmyC3W.js";import"./SkeletonParagraph-CIIa240g.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.DOWN,
    message: "We're busy updating Synapse for you and will be back soon."
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.ACCESS_DENIED,
    entityId: 'syn12345'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.NOT_FOUND
  }
}`,...o.parameters?.docs?.source}}};const A=["Maintenance","NoAccess","Unavailable"];export{r as Maintenance,e as NoAccess,o as Unavailable,A as __namedExportsOrder,U as default};
