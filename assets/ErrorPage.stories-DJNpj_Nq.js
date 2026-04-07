import{S as o,E as s}from"./ErrorPage-Ty8yKWwE.js";import"./iframe-CA42Mn9q.js";import"./index-Chi_LkuB.js";import"./useDOI-zK1rAWAq.js";import"./waitForAsyncResult-BsgjfDDc.js";import"./useMessage-BLG-3fMp.js";import"./useUserBundle-BhbwoHT_.js";import"./ConfirmationDialog-BSBfViGH.js";import"./DialogBase-DPa9xviX.js";import"./Close-BxAT1Y3p.js";import"./HelpPopover-_39XgxVX.js";import"./MarkdownPopover-Cw4pup3u.js";import"./LightTooltip-CkVaiv9P.js";import"./MarkdownSynapse-BtRsfIl6.js";import"./SkeletonButton-BBbLk1YB.js";import"./SkeletonInlineBlock-COfhdDsT.js";import"./SkeletonTable--UszwM1d.js";import"./SkeletonParagraph-CDHIPMz9.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
