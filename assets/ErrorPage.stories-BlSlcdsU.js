import{E as s,S as o}from"./ErrorPage-BRcO60z1.js";import"./iframe-PaLoqTAY.js";import"./index-Chi_LkuB.js";import"./useDOI-Ca6vDun0.js";import"./waitForAsyncResult-Bz6GUPwX.js";import"./useMessage-C-muA4OE.js";import"./useUserBundle-8xaYISQq.js";import"./ConfirmationDialog-CYp0eVVg.js";import"./DialogBase-CdOZpOpZ.js";import"./Close-cm6rg5AJ.js";import"./HelpPopover-CsjQ6N0g.js";import"./MarkdownPopover-nKSUx3jQ.js";import"./LightTooltip-_tTaVink.js";import"./MarkdownSynapse-Ba6V8zsg.js";import"./SkeletonButton-BnWhyhDQ.js";import"./SkeletonInlineBlock-Cw72BSZP.js";import"./SkeletonTable-zz4k46jG.js";import"./SkeletonParagraph-BUTvJRRd.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
