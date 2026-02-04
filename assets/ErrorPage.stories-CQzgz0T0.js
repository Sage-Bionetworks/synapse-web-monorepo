import{E as s,S as a}from"./ErrorPage-G4e45Nh2.js";import"./iframe-PYPp7xnK.js";import"./index-Chi_LkuB.js";import"./useDOI-DciwLO8s.js";import"./waitForAsyncResult-CJTfxzvf.js";import"./useMessage-Z7mZsE7J.js";import"./useUserBundle-Cc0t0_AU.js";import"./useSuspenseQuery-DpR9wtQx.js";import"./ConfirmationDialog-2zXE13iH.js";import"./DialogBase-d_CECZtd.js";import"./Close-NsSVTbKR.js";import"./HelpPopover-CRuNxnYI.js";import"./MarkdownPopover-CTfESMzb.js";import"./LightTooltip-DTNQsZN6.js";import"./MarkdownSynapse-nwSv3Tm6.js";import"./SkeletonButton-CWan3o9p.js";import"./SkeletonInlineBlock-CdKZUiWg.js";import"./SkeletonTable-CVr3KqkK.js";import"./SkeletonParagraph-DNnDNfQN.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
