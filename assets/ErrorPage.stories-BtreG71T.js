import{E as s,S as o}from"./ErrorPage-BGsaFrv4.js";import"./iframe-BXOaFC93.js";import"./index-Chi_LkuB.js";import"./useDOI-BF3pRgCJ.js";import"./waitForAsyncResult-DC2AVyM0.js";import"./useMessage-CZ4Z57cR.js";import"./useUserBundle-GtjAuzC1.js";import"./ConfirmationDialog-B4Nlucy5.js";import"./DialogBase-D6Ud-Adz.js";import"./Close-D1WVTMvM.js";import"./HelpPopover-9iSqJaFc.js";import"./MarkdownPopover-BQxFNv37.js";import"./LightTooltip-CPiLa2tV.js";import"./MarkdownSynapse-BQFq1ZI6.js";import"./SkeletonButton-Bqwyl1dP.js";import"./SkeletonInlineBlock-Cl-hsdeu.js";import"./SkeletonTable-CeAdm2qt.js";import"./SkeletonParagraph-DymEZI1w.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
