import{S as o,E as s}from"./ErrorPage-Bde29uu-.js";import"./iframe-BFtw_QUH.js";import"./index-Chi_LkuB.js";import"./useDOI-emgVOux1.js";import"./waitForAsyncResult-DDtGCSvY.js";import"./useMessage-SIqilTFl.js";import"./useUserBundle-CUqXhyvg.js";import"./ConfirmationDialog-DMF1vChz.js";import"./DialogBase-Cw5G9tCf.js";import"./Close-QS7unxGx.js";import"./HelpPopover-6Oy9kimx.js";import"./MarkdownPopover-DJba9PaX.js";import"./LightTooltip-BdZaegEb.js";import"./MarkdownSynapse-CJdYnncr.js";import"./SkeletonButton-CsTw-ZPX.js";import"./SkeletonInlineBlock-BmmJQ24u.js";import"./SkeletonTable-CwH7xhuw.js";import"./SkeletonParagraph-DsZs81_F.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
