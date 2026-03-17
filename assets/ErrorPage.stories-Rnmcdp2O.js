import{E as s,S as o}from"./ErrorPage-Cwo0qbtZ.js";import"./iframe-Bd48Phhx.js";import"./index-Chi_LkuB.js";import"./useDOI-CMQm8t5z.js";import"./waitForAsyncResult-Crh9tSSR.js";import"./useMessage-CzNZ77CO.js";import"./useUserBundle-C0wQg83z.js";import"./ConfirmationDialog-D4Di_An5.js";import"./DialogBase-DJeR-4bo.js";import"./Close-DEayXyHI.js";import"./HelpPopover-DCI79EJV.js";import"./MarkdownPopover-BdpxecKY.js";import"./LightTooltip-Baq7jYr-.js";import"./MarkdownSynapse-BQCReIPi.js";import"./SkeletonButton-yGLAaBDC.js";import"./SkeletonInlineBlock-BSKjVSEt.js";import"./SkeletonTable-DPwFQSrG.js";import"./SkeletonParagraph-keiL0wvn.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
