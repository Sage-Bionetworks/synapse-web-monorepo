import{S as o,E as s}from"./ErrorPage-B-gO_TmL.js";import"./iframe-BCS2zFLE.js";import"./index-Chi_LkuB.js";import"./useDOI-DFK6wdCT.js";import"./waitForAsyncResult-DCvipv8q.js";import"./useMessage-7LvEULvl.js";import"./useUserBundle-CeR9IeV9.js";import"./ConfirmationDialog-BsPPfOv5.js";import"./DialogBase-DQkj6zY_.js";import"./Close-D_V12edy.js";import"./HelpPopover-S99r4Lui.js";import"./MarkdownPopover-BSxLlxLY.js";import"./LightTooltip-CQxu9Yos.js";import"./MarkdownSynapse-CJf-YsFP.js";import"./SkeletonButton-BlPG-SPD.js";import"./SkeletonInlineBlock-9a6I1Gvz.js";import"./SkeletonTable-D-hZBWBR.js";import"./SkeletonParagraph-Ch_An-pk.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
