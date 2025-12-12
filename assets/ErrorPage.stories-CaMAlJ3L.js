import{E as g,S as a}from"./ErrorPage-DSX24dSy.js";import"./iframe-6fxFvYFG.js";import"./index-r8ZA1smB.js";import"./useDOI-CHsXkUGp.js";import"./waitForAsyncResult-nytYSMvi.js";import"./useMessage-DiKftNUO.js";import"./useUserBundle-Cw5DWU5h.js";import"./useSuspenseQuery-ilZIAiZO.js";import"./ConfirmationDialog-D7CL9Hbl.js";import"./DialogBase-CDVzPJD1.js";import"./Close--BbnJHAr.js";import"./HelpPopover-CS2yi4Iw.js";import"./MarkdownPopover-BT53YGTG.js";import"./LightTooltip-B_bCqVrh.js";import"./MarkdownSynapse-BiQ8eplM.js";import"./SkeletonButton-CwN3sKyQ.js";import"./SkeletonInlineBlock-DeCoWgUQ.js";import"./SkeletonTable-B0KdXxpl.js";import"./SkeletonParagraph-P8Ugt_HA.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,w={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
