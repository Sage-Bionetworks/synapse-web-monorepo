import{S as o,E as s}from"./ErrorPage-CZCn4SZA.js";import"./iframe-CbfOQY0w.js";import"./index-Chi_LkuB.js";import"./useDOI-BI5HHrGc.js";import"./waitForAsyncResult-B5kqacQY.js";import"./useMessage-D3IwqhX6.js";import"./useUserBundle-CVhFQva8.js";import"./ConfirmationDialog-XDNgseZX.js";import"./DialogBase-Caocv0xu.js";import"./Close-Cq5UpdYv.js";import"./HelpPopover-D7Lqd1_Q.js";import"./MarkdownPopover-BdMXAVvu.js";import"./LightTooltip-C9p3LJOV.js";import"./MarkdownSynapse-C1Hg73kZ.js";import"./SkeletonButton-DqLe50tO.js";import"./SkeletonInlineBlock-be42gePS.js";import"./SkeletonTable-CE4I0355.js";import"./SkeletonParagraph-CCe-_wHo.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
