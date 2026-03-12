import{E as s,S as o}from"./ErrorPage-t94hS0k0.js";import"./iframe-Dj9QuIYm.js";import"./index-Chi_LkuB.js";import"./useDOI-D5cmbkLi.js";import"./waitForAsyncResult-sQtuNCJj.js";import"./useMessage-C45N9r7I.js";import"./useUserBundle-Be3ZpYDW.js";import"./ConfirmationDialog-Dwbyyygg.js";import"./DialogBase-Dda3MpTM.js";import"./Close-BjHtaxrZ.js";import"./HelpPopover-BLYAVpYE.js";import"./MarkdownPopover-CcYcEdRz.js";import"./LightTooltip-e6_OdOFE.js";import"./MarkdownSynapse-Dau4XtwA.js";import"./SkeletonButton-iTrOeh7-.js";import"./SkeletonInlineBlock-D2uK1sRl.js";import"./SkeletonTable-rcTO73Uk.js";import"./SkeletonParagraph-8dZQFouk.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
