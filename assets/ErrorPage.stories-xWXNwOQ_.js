import{E as g,S as o}from"./ErrorPage-B7Hvh492.js";import"./iframe-LzC64RFw.js";import"./index-r8ZA1smB.js";import"./useDOI-BTfC4iNb.js";import"./waitForAsyncResult-ChGWX3Xx.js";import"./useMessage-DwQ9pIIZ.js";import"./ConfirmationDialog-ZErKbafN.js";import"./DialogBase-BYFV454X.js";import"./Close-EwtwOLBz.js";import"./HelpPopover-JXqbI5Ev.js";import"./MarkdownPopover-Dcw3ZCXp.js";import"./LightTooltip-CwaRO3d3.js";import"./MarkdownSynapse-D64LBLwy.js";import"./SkeletonButton-CdCi0Vv2.js";import"./SkeletonInlineBlock-BId9Rt5h.js";import"./SkeletonTable-B5BlJQjs.js";import"./SkeletonParagraph-ClnTvL1Q.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
