import{E as g,S as o}from"./ErrorPage-Bjb6gFm_.js";import"./iframe-xpHBgFEc.js";import"./index-r8ZA1smB.js";import"./useDOI-CdS_Zava.js";import"./waitForAsyncResult-NX_oQucL.js";import"./useMessage-DGc-QrUR.js";import"./ConfirmationDialog-CwyDjVHU.js";import"./DialogBase-pgJ5o4Zt.js";import"./Close-5t4oWx4m.js";import"./HelpPopover-DCjpPdCE.js";import"./MarkdownPopover-dZJj-Vn5.js";import"./LightTooltip-BDDa2W0x.js";import"./MarkdownSynapse-BeCorgwC.js";import"./SkeletonButton-CHbgpEXP.js";import"./SkeletonInlineBlock-C-Vahxr2.js";import"./SkeletonTable-DHFbt_t8.js";import"./SkeletonParagraph-DAmn3J9_.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
