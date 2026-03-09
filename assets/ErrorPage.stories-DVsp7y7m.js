import{E as s,S as o}from"./ErrorPage-D2FMv3Ed.js";import"./iframe-B-ViuSv9.js";import"./index-Chi_LkuB.js";import"./useDOI-L9ebDEsr.js";import"./waitForAsyncResult-R_swx1MY.js";import"./useMessage-UkQaesoY.js";import"./useUserBundle-DKfqKYyl.js";import"./ConfirmationDialog-BroakZuT.js";import"./DialogBase-DVpW1cR3.js";import"./Close-CO4GXUb5.js";import"./HelpPopover-DWyQ-DmO.js";import"./MarkdownPopover-DHhlk6vi.js";import"./LightTooltip-Ddo6Mib6.js";import"./MarkdownSynapse-B_4xbq9B.js";import"./SkeletonButton-CG2PHgPV.js";import"./SkeletonInlineBlock-ZpxNiyl4.js";import"./SkeletonTable-DOWE-xYa.js";import"./SkeletonParagraph-XlJifnft.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
