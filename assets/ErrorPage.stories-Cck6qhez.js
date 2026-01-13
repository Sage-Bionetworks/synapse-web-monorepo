import{E as s,S as a}from"./ErrorPage-CjWkKPYJ.js";import"./iframe-DVNYwO2X.js";import"./index-Chi_LkuB.js";import"./useDOI-BfdYh_aE.js";import"./waitForAsyncResult-BYoUXfHm.js";import"./useMessage-BFQ9HhVk.js";import"./useUserBundle-DscWjVV3.js";import"./useSuspenseQuery-33kCA9BT.js";import"./ConfirmationDialog-u7vUp13p.js";import"./DialogBase-D-pfxM0N.js";import"./Close-BRaPVnbs.js";import"./HelpPopover-CGudOJSg.js";import"./MarkdownPopover-BeI37cFn.js";import"./LightTooltip-bl3iHu17.js";import"./MarkdownSynapse-5ft7ZGQf.js";import"./SkeletonButton-CiDtB3IB.js";import"./SkeletonInlineBlock-Bgae_khf.js";import"./SkeletonTable-BpqkbE8o.js";import"./SkeletonParagraph-Bq0xaWku.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
