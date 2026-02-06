import{E as s,S as a}from"./ErrorPage-pCAn1NVu.js";import"./iframe-CL1UF9wq.js";import"./index-Chi_LkuB.js";import"./useDOI-B-aVVhl9.js";import"./waitForAsyncResult-CPjw8Ifw.js";import"./useMessage-cyU4LEi0.js";import"./useUserBundle-BcHOhtU-.js";import"./useSuspenseQuery-LePCNQBH.js";import"./ConfirmationDialog-BgArY7GH.js";import"./DialogBase-D_WMzDU9.js";import"./Close-BWRQhN2m.js";import"./HelpPopover-jj4j5zDP.js";import"./MarkdownPopover-BLBfaCop.js";import"./LightTooltip-DY-wPTTk.js";import"./MarkdownSynapse-CdtBHZEE.js";import"./SkeletonButton-CYgioBCP.js";import"./SkeletonInlineBlock-CJQan7gL.js";import"./SkeletonTable-DMqnct0i.js";import"./SkeletonParagraph-D55VBz6b.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
