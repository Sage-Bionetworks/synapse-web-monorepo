import{E as s,S as o}from"./ErrorPage-yQnUj-Je.js";import"./iframe-B_O9kSix.js";import"./index-Chi_LkuB.js";import"./useDOI-P_wJ_tYX.js";import"./waitForAsyncResult-tkMX49Ib.js";import"./useMessage-V03gsxfq.js";import"./useUserBundle-BrtD0xy9.js";import"./ConfirmationDialog-DzRI3wIo.js";import"./DialogBase-DwQ32IO2.js";import"./Close-BwmNujrW.js";import"./HelpPopover-CCcniF6w.js";import"./MarkdownPopover-DRJsMIka.js";import"./LightTooltip-GgpSSUJ5.js";import"./MarkdownSynapse-DfLA11xe.js";import"./SkeletonButton-BM1gzNpw.js";import"./SkeletonInlineBlock-B4Ftzl0H.js";import"./SkeletonTable-DPjCujA-.js";import"./SkeletonParagraph-CyxH5Rsx.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
