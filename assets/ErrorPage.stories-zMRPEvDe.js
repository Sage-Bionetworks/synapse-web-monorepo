import{E as g,S as o}from"./ErrorPage-Sc0-ig_G.js";import"./iframe-CuCRNKD2.js";import"./index-r8ZA1smB.js";import"./useDOI-hz5iDBDm.js";import"./waitForAsyncResult-BBRrQwt-.js";import"./useMessage-CR610A3o.js";import"./ConfirmationDialog-Cv8GQS-W.js";import"./DialogBase-Dmv5O61d.js";import"./Close-XPSuPfSe.js";import"./HelpPopover-CUGXBuQO.js";import"./MarkdownPopover-BxdpaW68.js";import"./LightTooltip-CDxRktsS.js";import"./MarkdownSynapse-DNDn28ba.js";import"./SkeletonButton-CaULGpMN.js";import"./SkeletonInlineBlock-BnPEMPpf.js";import"./SkeletonTable-ChmVFJhE.js";import"./SkeletonParagraph-DKk5S29D.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.DOWN,
    message: "We're busy updating Synapse for you and will be back soon."
  }
}`,...(p=(t=r.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};var n,m,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.ACCESS_DENIED,
    entityId: 'syn12345'
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var i,y,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.NOT_FOUND
  }
}`,...(d=(y=a.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};const v=["Maintenance","NoAccess","Unavailable"];export{r as Maintenance,e as NoAccess,a as Unavailable,v as __namedExportsOrder,k as default};
