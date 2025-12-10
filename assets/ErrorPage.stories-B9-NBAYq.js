import{E as g,S as a}from"./ErrorPage-YmC0NZxK.js";import"./iframe-DDhTpaiN.js";import"./index-r8ZA1smB.js";import"./useDOI-D39_Vt7j.js";import"./waitForAsyncResult-B4mLAwh7.js";import"./useMessage-CTrpegHa.js";import"./useUserBundle-JI9M20M0.js";import"./useSuspenseQuery-B6kRqu6j.js";import"./ConfirmationDialog-5860BvFb.js";import"./DialogBase-Ds-EIWQV.js";import"./Close-yIz_Rnht.js";import"./HelpPopover-DFH7dgbi.js";import"./MarkdownPopover-BfZR9eJo.js";import"./LightTooltip-B0ycAwvg.js";import"./MarkdownSynapse-F_8I-qdj.js";import"./SkeletonButton-B-QMOvKw.js";import"./SkeletonInlineBlock-CdyxEaU6.js";import"./SkeletonTable-ChlY7W2j.js";import"./SkeletonParagraph-Cj3UMufw.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,w={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
