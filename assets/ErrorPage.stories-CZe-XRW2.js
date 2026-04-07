import{S as o,E as s}from"./ErrorPage-DytbPysG.js";import"./iframe-p1uXGzN2.js";import"./index-Chi_LkuB.js";import"./useDOI-Bfr6JojE.js";import"./waitForAsyncResult-BrEYAAFP.js";import"./useMessage-D15Upnlz.js";import"./useUserBundle-DMNSYcHB.js";import"./ConfirmationDialog-DZOX2IVv.js";import"./DialogBase-C28ovCoY.js";import"./Close-3JlU0mJd.js";import"./HelpPopover-CijXRCXX.js";import"./MarkdownPopover-JkjhCwra.js";import"./LightTooltip-QHB5I4_E.js";import"./MarkdownSynapse-CKFbJzqU.js";import"./SkeletonButton-DFboq54i.js";import"./SkeletonInlineBlock-Bg4QuJBO.js";import"./SkeletonTable-DxscU1yp.js";import"./SkeletonParagraph-D9GGG1Tt.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
