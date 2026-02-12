import{E as s,S as a}from"./ErrorPage-wNDTesBf.js";import"./iframe-Es1qDbGP.js";import"./index-Chi_LkuB.js";import"./useDOI-sR873PYa.js";import"./waitForAsyncResult-CSZ04idT.js";import"./useMessage-B2CzUPpF.js";import"./useUserBundle-B6mxhG5s.js";import"./useSuspenseQuery-CeVxUvBp.js";import"./ConfirmationDialog-Dm9z241S.js";import"./DialogBase-CnbWvOma.js";import"./Close-B3u-lq2b.js";import"./HelpPopover-C93LpQuO.js";import"./MarkdownPopover-BNqNuP7X.js";import"./LightTooltip-BYZb259d.js";import"./MarkdownSynapse-Bc_1YooS.js";import"./SkeletonButton-Dk6hA76Q.js";import"./SkeletonInlineBlock-ClWMeLhu.js";import"./SkeletonTable-lZm0nrpb.js";import"./SkeletonParagraph-DsApyNFa.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
