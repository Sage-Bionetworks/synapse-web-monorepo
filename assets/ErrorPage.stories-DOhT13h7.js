import{E as s,S as o}from"./ErrorPage-Dt1N1iIc.js";import"./iframe-CmEjpYjv.js";import"./index-Chi_LkuB.js";import"./useDOI-Bsg9Qe98.js";import"./waitForAsyncResult-Dweq22Et.js";import"./useMessage-DUD3PklL.js";import"./useUserBundle-BHQhULZq.js";import"./ConfirmationDialog-CU57bm7H.js";import"./DialogBase-axU2QUsf.js";import"./Close-DrVlknUt.js";import"./HelpPopover-g9_OAG8r.js";import"./MarkdownPopover-C9iZcAOm.js";import"./LightTooltip-HedBxZph.js";import"./MarkdownSynapse--zkp7VAK.js";import"./SkeletonButton-DlNsrAb3.js";import"./SkeletonInlineBlock-CbyXGVtN.js";import"./SkeletonTable-Bui1t3TM.js";import"./SkeletonParagraph-CQ6ji8az.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
