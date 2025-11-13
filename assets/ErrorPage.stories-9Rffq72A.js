import{E as g,S as o}from"./ErrorPage-BqwpJSsB.js";import"./iframe-CT7eET3u.js";import"./index-r8ZA1smB.js";import"./useDOI-BrphZorI.js";import"./waitForAsyncResult-CkyBgyqm.js";import"./useMessage-DjbojPBc.js";import"./ConfirmationDialog-DUrsRsl-.js";import"./DialogBase-D8t4wmJE.js";import"./Close-Cz5MAPpl.js";import"./HelpPopover-CruENG9c.js";import"./MarkdownPopover-CpIL_lOT.js";import"./LightTooltip-BTs5YWNB.js";import"./MarkdownSynapse-ChtEi03w.js";import"./SkeletonButton-6cvgvJnT.js";import"./SkeletonInlineBlock-C4Hah5J1.js";import"./SkeletonTable-C5avUwyT.js";import"./SkeletonParagraph-CvhM2TYd.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
