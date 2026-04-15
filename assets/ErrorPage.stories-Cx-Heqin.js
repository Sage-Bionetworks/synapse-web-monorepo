import{S as o,E as s}from"./ErrorPage-DUpTQpz_.js";import"./iframe-CkqKht9A.js";import"./index-Chi_LkuB.js";import"./useDOI-0aTMpGlL.js";import"./waitForAsyncResult-CnLXKWnS.js";import"./useMessage-DW9xw0rz.js";import"./useUserBundle-BsneMIeI.js";import"./ConfirmationDialog-Kok7E28Q.js";import"./DialogBase-Djx01sCY.js";import"./Close-BgF6Uq-0.js";import"./HelpPopover-GKTPM2Ku.js";import"./MarkdownPopover-D9icFnvp.js";import"./LightTooltip-hsorPXi9.js";import"./MarkdownSynapse-tPNUlNWQ.js";import"./SkeletonButton-Di865Zvp.js";import"./SkeletonInlineBlock-Du1ZrXhF.js";import"./SkeletonTable-CWHVzuOA.js";import"./SkeletonParagraph-BjhKqE1J.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
