import{S as a,E as s}from"./ErrorPage-CU1wEtdd.js";import"./iframe-ebumedXL.js";import"./index-Chi_LkuB.js";import"./useDOI-D0Cndx76.js";import"./waitForAsyncResult-BVaFV40B.js";import"./useMessage-CxpUe4Q0.js";import"./useUserBundle-ClJAa-1h.js";import"./queryOptions-C9woPjwX.js";import"./ConfirmationDialog-Cl7cQ4Nu.js";import"./DialogBase-CStF3dxn.js";import"./Close-BrRtpMs2.js";import"./HelpPopover-BgDuyYAY.js";import"./MarkdownPopover-B-Z3CE2b.js";import"./LightTooltip-CgA2Jxaj.js";import"./MarkdownSynapse-BSPB6zOl.js";import"./SkeletonButton-ClK4nZ4V.js";import"./SkeletonInlineBlock--tfqxNwn.js";import"./SkeletonTable-D1WsuyYZ.js";import"./SkeletonParagraph-CjkSb5xZ.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
