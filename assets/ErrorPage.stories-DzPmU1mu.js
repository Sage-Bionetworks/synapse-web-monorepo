import{E as s,S as a}from"./ErrorPage-Bg_zL7SK.js";import"./iframe-MmUnwf_I.js";import"./index-Chi_LkuB.js";import"./useDOI-OF67-XbO.js";import"./waitForAsyncResult-7dp-BdCi.js";import"./useMessage-DuJFm3fG.js";import"./useUserBundle-Dndd3Zuv.js";import"./useSuspenseQuery-BiDsxdrf.js";import"./ConfirmationDialog-GHfYW2YY.js";import"./DialogBase-jau6DM0L.js";import"./Close-B3vYte_0.js";import"./HelpPopover-DtES8MA2.js";import"./MarkdownPopover-DoWodOdq.js";import"./LightTooltip-4Nk8Q6mg.js";import"./MarkdownSynapse-CVJ0Q6XW.js";import"./SkeletonButton-I9hMZOT-.js";import"./SkeletonInlineBlock-Di0FCUFm.js";import"./SkeletonTable-BLb5k01Q.js";import"./SkeletonParagraph-_n4WmOaG.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
