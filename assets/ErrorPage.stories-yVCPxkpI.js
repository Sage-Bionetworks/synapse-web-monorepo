import{E as g,S as o}from"./ErrorPage-D_oqBiyh.js";import"./iframe-DM9RvezN.js";import"./index-r8ZA1smB.js";import"./useDOI-BsR1s997.js";import"./waitForAsyncResult-MEJ8kGK3.js";import"./useMessage-DG3BBf-s.js";import"./ConfirmationDialog-Dl-jK7QM.js";import"./DialogBase-BAhxc9kZ.js";import"./Close-CuPbI5yA.js";import"./HelpPopover-C6nQ_3VR.js";import"./MarkdownPopover-DBancuF8.js";import"./LightTooltip-ywjxPoX5.js";import"./MarkdownSynapse-CE6jraB4.js";import"./SkeletonButton-GB1PBqFT.js";import"./SkeletonInlineBlock-74TZwrl_.js";import"./SkeletonTable-DWBPPyUA.js";import"./SkeletonParagraph-BhCOGAD2.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.DOWN,
    message: "We're busy updating Synapse for you and will be back soon."
  }
}`,...(p=(t=r.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};var n,m,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.ACCESS_DENIED,
    entityId: 'syn12345'
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var i,y,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.NOT_FOUND
  }
}`,...(d=(y=a.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};const v=["Maintenance","NoAccess","Unavailable"];export{r as Maintenance,e as NoAccess,a as Unavailable,v as __namedExportsOrder,k as default};
