import{S as o,E as s}from"./ErrorPage-Bd0qzmXc.js";import"./iframe-ClOjSJTq.js";import"./index-Chi_LkuB.js";import"./useDOI-CxC06UYY.js";import"./waitForAsyncResult-BA78SNVo.js";import"./useMessage-BGZwygiQ.js";import"./useUserBundle-F9LYJoss.js";import"./ConfirmationDialog-BJVxGzfJ.js";import"./DialogBase-B-Ztm902.js";import"./Close-Bm9lWJyo.js";import"./HelpPopover-C7jMTeEB.js";import"./MarkdownPopover-Bc65lpb5.js";import"./LightTooltip-BNOwvCMp.js";import"./MarkdownSynapse-BDWo9JUV.js";import"./SkeletonButton-_jksuL_Y.js";import"./SkeletonInlineBlock-BlfzAWSG.js";import"./SkeletonTable-j4z7TzDn.js";import"./SkeletonParagraph-C8wM_A5n.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
