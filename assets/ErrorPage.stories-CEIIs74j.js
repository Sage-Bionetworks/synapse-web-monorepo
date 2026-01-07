import{E as g,S as a}from"./ErrorPage-Vp3bgqdQ.js";import"./iframe-B9AXyISm.js";import"./index-r8ZA1smB.js";import"./useDOI-Jnv5Hjjk.js";import"./waitForAsyncResult-BBkRzh-x.js";import"./useMessage-yL8u4HCf.js";import"./useUserBundle-D_B9FjL8.js";import"./useSuspenseQuery-DfskErri.js";import"./ConfirmationDialog-BV4A4Qpg.js";import"./DialogBase-Bv_6iVkM.js";import"./Close-NnOmK_QN.js";import"./HelpPopover-BKGnMhYA.js";import"./MarkdownPopover-CQwXLXPz.js";import"./LightTooltip-C9EShGL9.js";import"./MarkdownSynapse-ACifc84y.js";import"./SkeletonButton-C-q75hZ2.js";import"./SkeletonInlineBlock-BZYL3GN_.js";import"./SkeletonTable-DJaYvBkh.js";import"./SkeletonParagraph-DZGMGLgg.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,w={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
