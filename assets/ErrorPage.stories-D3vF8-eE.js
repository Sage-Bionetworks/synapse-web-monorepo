import{E as s,S as o}from"./ErrorPage-CyZw0-dR.js";import"./iframe-Caumy8OG.js";import"./index-Chi_LkuB.js";import"./useDOI-DP-bM4t6.js";import"./waitForAsyncResult-CmqXC-Cz.js";import"./useMessage-Bg9PjuFW.js";import"./useUserBundle-YBqMkgNg.js";import"./ConfirmationDialog-IHEJhKNR.js";import"./DialogBase-BwhcKSSX.js";import"./Close-DQtVppmx.js";import"./HelpPopover-DLbRiMnr.js";import"./MarkdownPopover-Ed--YpdW.js";import"./LightTooltip-VmaxT5-P.js";import"./MarkdownSynapse-BvD7qHpg.js";import"./SkeletonButton-CJd-6_Rb.js";import"./SkeletonInlineBlock-Mrzyi1ZX.js";import"./SkeletonTable-Cy3CPYvw.js";import"./SkeletonParagraph-tEoCsyXm.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
