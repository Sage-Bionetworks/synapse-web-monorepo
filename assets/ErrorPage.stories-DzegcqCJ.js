import{E as s,S as a}from"./ErrorPage-C-G7Dfs2.js";import"./iframe-BnzpyZ4R.js";import"./index-Chi_LkuB.js";import"./useDOI-EM7QAZ4l.js";import"./waitForAsyncResult-BOr1EZ6I.js";import"./useMessage-Dob3Dpo4.js";import"./useUserBundle-DkcVB5OF.js";import"./useSuspenseQuery-DmgOfBUR.js";import"./ConfirmationDialog-BnDH1gry.js";import"./DialogBase-MszPryaT.js";import"./Close-R1S7vilm.js";import"./HelpPopover-Dd3HqNDX.js";import"./MarkdownPopover-CNvQsgo4.js";import"./LightTooltip-R3PWvr3X.js";import"./MarkdownSynapse-CvPnj5RJ.js";import"./SkeletonButton-BV5Vd7zv.js";import"./SkeletonInlineBlock-DHtOAZL_.js";import"./SkeletonTable-BvL0lrSq.js";import"./SkeletonParagraph-8Qf6t-Ql.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
