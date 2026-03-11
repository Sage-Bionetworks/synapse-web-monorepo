import{E as s,S as o}from"./ErrorPage-CqAPm7qh.js";import"./iframe-9Dp3veeu.js";import"./index-Chi_LkuB.js";import"./useDOI-CtWy5uPc.js";import"./waitForAsyncResult-DY734K7L.js";import"./useMessage-DJm6dD1z.js";import"./useUserBundle-a5rfcdNm.js";import"./ConfirmationDialog-0O1Dp5pK.js";import"./DialogBase-wgKSPL2s.js";import"./Close-RKCQt29o.js";import"./HelpPopover-CV1i3nJO.js";import"./MarkdownPopover-DoQCnLPw.js";import"./LightTooltip-TjP4VxGs.js";import"./MarkdownSynapse-D2Pk-B6S.js";import"./SkeletonButton-COK1UYfn.js";import"./SkeletonInlineBlock-BcYTxiw0.js";import"./SkeletonTable-Cjl9F2Dt.js";import"./SkeletonParagraph-Cn0395FS.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,f={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
