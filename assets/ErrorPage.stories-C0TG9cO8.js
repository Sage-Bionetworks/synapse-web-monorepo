import{E as g,S as a}from"./ErrorPage-ZtOmK2z2.js";import"./iframe-CQ5-qSaZ.js";import"./index-r8ZA1smB.js";import"./useDOI-Dc2OcEfM.js";import"./waitForAsyncResult-DVZH-kJh.js";import"./useMessage-qg5PSqLw.js";import"./useUserBundle-DvCkv3lX.js";import"./useSuspenseQuery-Be5C3Dgn.js";import"./ConfirmationDialog-BEtNAcjp.js";import"./DialogBase-CfmFQsU6.js";import"./Close-C9wv_I6B.js";import"./HelpPopover-B2AzDKTB.js";import"./MarkdownPopover-CO3_N7sV.js";import"./LightTooltip-68JRYdNY.js";import"./MarkdownSynapse-BZ3RNnEb.js";import"./SkeletonButton-c9WGL7V6.js";import"./SkeletonInlineBlock-DeFYqaGd.js";import"./SkeletonTable-BtsmZ8DU.js";import"./SkeletonParagraph-BA_ojVwN.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,w={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
