import{S as o,E as s}from"./ErrorPage-CrL_8ati.js";import"./iframe-DjCs0N9T.js";import"./index-Chi_LkuB.js";import"./useDOI-C1tZUMK2.js";import"./waitForAsyncResult-DMCFQ6DJ.js";import"./useMessage-DmJLjXs7.js";import"./useUserBundle-Bj8x-K_h.js";import"./ConfirmationDialog-DtaMK8Wg.js";import"./DialogBase-G442yd3L.js";import"./Close-BtUXOgnJ.js";import"./HelpPopover-Cv3rcWtw.js";import"./MarkdownPopover-ERQh7wwa.js";import"./LightTooltip-Mucs5Dmz.js";import"./MarkdownSynapse-BphwuRUM.js";import"./SkeletonButton-ra5Cjzqp.js";import"./SkeletonInlineBlock-BcoZAk2Q.js";import"./SkeletonTable-C6E9liFP.js";import"./SkeletonParagraph-COuF-1cd.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
