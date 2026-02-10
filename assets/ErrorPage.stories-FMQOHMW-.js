import{E as s,S as a}from"./ErrorPage-BriqItNT.js";import"./iframe-C80DNIXY.js";import"./index-Chi_LkuB.js";import"./useDOI-BRb2EG7Z.js";import"./waitForAsyncResult-DgE--Zg4.js";import"./useMessage-CYTOITzr.js";import"./useUserBundle-Ck2w6lrW.js";import"./useSuspenseQuery-CqybcQ2J.js";import"./ConfirmationDialog-C9JPgHed.js";import"./DialogBase-Cay5tgui.js";import"./Close-BuMywD3y.js";import"./HelpPopover-BipFBkNI.js";import"./MarkdownPopover-B07suYMP.js";import"./LightTooltip-DMhSxq7g.js";import"./MarkdownSynapse-DKqR68s3.js";import"./SkeletonButton-uDijPjPz.js";import"./SkeletonInlineBlock-DqQYipf9.js";import"./SkeletonTable-WwsVDHsD.js";import"./SkeletonParagraph-nOvV6g22.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
