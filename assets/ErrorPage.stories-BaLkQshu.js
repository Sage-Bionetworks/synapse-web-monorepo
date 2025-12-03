import{E as g,S as a}from"./ErrorPage-Bp0d0VPW.js";import"./iframe-oNn-8uxy.js";import"./index-r8ZA1smB.js";import"./useDOI-C8CGtF27.js";import"./waitForAsyncResult-BzJP5Xg-.js";import"./useMessage-CCOgLO6Y.js";import"./useUserBundle-BvaO0LNa.js";import"./useSuspenseQuery-yMS-8lGQ.js";import"./ConfirmationDialog-SzA8si7K.js";import"./DialogBase-B-cSqcPd.js";import"./Close-BSLNouGJ.js";import"./HelpPopover-CEM-d7vz.js";import"./MarkdownPopover-Cg7ChiRL.js";import"./LightTooltip-DLMoSUZw.js";import"./MarkdownSynapse-ChplHHtD.js";import"./SkeletonButton-D_D34Tmd.js";import"./SkeletonInlineBlock-B6YJwBFk.js";import"./SkeletonTable-iW-77ZUO.js";import"./SkeletonParagraph-DAXRxcWE.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,w={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
