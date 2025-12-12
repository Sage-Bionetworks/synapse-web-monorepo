import{E as g,S as a}from"./ErrorPage-D0jFgs4e.js";import"./iframe-nfXQhXwW.js";import"./index-r8ZA1smB.js";import"./useDOI-DjjeMK7S.js";import"./waitForAsyncResult-DrAlN0oY.js";import"./useMessage-CZg-s2lr.js";import"./useUserBundle-Dx3pUDh4.js";import"./useSuspenseQuery-wrHvDIJ0.js";import"./ConfirmationDialog-DBW_uYDn.js";import"./DialogBase-CcO5y5yt.js";import"./Close-BzkPRb9A.js";import"./HelpPopover-Cb2i7a5w.js";import"./MarkdownPopover-Cs0zikEV.js";import"./LightTooltip-cNRM4CWP.js";import"./MarkdownSynapse-OcvSiBwW.js";import"./SkeletonButton-Bk4CQ1lc.js";import"./SkeletonInlineBlock--rWrAuqR.js";import"./SkeletonTable-I__c7Ied.js";import"./SkeletonParagraph-DtAQS4WM.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,w={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
