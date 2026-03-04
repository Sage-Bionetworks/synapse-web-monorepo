import{E as s,S as o}from"./ErrorPage-BM2Ryq5P.js";import"./iframe-BoxuKy9E.js";import"./index-Chi_LkuB.js";import"./useDOI-CcgRZYLc.js";import"./waitForAsyncResult-CPH2Os32.js";import"./useMessage-BgQefzJV.js";import"./useUserBundle-xbyPhtej.js";import"./ConfirmationDialog-CIPv0_VW.js";import"./DialogBase-D71Bzuhw.js";import"./Close-D2FDtn_Z.js";import"./HelpPopover-D7Iu88Kq.js";import"./MarkdownPopover-4O8M2I8a.js";import"./LightTooltip-DwenlRx7.js";import"./MarkdownSynapse-CBVUbKcu.js";import"./SkeletonButton-BIE6flyK.js";import"./SkeletonInlineBlock-BI06okMA.js";import"./SkeletonTable-BDD50YXU.js";import"./SkeletonParagraph-Cla7VaV-.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
