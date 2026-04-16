import{S as o,E as s}from"./ErrorPage-PQoicYlJ.js";import"./iframe-CDo31VQT.js";import"./index-Chi_LkuB.js";import"./useDOI-MD8n8qpU.js";import"./waitForAsyncResult-ChZvZUb3.js";import"./useMessage-D7achrdL.js";import"./useUserBundle-BO5FAfwo.js";import"./ConfirmationDialog-C5P_AirD.js";import"./DialogBase-E8WFtgAh.js";import"./Close-CuElEuLY.js";import"./HelpPopover-C32osPto.js";import"./MarkdownPopover-CvGVbAgl.js";import"./LightTooltip-xFNFrir-.js";import"./MarkdownSynapse-BY4P5oyv.js";import"./SkeletonButton-5CdV1WvK.js";import"./SkeletonInlineBlock-DWU8rLPE.js";import"./SkeletonTable-DUiAsn0J.js";import"./SkeletonParagraph-KDbQ1Dqi.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
