import{E as g,S as o}from"./ErrorPage-BCi6CWtz.js";import"./iframe-B9o6ulgU.js";import"./index-r8ZA1smB.js";import"./useDOI-CO-Lyv_S.js";import"./waitForAsyncResult-B-gUJVep.js";import"./useMessage-CFp3o9UP.js";import"./ConfirmationDialog-0cY4R4NJ.js";import"./DialogBase-DvQ37JZ_.js";import"./Close-Cr1Q2hlA.js";import"./HelpPopover-B3caARoU.js";import"./MarkdownPopover-C5YeO7AB.js";import"./LightTooltip-nJQSerho.js";import"./MarkdownSynapse-DSGkOyxP.js";import"./SkeletonButton-BXySJEex.js";import"./SkeletonInlineBlock-BVBMyQK3.js";import"./SkeletonTable-CEQwMQho.js";import"./SkeletonParagraph-BgTZ32N4.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
