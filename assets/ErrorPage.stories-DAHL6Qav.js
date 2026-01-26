import{E as s,S as a}from"./ErrorPage-BOw0r-5H.js";import"./iframe-BZ6Cksnd.js";import"./index-Chi_LkuB.js";import"./useDOI-Drfr1xTn.js";import"./waitForAsyncResult-Cb2vkw9U.js";import"./useMessage-BLPfKu5C.js";import"./useUserBundle-B39u_n1H.js";import"./useSuspenseQuery-BArtp2Wi.js";import"./ConfirmationDialog-BF42zmYQ.js";import"./DialogBase-DRojLOwK.js";import"./Close-DjUjyOYX.js";import"./HelpPopover-C2Z3UJR4.js";import"./MarkdownPopover-B8e90Ko7.js";import"./LightTooltip-Bs22fiBY.js";import"./MarkdownSynapse-DRGuoN53.js";import"./SkeletonButton-eBqXNQMI.js";import"./SkeletonInlineBlock-CaEvhC-d.js";import"./SkeletonTable-BgNPNqlP.js";import"./SkeletonParagraph-DuP-_ghR.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
