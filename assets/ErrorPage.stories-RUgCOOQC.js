import{E as g,S as o}from"./ErrorPage-9q7bxhvi.js";import"./iframe-BMyGeve0.js";import"./index-r8ZA1smB.js";import"./useDOI-Iwp0ZOZ8.js";import"./waitForAsyncResult-CchhYAny.js";import"./useMessage-CjXjtBj0.js";import"./ConfirmationDialog-V6lMhXLs.js";import"./DialogBase-BjM9P9Rn.js";import"./Close-BXCO7x3F.js";import"./HelpPopover-C7G9YaEw.js";import"./MarkdownPopover-DuWNQuTs.js";import"./LightTooltip-CblZ2Lnk.js";import"./MarkdownSynapse-DLZKpOPg.js";import"./SkeletonButton-Bk8uTKNs.js";import"./SkeletonInlineBlock-C3rHjTF4.js";import"./SkeletonTable-DlFasnP9.js";import"./SkeletonParagraph-B_kTspc1.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
