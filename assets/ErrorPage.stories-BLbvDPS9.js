import{E as s,S as o}from"./ErrorPage-BljzCtQO.js";import"./iframe-DIHgldxa.js";import"./index-Chi_LkuB.js";import"./useDOI-BJNMjtpx.js";import"./waitForAsyncResult-C9emP7m5.js";import"./useMessage-BRGvYBne.js";import"./useUserBundle-DlpivQb3.js";import"./ConfirmationDialog-B1pUQtYb.js";import"./DialogBase-BoGr-CRZ.js";import"./Close-B9FxdBmj.js";import"./HelpPopover-CojtIfyp.js";import"./MarkdownPopover-Brc4t5Ga.js";import"./LightTooltip-BLPTEgz7.js";import"./MarkdownSynapse-VQjxuG79.js";import"./SkeletonButton-CflRIFGp.js";import"./SkeletonInlineBlock-eDwQJ6BQ.js";import"./SkeletonTable-kyH1U49B.js";import"./SkeletonParagraph-Bj2Sqp59.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
