import{E as s,S as a}from"./ErrorPage-DOKPRJrO.js";import"./iframe-Du5t3CHa.js";import"./index-Chi_LkuB.js";import"./useDOI-Bi0FamV9.js";import"./waitForAsyncResult-O7hha-sT.js";import"./useMessage-DJhZIUTU.js";import"./useUserBundle-DutONjLY.js";import"./useSuspenseQuery-DK6Y2lqg.js";import"./ConfirmationDialog-DbxOMK7D.js";import"./DialogBase-D3TgpDMO.js";import"./Close-CgG9ZltC.js";import"./HelpPopover-BWwj0Dbm.js";import"./MarkdownPopover-C4H2y9lI.js";import"./LightTooltip-BC8WsuZj.js";import"./MarkdownSynapse-DUHpTVRI.js";import"./SkeletonButton-JJ15ovuj.js";import"./SkeletonInlineBlock-E_CX27Fe.js";import"./SkeletonTable-KNaihl5A.js";import"./SkeletonParagraph-BlwsXkyr.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
