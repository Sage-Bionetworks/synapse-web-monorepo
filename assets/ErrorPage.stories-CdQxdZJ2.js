import{E as s,S as a}from"./ErrorPage-CTfE9k2E.js";import"./iframe-APvH4-EU.js";import"./index-Chi_LkuB.js";import"./useDOI-Dn2wFkJI.js";import"./waitForAsyncResult-DfOIXiOF.js";import"./useMessage-C7N-hafR.js";import"./useUserBundle-DqlMHXaF.js";import"./useSuspenseQuery-BkKvG_I6.js";import"./ConfirmationDialog-AkXFjHcI.js";import"./DialogBase-DTI285K7.js";import"./Close-DHMYFigw.js";import"./HelpPopover-CGN_eeqD.js";import"./MarkdownPopover-BR7BvXms.js";import"./LightTooltip-DLRUuSTA.js";import"./MarkdownSynapse-DskHTRMD.js";import"./SkeletonButton-DQaucWcO.js";import"./SkeletonInlineBlock-REk_WUt3.js";import"./SkeletonTable-DlsS5ryj.js";import"./SkeletonParagraph-Oi6HEV15.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
