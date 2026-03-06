import{E as s,S as o}from"./ErrorPage-Cv6VOmmh.js";import"./iframe-Ak5JkJtY.js";import"./index-Chi_LkuB.js";import"./useDOI-BsrexMpL.js";import"./waitForAsyncResult-BUEeelL7.js";import"./useMessage-CKqt6H-2.js";import"./useUserBundle-BoMKGodO.js";import"./ConfirmationDialog-zlNiA4Jk.js";import"./DialogBase-C44QfcA-.js";import"./Close-B2gux84L.js";import"./HelpPopover-9bzvOPZ1.js";import"./MarkdownPopover-5KNMW25X.js";import"./LightTooltip-Dx85UV-A.js";import"./MarkdownSynapse-n-SLVIb1.js";import"./SkeletonButton-J64P-p4R.js";import"./SkeletonInlineBlock-DSfvHYOc.js";import"./SkeletonTable-DmhZtLI7.js";import"./SkeletonParagraph-eBTTxCdT.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
