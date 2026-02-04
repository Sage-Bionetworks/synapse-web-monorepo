import{E as s,S as a}from"./ErrorPage-BO4Xhw--.js";import"./iframe-9zwml_ZL.js";import"./index-Chi_LkuB.js";import"./useDOI-DlIuD8tW.js";import"./waitForAsyncResult-xFvQUvkh.js";import"./useMessage-CFICFxrl.js";import"./useUserBundle-MekiU7Qn.js";import"./useSuspenseQuery-DROjoE-r.js";import"./ConfirmationDialog-_IRTHH0j.js";import"./DialogBase-Hity4xAw.js";import"./Close-Bx_JZLf8.js";import"./HelpPopover-Cf3W3rHJ.js";import"./MarkdownPopover-BsgLS8bs.js";import"./LightTooltip-BlBY8chN.js";import"./MarkdownSynapse-eByBmLQG.js";import"./SkeletonButton-C8wU0a4y.js";import"./SkeletonInlineBlock-D9CRPwvT.js";import"./SkeletonTable-CtHOf3Y6.js";import"./SkeletonParagraph-jYvf1dwm.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
