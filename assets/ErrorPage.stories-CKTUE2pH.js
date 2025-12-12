import{E as g,S as a}from"./ErrorPage-BQJAojfj.js";import"./iframe-BrkRRQUD.js";import"./index-r8ZA1smB.js";import"./useDOI-BJCgIvM7.js";import"./waitForAsyncResult-DdDYec_G.js";import"./useMessage-DeNc5KYj.js";import"./useUserBundle-DImWu9jA.js";import"./useSuspenseQuery-CGvWjD8G.js";import"./ConfirmationDialog-CJLIjSN2.js";import"./DialogBase-DTN68OED.js";import"./Close-BxUb_IKw.js";import"./HelpPopover-BuRKkfXv.js";import"./MarkdownPopover-BICsFwT1.js";import"./LightTooltip-Bc7QhLtP.js";import"./MarkdownSynapse-BiQEJz-t.js";import"./SkeletonButton-CFrxD1jj.js";import"./SkeletonInlineBlock-DcZvYGLi.js";import"./SkeletonTable-Drmu1Y3r.js";import"./SkeletonParagraph-TWiIzOXd.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,w={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
