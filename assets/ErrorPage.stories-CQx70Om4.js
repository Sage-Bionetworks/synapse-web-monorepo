import{E as s,S as o}from"./ErrorPage-RsLuwyuF.js";import"./iframe-DFPaMFUW.js";import"./index-Chi_LkuB.js";import"./useDOI-CChL843Q.js";import"./waitForAsyncResult-Dk_Lsa0e.js";import"./useMessage-Dd5ApZef.js";import"./useUserBundle-DG8h57yP.js";import"./ConfirmationDialog-BbwsptfA.js";import"./DialogBase-CfJynkow.js";import"./Close-DygzjPd4.js";import"./HelpPopover-DAgt0Xyv.js";import"./MarkdownPopover-BKU0C0F-.js";import"./LightTooltip-BvScHsJR.js";import"./MarkdownSynapse-BEFLpSba.js";import"./SkeletonButton-DH_a4yMQ.js";import"./SkeletonInlineBlock-9K5K-2fN.js";import"./SkeletonTable-CGGRLKpb.js";import"./SkeletonParagraph-D2lfRP01.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
