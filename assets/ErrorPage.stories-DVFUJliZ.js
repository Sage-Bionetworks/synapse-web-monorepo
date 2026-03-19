import{E as s,S as o}from"./ErrorPage-BgRv5Pz8.js";import"./iframe-BBruIU4b.js";import"./index-Chi_LkuB.js";import"./useDOI-DTLpB4k1.js";import"./waitForAsyncResult-Ca6rxBp2.js";import"./useMessage-DjbDuwoo.js";import"./useUserBundle-R9FqDICm.js";import"./ConfirmationDialog-DuDymoxB.js";import"./DialogBase-Bhfpkjm2.js";import"./Close-CJayIifx.js";import"./HelpPopover-CCBG3dLd.js";import"./MarkdownPopover-DAFqt0iV.js";import"./LightTooltip-DDmzhRDz.js";import"./MarkdownSynapse-DP7rBl4U.js";import"./SkeletonButton-D4FgXHH-.js";import"./SkeletonInlineBlock-B2nZJXUY.js";import"./SkeletonTable-Bpj6qcuq.js";import"./SkeletonParagraph-D6h0sWgH.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
