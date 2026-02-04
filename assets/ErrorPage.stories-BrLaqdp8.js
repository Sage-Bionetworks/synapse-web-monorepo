import{E as s,S as a}from"./ErrorPage-Db3Lk_Yk.js";import"./iframe-BE9PbKHz.js";import"./index-Chi_LkuB.js";import"./useDOI-DxbE8LgU.js";import"./waitForAsyncResult-QbDQSu-I.js";import"./useMessage-Br3id3h7.js";import"./useUserBundle-CnmcW3Hx.js";import"./useSuspenseQuery-CEXBd55g.js";import"./ConfirmationDialog-BBc5_vLI.js";import"./DialogBase-DZLlSH8O.js";import"./Close-Cz-06mD9.js";import"./HelpPopover-C9q_fGyh.js";import"./MarkdownPopover-BkMntjjk.js";import"./LightTooltip-Dge4KYYp.js";import"./MarkdownSynapse-277_eni0.js";import"./SkeletonButton-DJTXNqO5.js";import"./SkeletonInlineBlock-CIXdsi0t.js";import"./SkeletonTable-BL3DzlJY.js";import"./SkeletonParagraph-Sl7bNyS_.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
