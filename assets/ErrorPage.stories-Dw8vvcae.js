import{E as s,S as a}from"./ErrorPage-C9yYYKJB.js";import"./iframe-DCS9ymbE.js";import"./index-Chi_LkuB.js";import"./useDOI-CDXFG_ee.js";import"./waitForAsyncResult-R_E71WNz.js";import"./useMessage-gLi44Ci1.js";import"./useUserBundle-Cgt8UTAe.js";import"./useSuspenseQuery-CJw-BZwU.js";import"./ConfirmationDialog-By5IYndx.js";import"./DialogBase-DjdKIz7b.js";import"./Close-CkQlcHF3.js";import"./HelpPopover-B2Qog0x5.js";import"./MarkdownPopover-D_3YeZyN.js";import"./LightTooltip-CLHQn5en.js";import"./MarkdownSynapse-m-Kv7fzM.js";import"./SkeletonButton-D3cSL18R.js";import"./SkeletonInlineBlock-BqZQuSX9.js";import"./SkeletonTable-Mr15HLUy.js";import"./SkeletonParagraph-CpW8pclE.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
