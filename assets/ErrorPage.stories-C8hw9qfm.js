import{E as s,S as o}from"./ErrorPage-DHcsRnY9.js";import"./iframe-BfDC4V0n.js";import"./index-Chi_LkuB.js";import"./useDOI-CGZoduRq.js";import"./waitForAsyncResult-2K2Nze7q.js";import"./useMessage-Bya36vuk.js";import"./useUserBundle-CgRRg9_x.js";import"./ConfirmationDialog-Btpz93A2.js";import"./DialogBase-yHroOJ8_.js";import"./Close-CgiQG4j8.js";import"./HelpPopover-Dg3wd6VC.js";import"./MarkdownPopover-Cd4Su9xF.js";import"./LightTooltip-B1uK46ji.js";import"./MarkdownSynapse-Doq5YFEA.js";import"./SkeletonButton-kWC2bpgD.js";import"./SkeletonInlineBlock-Dr1CyrsC.js";import"./SkeletonTable-PdwLXVTh.js";import"./SkeletonParagraph-DUo_BCXn.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
