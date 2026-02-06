import{E as s,S as a}from"./ErrorPage-CdSScvao.js";import"./iframe-C4lSw8dA.js";import"./index-Chi_LkuB.js";import"./useDOI-D956K9Iw.js";import"./waitForAsyncResult-B681deaW.js";import"./useMessage-DIiflp9k.js";import"./useUserBundle-Bf0KeHHn.js";import"./useSuspenseQuery-BJTnPWwx.js";import"./ConfirmationDialog-DNAmwDFA.js";import"./DialogBase-BGApbNeN.js";import"./Close-DOQSFODY.js";import"./HelpPopover-udz6cmYg.js";import"./MarkdownPopover-DRlkQ0Uc.js";import"./LightTooltip-PrPowMcP.js";import"./MarkdownSynapse-5q-2r_5x.js";import"./SkeletonButton-DQJTIZ4j.js";import"./SkeletonInlineBlock-Ca77zW6S.js";import"./SkeletonTable-DX2YYbbP.js";import"./SkeletonParagraph-DJj1jg11.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
