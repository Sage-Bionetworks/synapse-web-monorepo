import{E as g,S as o}from"./ErrorPage-DI_XtxFh.js";import"./iframe-C7HGvOUl.js";import"./index-r8ZA1smB.js";import"./useDOI-D31uSRtr.js";import"./waitForAsyncResult-BMyVwbI6.js";import"./useMessage-BjItM22F.js";import"./ConfirmationDialog-CpTyB7dm.js";import"./DialogBase-DKsAEabs.js";import"./Close-DMhKR_rY.js";import"./HelpPopover-CBVnmWOW.js";import"./MarkdownPopover-A1fr4z6g.js";import"./LightTooltip-CO-J6vOj.js";import"./MarkdownSynapse-JFfvupcN.js";import"./SkeletonButton-CkeZGoyu.js";import"./SkeletonInlineBlock-CsElFq45.js";import"./SkeletonTable-COY9zVYr.js";import"./SkeletonParagraph-CttTbUME.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
