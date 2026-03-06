import{E as s,S as o}from"./ErrorPage-BRpmxczc.js";import"./iframe-CAtQIdHN.js";import"./index-Chi_LkuB.js";import"./useDOI-oRRxygIO.js";import"./waitForAsyncResult-jnXoN6HT.js";import"./useMessage-BBV0S0UK.js";import"./useUserBundle-CwtPx6I8.js";import"./ConfirmationDialog-DyMwO9XA.js";import"./DialogBase-nASrT1FI.js";import"./Close-D6EAZUK8.js";import"./HelpPopover-gTGEtHsE.js";import"./MarkdownPopover-BwU3z6dR.js";import"./LightTooltip-B_-PEZcf.js";import"./MarkdownSynapse-Bl9eZLoo.js";import"./SkeletonButton-ikrND2s9.js";import"./SkeletonInlineBlock-BsYWVoeU.js";import"./SkeletonTable-CGYf92GP.js";import"./SkeletonParagraph-BrBu-G7u.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
