import{E as g,S as a}from"./ErrorPage-BQqQFE1J.js";import"./iframe-WhfIvkO3.js";import"./index-r8ZA1smB.js";import"./useDOI-B-6joe5L.js";import"./waitForAsyncResult-DSL3yNE-.js";import"./useMessage-CJUJ8vQI.js";import"./useUserBundle-CRHh6Xmh.js";import"./useSuspenseQuery-dzosinIB.js";import"./ConfirmationDialog-DiLnWHAQ.js";import"./DialogBase-Crh1Kg5E.js";import"./Close-CmSe9oF4.js";import"./HelpPopover-DFlbq1oD.js";import"./MarkdownPopover-CFtct9XU.js";import"./LightTooltip-BPRV-Vss.js";import"./MarkdownSynapse-DpQsv1qU.js";import"./SkeletonButton-qFC4BpI5.js";import"./SkeletonInlineBlock-BW6N_xDK.js";import"./SkeletonTable-Di0hBp4_.js";import"./SkeletonParagraph-D0-idZNQ.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,w={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
