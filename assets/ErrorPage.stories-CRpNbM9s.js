import{S as a,E as s}from"./ErrorPage-CG2b8oqp.js";import"./iframe-D6P0nkNQ.js";import"./index-Chi_LkuB.js";import"./useDOI-CBQoG-7r.js";import"./waitForAsyncResult-CWss9xjS.js";import"./useMessage-DVnrMP1X.js";import"./useUserBundle-Da75ZNju.js";import"./queryOptions-C9woPjwX.js";import"./ConfirmationDialog-DbhMChYr.js";import"./DialogBase-CYnhOgAU.js";import"./Close-BEd3pYVj.js";import"./HelpPopover-CaKE4C1W.js";import"./MarkdownPopover-C0soPO-I.js";import"./LightTooltip-Q195xsL6.js";import"./MarkdownSynapse-Csu_X-L3.js";import"./SkeletonButton-CpvcVcC6.js";import"./SkeletonInlineBlock-cwgAS3YS.js";import"./SkeletonTable-B5s8sRSp.js";import"./SkeletonParagraph-Dny_21Xp.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
