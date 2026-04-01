import{E as s,S as o}from"./ErrorPage-PNTJ761d.js";import"./iframe-2O6u4SzH.js";import"./index-Chi_LkuB.js";import"./useDOI-D2knwS_o.js";import"./waitForAsyncResult-DC5gqmgE.js";import"./useMessage-xWneEr-M.js";import"./useUserBundle-BSscApBt.js";import"./ConfirmationDialog-BrGQU89G.js";import"./DialogBase-DL0Zz-CT.js";import"./Close-Bft55rfH.js";import"./HelpPopover-DtPUv-h0.js";import"./MarkdownPopover-DCPcpUWN.js";import"./LightTooltip-C0ip7qPz.js";import"./MarkdownSynapse-B-iJPTvS.js";import"./SkeletonButton-CiuXBI7w.js";import"./SkeletonInlineBlock-BxhXmgi0.js";import"./SkeletonTable-Cg2ViMwY.js";import"./SkeletonParagraph-0TQyd4RC.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
