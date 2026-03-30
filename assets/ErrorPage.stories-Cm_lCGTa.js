import{E as s,S as o}from"./ErrorPage-x1w3Sj14.js";import"./iframe-la5pZNJP.js";import"./index-Chi_LkuB.js";import"./useDOI-BU7LLKCF.js";import"./waitForAsyncResult-Bv9S2_zR.js";import"./useMessage-PvSgr98s.js";import"./useUserBundle-DcSi2JrE.js";import"./ConfirmationDialog-BYOqzzUy.js";import"./DialogBase-CC3Fom-D.js";import"./Close-CPzKBjYo.js";import"./HelpPopover-BinEOj-x.js";import"./MarkdownPopover-DWH2OeX9.js";import"./LightTooltip-CcK1WQdJ.js";import"./MarkdownSynapse-DdvlGI58.js";import"./SkeletonButton-Cnars53-.js";import"./SkeletonInlineBlock-IWHLRfGq.js";import"./SkeletonTable-jKVXe2RG.js";import"./SkeletonParagraph-D00HqPxF.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
