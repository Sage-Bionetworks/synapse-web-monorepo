import{E as g,S as o}from"./ErrorPage-B_bCfGT8.js";import"./iframe-B9toAp7a.js";import"./index-r8ZA1smB.js";import"./useDOI-B8wV9pja.js";import"./waitForAsyncResult-1r5w9S7j.js";import"./useMessage-Dl8ZCrrl.js";import"./ConfirmationDialog-B5Wo4CTL.js";import"./DialogBase-DGl7drlj.js";import"./Close-eKJYJFPR.js";import"./HelpPopover-ChAtcQyP.js";import"./MarkdownPopover-nm59-MMf.js";import"./LightTooltip-CxCt9or1.js";import"./MarkdownSynapse-Dm9xpmpj.js";import"./SkeletonButton-D4dnbEqI.js";import"./SkeletonInlineBlock-DARsQc6u.js";import"./SkeletonTable-Ci-z4Kjh.js";import"./SkeletonParagraph-DDetyv-w.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
