import{E as g,S as a}from"./ErrorPage-q9dRB-Vx.js";import"./iframe-BPjtn3Py.js";import"./index-r8ZA1smB.js";import"./useDOI-DnArRDe6.js";import"./waitForAsyncResult-DUHhTpow.js";import"./useMessage-DG_pJaTO.js";import"./useUserBundle-w7U_abFB.js";import"./useSuspenseQuery-CJees8i4.js";import"./ConfirmationDialog-zddbqXSX.js";import"./DialogBase-CwUJKQgZ.js";import"./Close-D3DgklsR.js";import"./HelpPopover-DC_dXnpY.js";import"./MarkdownPopover-BqDmByvq.js";import"./LightTooltip-CRT29ubt.js";import"./MarkdownSynapse-C8_fbXMJ.js";import"./SkeletonButton-D4b9c6Gf.js";import"./SkeletonInlineBlock-DU00_odl.js";import"./SkeletonTable-Dybo1wxv.js";import"./SkeletonParagraph-D1AtTIOG.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,w={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
