import{E as s,S as a}from"./ErrorPage-CvaznzSt.js";import"./iframe-D5Jb4H7-.js";import"./index-Chi_LkuB.js";import"./useDOI-BRnSgCPS.js";import"./waitForAsyncResult-OFEpxLsJ.js";import"./useMessage-AfKf5_ZW.js";import"./useUserBundle-B8Qf3-u2.js";import"./useSuspenseQuery-CJo7dxig.js";import"./ConfirmationDialog-Cf6HqVui.js";import"./DialogBase-DbS96YQV.js";import"./Close-CbOuO2km.js";import"./HelpPopover-zrq7Oti8.js";import"./MarkdownPopover-CET6pvp6.js";import"./LightTooltip-D5wkP_b3.js";import"./MarkdownSynapse-BYeobG0y.js";import"./SkeletonButton-C8q9GuK7.js";import"./SkeletonInlineBlock-B1J-x5sp.js";import"./SkeletonTable-CWnnOC4O.js";import"./SkeletonParagraph-1IqDxZQP.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
