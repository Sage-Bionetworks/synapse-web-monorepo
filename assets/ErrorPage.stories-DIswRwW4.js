import{S as o,E as s}from"./ErrorPage-BDwVzaP0.js";import"./iframe-Ddo1nd2c.js";import"./index-Chi_LkuB.js";import"./useDOI-D_-C_POa.js";import"./waitForAsyncResult-w2oqcPPV.js";import"./useMessage-DrGSmCTL.js";import"./useUserBundle-CRr4o42O.js";import"./ConfirmationDialog-DbD8Znq3.js";import"./DialogBase-CayqfCYU.js";import"./Close-Bdp-VK_k.js";import"./HelpPopover-CG9mhVeJ.js";import"./MarkdownPopover-Dbkj-DS5.js";import"./LightTooltip-LQW8Tril.js";import"./MarkdownSynapse-D36GJOu2.js";import"./SkeletonButton-0wbjxtel.js";import"./SkeletonInlineBlock-CIgujLoL.js";import"./SkeletonTable-0-Nn1Nvg.js";import"./SkeletonParagraph-B50bUVUG.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
