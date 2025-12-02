import{E as g,S as o}from"./ErrorPage-C8nRWWtL.js";import"./iframe-TYPaZ6LN.js";import"./index-r8ZA1smB.js";import"./useDOI-B83Ax5WL.js";import"./waitForAsyncResult-DQIt1aUV.js";import"./useMessage-DDW0737J.js";import"./ConfirmationDialog-DPmq4FUs.js";import"./DialogBase-2bW80153.js";import"./Close-5hmioipF.js";import"./HelpPopover-7_yWsHqt.js";import"./MarkdownPopover-DXfCvJzS.js";import"./LightTooltip-DMsvcwJu.js";import"./MarkdownSynapse-DUiCZcKp.js";import"./SkeletonButton-BeXgw9Nt.js";import"./SkeletonInlineBlock-BBtOGIqx.js";import"./SkeletonTable-CKGrlPmE.js";import"./SkeletonParagraph-CEVUjrsB.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
