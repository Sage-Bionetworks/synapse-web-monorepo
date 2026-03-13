import{E as s,S as o}from"./ErrorPage-xlE4xSwL.js";import"./iframe-DR0uSfJB.js";import"./index-Chi_LkuB.js";import"./useDOI-DwLzL3IN.js";import"./waitForAsyncResult-BCQWJAtT.js";import"./useMessage-h6fNz5to.js";import"./useUserBundle-GG-xTFJo.js";import"./ConfirmationDialog-DZyRzdVz.js";import"./DialogBase-BCLn1mc7.js";import"./Close-DW5206ij.js";import"./HelpPopover-BiI80afJ.js";import"./MarkdownPopover-CdU2RNyH.js";import"./LightTooltip-CqEwD-qc.js";import"./MarkdownSynapse-BewMr670.js";import"./SkeletonButton-hycMW2ML.js";import"./SkeletonInlineBlock-Cc3tKGBX.js";import"./SkeletonTable-DQpC9D8t.js";import"./SkeletonParagraph-FBICusf3.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
