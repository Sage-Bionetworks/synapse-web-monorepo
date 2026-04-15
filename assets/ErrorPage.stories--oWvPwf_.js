import{S as o,E as s}from"./ErrorPage-BCUAvdEb.js";import"./iframe-C4gfjmJw.js";import"./index-Chi_LkuB.js";import"./useDOI-C497ZDHV.js";import"./waitForAsyncResult-BF5--Pnm.js";import"./useMessage-DUdXgpcB.js";import"./useUserBundle-DCmht4A_.js";import"./ConfirmationDialog-Cn43g34R.js";import"./DialogBase-B_shssNk.js";import"./Close-DN6bOWfw.js";import"./HelpPopover-COiLoIGR.js";import"./MarkdownPopover-5mB1Kxab.js";import"./LightTooltip-DDJdQBDx.js";import"./MarkdownSynapse-BLr68Dpv.js";import"./SkeletonButton-BIeEptZL.js";import"./SkeletonInlineBlock-BRt0lIXt.js";import"./SkeletonTable-BpAtksSS.js";import"./SkeletonParagraph-C0oOWbiy.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
