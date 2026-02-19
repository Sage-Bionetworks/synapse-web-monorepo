import{E as s,S as a}from"./ErrorPage-B-yMV87u.js";import"./iframe-C_dryyJN.js";import"./index-Chi_LkuB.js";import"./useDOI-BEhhOWe1.js";import"./waitForAsyncResult-jqZHoy6a.js";import"./useMessage-CMb8DcA4.js";import"./useUserBundle-QtzgNDHJ.js";import"./useSuspenseQuery-DbrtCnso.js";import"./ConfirmationDialog-DwI3ORsC.js";import"./DialogBase-DK1f3XXS.js";import"./Close-qhBbRzO3.js";import"./HelpPopover-Bv7T8EMS.js";import"./MarkdownPopover-t0Q781ku.js";import"./LightTooltip-kABvS4Wq.js";import"./MarkdownSynapse-63MOCJzX.js";import"./SkeletonButton-DhVxQIGw.js";import"./SkeletonInlineBlock-DprLb70P.js";import"./SkeletonTable-DtAMx_Lr.js";import"./SkeletonParagraph-Me_ye6-N.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
