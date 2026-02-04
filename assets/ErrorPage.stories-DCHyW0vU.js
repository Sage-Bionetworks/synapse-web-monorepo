import{E as s,S as a}from"./ErrorPage-DxhUgI2G.js";import"./iframe-C64n1GD8.js";import"./index-Chi_LkuB.js";import"./useDOI-BsU-1K1H.js";import"./waitForAsyncResult-BWPXdSyA.js";import"./useMessage-BIAE1zT9.js";import"./useUserBundle-D00teTqN.js";import"./useSuspenseQuery-DKR51829.js";import"./ConfirmationDialog-0v5aIB6P.js";import"./DialogBase-CvFrMWW4.js";import"./Close-jGAkMweY.js";import"./HelpPopover-DMcj4HzC.js";import"./MarkdownPopover-aVtIL7z6.js";import"./LightTooltip-DDkKmTHq.js";import"./MarkdownSynapse-CenQtkph.js";import"./SkeletonButton-BHX6f9gP.js";import"./SkeletonInlineBlock-CDYMy8y_.js";import"./SkeletonTable-QL6vSy9n.js";import"./SkeletonParagraph-Duc3bDvV.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
