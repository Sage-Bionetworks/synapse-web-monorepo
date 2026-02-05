import{E as s,S as a}from"./ErrorPage-DQYQjdge.js";import"./iframe-Fj4lak5c.js";import"./index-Chi_LkuB.js";import"./useDOI-Dp2e2kmL.js";import"./waitForAsyncResult-LZN026nS.js";import"./useMessage-C-zFlKNi.js";import"./useUserBundle-DYUW7eSP.js";import"./useSuspenseQuery-DCz9tJ8h.js";import"./ConfirmationDialog-DfmVN50m.js";import"./DialogBase-DO9GwF3-.js";import"./Close-D8Dcnzwn.js";import"./HelpPopover-Dir9cMCM.js";import"./MarkdownPopover-CTr2IYFG.js";import"./LightTooltip-BvGcOz9H.js";import"./MarkdownSynapse-o56dOjAb.js";import"./SkeletonButton-Caf_IZFe.js";import"./SkeletonInlineBlock-BlJ5s_Kh.js";import"./SkeletonTable-t4KSioMX.js";import"./SkeletonParagraph-CrmOE7Us.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
