import{E as g,S as o}from"./ErrorPage-CyoXhYHx.js";import"./iframe-ClyxPfmc.js";import"./index-r8ZA1smB.js";import"./useDOI-CjWiY2wB.js";import"./waitForAsyncResult-D8UcEUmj.js";import"./useMessage-B2foxNtM.js";import"./ConfirmationDialog-BsTE_PBt.js";import"./DialogBase-Bta8Ocnf.js";import"./Close-D1ca1SeS.js";import"./HelpPopover-CX_ddDkl.js";import"./MarkdownPopover-dvWKxOZ7.js";import"./LightTooltip-x_r9dSqG.js";import"./MarkdownSynapse-DQFUbqu6.js";import"./SkeletonButton-JqUeiWK5.js";import"./SkeletonInlineBlock-CyrAtLJW.js";import"./SkeletonTable-ClI70_Q3.js";import"./SkeletonParagraph-BsIbpmnA.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
