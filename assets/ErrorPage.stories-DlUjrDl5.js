import{S as o,E as s}from"./ErrorPage-C1Kzz96G.js";import"./iframe-FEhVLLlO.js";import"./index-Chi_LkuB.js";import"./useDOI-CxxmE6In.js";import"./waitForAsyncResult-t0DbMLjp.js";import"./useMessage-Dxa0oFA9.js";import"./useUserBundle-pC4-2Gey.js";import"./ConfirmationDialog-CG4E-k04.js";import"./DialogBase-CoYwCscs.js";import"./Close-DZo8bFox.js";import"./HelpPopover-D3iP0jDl.js";import"./MarkdownPopover-DPlLoOvl.js";import"./LightTooltip-CY2wMOzf.js";import"./MarkdownSynapse-FlaLI_XD.js";import"./SkeletonButton-Co5le0HJ.js";import"./SkeletonInlineBlock-DfOva5mF.js";import"./SkeletonTable-B83fe7X5.js";import"./SkeletonParagraph-u_Ry22JM.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
