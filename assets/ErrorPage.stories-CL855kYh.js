import{E as s,S as o}from"./ErrorPage-BnMpObLC.js";import"./iframe-B6BHQgsg.js";import"./index-Chi_LkuB.js";import"./useDOI-CGpteJow.js";import"./waitForAsyncResult-CyYO-NOy.js";import"./useMessage-CLUAtJ2p.js";import"./useUserBundle-Bsv4QG78.js";import"./ConfirmationDialog-Bb8wqThd.js";import"./DialogBase-C3nXM1hL.js";import"./Close-DhlrG9rp.js";import"./HelpPopover-Duf7eahg.js";import"./MarkdownPopover-DB1525ks.js";import"./LightTooltip-npEhufm2.js";import"./MarkdownSynapse-CYzlYABb.js";import"./SkeletonButton-DHh5ZoUY.js";import"./SkeletonInlineBlock-C-VRD2YJ.js";import"./SkeletonTable-DrzWDZqG.js";import"./SkeletonParagraph-KorLLKG4.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
