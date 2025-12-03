import{E as g,S as a}from"./ErrorPage-DUbgcpUl.js";import"./iframe-C0ErQzQQ.js";import"./index-r8ZA1smB.js";import"./useDOI-CQJVgToG.js";import"./waitForAsyncResult-BiaH-_cg.js";import"./useMessage-CsAliUoQ.js";import"./useUserBundle-Cvm8I5oN.js";import"./useSuspenseQuery-B5vEEZkD.js";import"./ConfirmationDialog-BsTDsadA.js";import"./DialogBase-BqMUco36.js";import"./Close-CTHKIKbo.js";import"./HelpPopover-D3wJnDj8.js";import"./MarkdownPopover-DEfGytzJ.js";import"./LightTooltip-D15VDo9s.js";import"./MarkdownSynapse-BgQ-o5LF.js";import"./SkeletonButton-CiuQHyYv.js";import"./SkeletonInlineBlock-BE6gLgZl.js";import"./SkeletonTable-BS5GIgke.js";import"./SkeletonParagraph-DNevJqyo.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,w={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
