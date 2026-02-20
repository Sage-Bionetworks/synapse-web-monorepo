import{E as s,S as a}from"./ErrorPage-6U7QSydM.js";import"./iframe-D1nGOIH-.js";import"./index-Chi_LkuB.js";import"./useDOI-B8wiNBwB.js";import"./waitForAsyncResult-D4zx6sh1.js";import"./useMessage-BFcdE0fx.js";import"./useUserBundle-ET8KNRSc.js";import"./useSuspenseQuery-a9uGkD3u.js";import"./ConfirmationDialog-KaL_8gr2.js";import"./DialogBase-BnZdlh2N.js";import"./Close-CDjnP_xh.js";import"./HelpPopover-CtFsUa-K.js";import"./MarkdownPopover-B2h4XJDI.js";import"./LightTooltip-CyHZNf0u.js";import"./MarkdownSynapse-DdwRiDDQ.js";import"./SkeletonButton-B1c1lzEn.js";import"./SkeletonInlineBlock-BiIlwrm4.js";import"./SkeletonTable-DawIinBB.js";import"./SkeletonParagraph-DPQazNTU.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
