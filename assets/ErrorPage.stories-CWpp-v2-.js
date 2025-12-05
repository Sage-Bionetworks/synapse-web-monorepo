import{E as g,S as a}from"./ErrorPage-lianQLlJ.js";import"./iframe-BXzeMfE2.js";import"./index-r8ZA1smB.js";import"./useDOI-Cugq3YwI.js";import"./waitForAsyncResult-CQ6GaEnZ.js";import"./useMessage-Cjlj2pY_.js";import"./useUserBundle-DAmTyml3.js";import"./useSuspenseQuery-BZJKG4pU.js";import"./ConfirmationDialog-ekforYsO.js";import"./DialogBase-CgYwiZZW.js";import"./Close-CseduvHP.js";import"./HelpPopover-BY61c_J9.js";import"./MarkdownPopover-BrEHcBMc.js";import"./LightTooltip-CZ9_OK_2.js";import"./MarkdownSynapse-jVf_Tger.js";import"./SkeletonButton-BdVaI5NA.js";import"./SkeletonInlineBlock-Bcviv4QT.js";import"./SkeletonTable-CXSlR--N.js";import"./SkeletonParagraph-Bd7FVxmI.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,w={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.DOWN,
    message: "We're busy updating Synapse for you and will be back soon."
  }
}`,...(p=(t=r.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};var n,m,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.ACCESS_DENIED,
    entityId: 'syn12345'
  }
}`,...(i=(m=e.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var c,y,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.NOT_FOUND
  }
}`,...(d=(y=o.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};const x=["Maintenance","NoAccess","Unavailable"];export{r as Maintenance,e as NoAccess,o as Unavailable,x as __namedExportsOrder,w as default};
