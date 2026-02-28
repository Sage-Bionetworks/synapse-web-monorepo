import{E as s,S as o}from"./ErrorPage-DbnBPIHT.js";import"./iframe-HaQTQwuz.js";import"./index-Chi_LkuB.js";import"./useDOI-C5FdhtDr.js";import"./waitForAsyncResult-C72jzGu0.js";import"./useMessage-CzUui332.js";import"./useUserBundle-BnHzx4-z.js";import"./ConfirmationDialog-CtUPDTih.js";import"./DialogBase-BGWg1_MF.js";import"./Close-CLcgasCJ.js";import"./HelpPopover-BdYbfqqB.js";import"./MarkdownPopover-BuTTNvu2.js";import"./LightTooltip-CXV6Zg8J.js";import"./MarkdownSynapse-_sUPNSUy.js";import"./SkeletonButton-C1NUZf-j.js";import"./SkeletonInlineBlock-CG5Fd-uS.js";import"./SkeletonTable-D-YEDgDk.js";import"./SkeletonParagraph-BNWGzJpn.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
