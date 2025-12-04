import{E as g,S as a}from"./ErrorPage-C7ZST_OF.js";import"./iframe-CnFFtBM5.js";import"./index-r8ZA1smB.js";import"./useDOI-DfzlKSfq.js";import"./waitForAsyncResult-BUaxqKi-.js";import"./useMessage-DX2Vabjs.js";import"./useUserBundle-C5RZncTV.js";import"./useSuspenseQuery-D8hCSSQZ.js";import"./ConfirmationDialog-CmTg6HIg.js";import"./DialogBase-KF2hOckI.js";import"./Close-Dtzq_6wc.js";import"./HelpPopover-D_UunFPX.js";import"./MarkdownPopover-CzPIRMxY.js";import"./LightTooltip-Dl0q57ba.js";import"./MarkdownSynapse-CRdc62jY.js";import"./SkeletonButton-CClASP2Q.js";import"./SkeletonInlineBlock-SiFBwNDW.js";import"./SkeletonTable-CeXSUdJ0.js";import"./SkeletonParagraph-Bh_V5SGk.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,w={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
