import{E as g,S as a}from"./ErrorPage-1FHu88TT.js";import"./iframe-k0ljdA_F.js";import"./index-r8ZA1smB.js";import"./useDOI-DZH-MzgD.js";import"./waitForAsyncResult-zK_h8XQ3.js";import"./useMessage-B37aLfwz.js";import"./useUserBundle-BcDALtg_.js";import"./useSuspenseQuery-Cfzbe5_g.js";import"./ConfirmationDialog-C7naKC_4.js";import"./DialogBase-c3ATuGjo.js";import"./Close-B2VeJ_9n.js";import"./HelpPopover-CNpAlynd.js";import"./MarkdownPopover-DByvkR9q.js";import"./LightTooltip-DSQf6_14.js";import"./MarkdownSynapse-Bd3GMcDJ.js";import"./SkeletonButton-DocMgp-F.js";import"./SkeletonInlineBlock-D4J3mBmr.js";import"./SkeletonTable-C0DTQRTT.js";import"./SkeletonParagraph-BXN5laEg.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,w={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
