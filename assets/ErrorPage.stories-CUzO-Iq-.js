import{S as o,E as s}from"./ErrorPage-D2LAyx6_.js";import"./iframe-D7cxPiDf.js";import"./index-Chi_LkuB.js";import"./useDOI-qUqVpoPi.js";import"./waitForAsyncResult-C2mLuWhG.js";import"./useMessage-PEbj_LqN.js";import"./useUserBundle-BfK4pX7T.js";import"./ConfirmationDialog-DUvSWS7G.js";import"./DialogBase-5a5Z8JWG.js";import"./Close-Du54B76W.js";import"./HelpPopover-dkwX9Qyj.js";import"./MarkdownPopover-BoWdnzj9.js";import"./LightTooltip-BKRysDKC.js";import"./MarkdownSynapse-BKDmyY35.js";import"./SkeletonButton-C1ogbO9H.js";import"./SkeletonInlineBlock-CPizO8Fa.js";import"./SkeletonTable-CXYD3wmd.js";import"./SkeletonParagraph-BqM2-1Ca.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
