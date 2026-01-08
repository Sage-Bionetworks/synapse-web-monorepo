import{E as g,S as a}from"./ErrorPage-B6oqRp2c.js";import"./iframe-k9YwU_Xc.js";import"./index-r8ZA1smB.js";import"./useDOI-CVm5ZH-Q.js";import"./waitForAsyncResult-CCFBiSaY.js";import"./useMessage-DLK0zvVh.js";import"./useUserBundle-Ciq97Tj-.js";import"./useSuspenseQuery-CiFSWrMs.js";import"./ConfirmationDialog-CAwv6LBe.js";import"./DialogBase-Gl_HIGD-.js";import"./Close-DFr4W5W5.js";import"./HelpPopover-dwgbsbh_.js";import"./MarkdownPopover-DALnZxkA.js";import"./LightTooltip-mwT1Csao.js";import"./MarkdownSynapse-Dx4lD55G.js";import"./SkeletonButton-BEjusTzn.js";import"./SkeletonInlineBlock-Cb_-AWMb.js";import"./SkeletonTable-aVeOh9ct.js";import"./SkeletonParagraph-Btg7J19e.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,w={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
