import{E as g,S as a}from"./ErrorPage-C2tb2MVp.js";import"./iframe-Djv8MYNB.js";import"./index-r8ZA1smB.js";import"./useDOI-DhOe1JOO.js";import"./waitForAsyncResult-2GUI2rev.js";import"./useMessage-w7BPlUUN.js";import"./useUserBundle-tM9bsliG.js";import"./useSuspenseQuery-Bke-3bkA.js";import"./ConfirmationDialog-Cxl5Efnn.js";import"./DialogBase-Bt09srou.js";import"./Close-Df0WyQYw.js";import"./HelpPopover-DVpvTiRQ.js";import"./MarkdownPopover-p5QWJMaq.js";import"./LightTooltip-CPJ4gklA.js";import"./MarkdownSynapse-D11UdXjT.js";import"./SkeletonButton-D377GQsO.js";import"./SkeletonInlineBlock-Bo6_99BY.js";import"./SkeletonTable-5bHQrafN.js";import"./SkeletonParagraph-CvIzEYe-.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,w={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
