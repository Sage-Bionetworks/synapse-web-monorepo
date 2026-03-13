import{E as s,S as o}from"./ErrorPage-DA7Mo7kx.js";import"./iframe-DYqeQvAZ.js";import"./index-Chi_LkuB.js";import"./useDOI-Cardlcfo.js";import"./waitForAsyncResult-B2cUk_eW.js";import"./useMessage-B3BTGIX5.js";import"./useUserBundle-DULvj39Z.js";import"./ConfirmationDialog-F90KYiVg.js";import"./DialogBase-D6ru6QGV.js";import"./Close-Dsj7f386.js";import"./HelpPopover-CyEsnN__.js";import"./MarkdownPopover-Z2HTRS7p.js";import"./LightTooltip-GZti0qG7.js";import"./MarkdownSynapse-C2R_2nbo.js";import"./SkeletonButton-bpCoMqPJ.js";import"./SkeletonInlineBlock-CAM6iPYb.js";import"./SkeletonTable-tbDH2wnj.js";import"./SkeletonParagraph-CY2Bzkjl.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
