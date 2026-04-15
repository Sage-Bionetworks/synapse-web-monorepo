import{S as o,E as s}from"./ErrorPage-DNVBwXqH.js";import"./iframe-C9UTN7n5.js";import"./index-Chi_LkuB.js";import"./useDOI-BuNJghPX.js";import"./waitForAsyncResult-kNj1Jthf.js";import"./useMessage-BdUymztL.js";import"./useUserBundle-B2NBOQIN.js";import"./ConfirmationDialog-DQr-jfg-.js";import"./DialogBase-Mn6aWoit.js";import"./Close-CvxtVEvK.js";import"./HelpPopover-DluswABb.js";import"./MarkdownPopover-C9AtG64Z.js";import"./LightTooltip-DamcjSi2.js";import"./MarkdownSynapse-CW6ImeEG.js";import"./SkeletonButton-DrgaJ-bm.js";import"./SkeletonInlineBlock-D-Jy1SSP.js";import"./SkeletonTable-BS4xHemf.js";import"./SkeletonParagraph-C7pb8176.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
