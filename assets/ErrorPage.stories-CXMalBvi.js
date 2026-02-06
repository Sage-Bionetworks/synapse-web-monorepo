import{E as s,S as a}from"./ErrorPage-CAK2yUQt.js";import"./iframe-Ya-g_qay.js";import"./index-Chi_LkuB.js";import"./useDOI-wnVhl6wt.js";import"./waitForAsyncResult-6RMYDUMr.js";import"./useMessage-D3vRAosU.js";import"./useUserBundle-CPxLoWOx.js";import"./useSuspenseQuery-ajSSmE51.js";import"./ConfirmationDialog-BBcvYt37.js";import"./DialogBase-Cq0exykH.js";import"./Close-CwYN6EVd.js";import"./HelpPopover-Cg_-TFXL.js";import"./MarkdownPopover-GltQLah1.js";import"./LightTooltip-CmE9Hp-T.js";import"./MarkdownSynapse-CFShCHbb.js";import"./SkeletonButton-WGw1QxaV.js";import"./SkeletonInlineBlock-BhpPIW12.js";import"./SkeletonTable-gSh9dXdS.js";import"./SkeletonParagraph-B7nhBI0o.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
