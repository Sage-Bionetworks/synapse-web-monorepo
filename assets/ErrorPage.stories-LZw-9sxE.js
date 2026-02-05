import{E as s,S as a}from"./ErrorPage-BZgIk9AP.js";import"./iframe-CmoSAPSB.js";import"./index-Chi_LkuB.js";import"./useDOI-Dms4VGMJ.js";import"./waitForAsyncResult-CM2dynh9.js";import"./useMessage-D61tfzVX.js";import"./useUserBundle-CwnnfMaT.js";import"./useSuspenseQuery-BKY6Qa88.js";import"./ConfirmationDialog-DzbbPL6e.js";import"./DialogBase-Bqr0n33q.js";import"./Close-yUN2-UGG.js";import"./HelpPopover-Cvjj8rL7.js";import"./MarkdownPopover-B6HZYL0b.js";import"./LightTooltip-8uaDTCAj.js";import"./MarkdownSynapse-vijXPkmg.js";import"./SkeletonButton-BiCcSD_e.js";import"./SkeletonInlineBlock-Cx8PzyyP.js";import"./SkeletonTable-BfBRnH8d.js";import"./SkeletonParagraph-JgANzJ5n.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
