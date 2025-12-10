import{E as g,S as a}from"./ErrorPage-Crje9XnO.js";import"./iframe-CXX3j3k4.js";import"./index-r8ZA1smB.js";import"./useDOI-sFr3fXey.js";import"./waitForAsyncResult-B1JIi6uM.js";import"./useMessage-C8vO6Uxp.js";import"./useUserBundle-DyX5qaSO.js";import"./useSuspenseQuery-BN00Uhyj.js";import"./ConfirmationDialog-BBYfC9oT.js";import"./DialogBase-DiPVYK5d.js";import"./Close-CqT8m-h4.js";import"./HelpPopover-DYzM-K-s.js";import"./MarkdownPopover-Bt9mzS5O.js";import"./LightTooltip-BljA5YjT.js";import"./MarkdownSynapse-CcsPZuDG.js";import"./SkeletonButton-CM_ISHRH.js";import"./SkeletonInlineBlock-B8S3Nzba.js";import"./SkeletonTable-Dy_jc2vl.js";import"./SkeletonParagraph-D9HvcMZH.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,w={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
