import{E as g,S as o}from"./ErrorPage-C1I-rOp0.js";import"./iframe-C0_MGelw.js";import"./index-r8ZA1smB.js";import"./useDOI-CJ0IENFj.js";import"./waitForAsyncResult-BIGip6-V.js";import"./useMessage-KFO4F23Z.js";import"./ConfirmationDialog-BcmQv4r_.js";import"./DialogBase-DRZu8qiJ.js";import"./Close-Br2x6lcO.js";import"./HelpPopover-CgR11bAO.js";import"./MarkdownPopover-Bfocou5T.js";import"./LightTooltip-I4_xvDt3.js";import"./MarkdownSynapse-BNFairzk.js";import"./SkeletonButton-DjhR7sxh.js";import"./SkeletonInlineBlock-yTERZu3L.js";import"./SkeletonTable-DS1wvkaV.js";import"./SkeletonParagraph-BpdEaVGd.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
