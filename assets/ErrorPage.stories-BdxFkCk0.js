import{E as s,S as a}from"./ErrorPage-CVaT-84X.js";import"./iframe-BjUpq5xd.js";import"./index-Chi_LkuB.js";import"./useDOI-D9vTlaYT.js";import"./waitForAsyncResult-DiQFMeJ1.js";import"./useMessage-DIj7gfMP.js";import"./useUserBundle-CjiLCz0M.js";import"./useSuspenseQuery-DbgujXvY.js";import"./ConfirmationDialog-B5pmgtC9.js";import"./DialogBase-CzW-EroP.js";import"./Close-CJMPACEo.js";import"./HelpPopover-DKCN5vTJ.js";import"./MarkdownPopover-DUsub1Bj.js";import"./LightTooltip-DMh9w68D.js";import"./MarkdownSynapse-DVFomeAo.js";import"./SkeletonButton-CV3RH36o.js";import"./SkeletonInlineBlock-ANrbFXbS.js";import"./SkeletonTable-B-Y_KPUW.js";import"./SkeletonParagraph-C60Mi91l.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
