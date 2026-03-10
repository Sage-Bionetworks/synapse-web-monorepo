import{E as s,S as o}from"./ErrorPage-CAx0l7q0.js";import"./iframe-DJOT8ubk.js";import"./index-Chi_LkuB.js";import"./useDOI-C5AoDiXO.js";import"./waitForAsyncResult-DpX0JqhD.js";import"./useMessage-DPtaKWtq.js";import"./useUserBundle-B3bDvO5I.js";import"./ConfirmationDialog-D-4hDJN8.js";import"./DialogBase-C-V5Cw2E.js";import"./Close-DdNyWCxq.js";import"./HelpPopover-Ce02sqI5.js";import"./MarkdownPopover-DiesQhNw.js";import"./LightTooltip-C1GNiWuq.js";import"./MarkdownSynapse-BCTt75oT.js";import"./SkeletonButton-AJ5Zwmr0.js";import"./SkeletonInlineBlock-x0qIf0wc.js";import"./SkeletonTable-DlP5X3HC.js";import"./SkeletonParagraph-COpY1z9l.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
