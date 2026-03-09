import{E as s,S as o}from"./ErrorPage-CcjQDBsr.js";import"./iframe-CIPlMaLT.js";import"./index-Chi_LkuB.js";import"./useDOI-feT0iWiS.js";import"./waitForAsyncResult-BqQcMEbi.js";import"./useMessage-C1Urgf77.js";import"./useUserBundle-o77XsN2e.js";import"./ConfirmationDialog-fVjFifBD.js";import"./DialogBase-LmDxIN7q.js";import"./Close-BmqKwCBp.js";import"./HelpPopover-BQ8z_T0o.js";import"./MarkdownPopover-DNuS7K0n.js";import"./LightTooltip-DW0Ye48E.js";import"./MarkdownSynapse-DBktvvdU.js";import"./SkeletonButton-BYZF9tG6.js";import"./SkeletonInlineBlock-1S1r7zTT.js";import"./SkeletonTable-CWf8URW0.js";import"./SkeletonParagraph--qeTTP7n.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
