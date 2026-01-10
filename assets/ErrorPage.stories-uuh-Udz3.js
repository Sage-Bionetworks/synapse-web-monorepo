import{E as s,S as a}from"./ErrorPage-XMNcqimU.js";import"./iframe-BulltPlS.js";import"./index-Chi_LkuB.js";import"./useDOI-D7Dz-jdq.js";import"./waitForAsyncResult-NHL5LlsU.js";import"./useMessage-M-T9rp23.js";import"./useUserBundle-CcfPRMN_.js";import"./useSuspenseQuery-BZkq8k4a.js";import"./ConfirmationDialog-DF03K_WP.js";import"./DialogBase-Cr1fkWqi.js";import"./Close-w80hutFi.js";import"./HelpPopover-CunOOZhM.js";import"./MarkdownPopover-CmTONRcK.js";import"./LightTooltip-CEqUG5nY.js";import"./MarkdownSynapse-BTFSrs3B.js";import"./SkeletonButton-DU72c3M6.js";import"./SkeletonInlineBlock-BXxRvNES.js";import"./SkeletonTable-BgsdlaOw.js";import"./SkeletonParagraph-DH5smUkj.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
