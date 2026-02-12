import{E as s,S as a}from"./ErrorPage-CgmsEfP1.js";import"./iframe-BYI6UvQX.js";import"./index-Chi_LkuB.js";import"./useDOI-BfUC3JRP.js";import"./waitForAsyncResult-CvG0t9Gq.js";import"./useMessage-DK22VOV3.js";import"./useUserBundle-Be9uEwgr.js";import"./useSuspenseQuery-CyhHWdVP.js";import"./ConfirmationDialog-toxY45nm.js";import"./DialogBase-C1QyiwVh.js";import"./Close-Clh2xDFP.js";import"./HelpPopover-DhAbnR7s.js";import"./MarkdownPopover-B8qxAI9Z.js";import"./LightTooltip-BPs4I3gS.js";import"./MarkdownSynapse-DLgizTv6.js";import"./SkeletonButton-moYwMGBJ.js";import"./SkeletonInlineBlock-CvF0ovYz.js";import"./SkeletonTable-D-cfGk8m.js";import"./SkeletonParagraph-BUXmdzG2.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
