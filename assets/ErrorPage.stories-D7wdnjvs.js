import{E as g,S as a}from"./ErrorPage-pN-iDLWa.js";import"./iframe-C6DVh3a8.js";import"./index-r8ZA1smB.js";import"./useDOI-B2AwIv_8.js";import"./waitForAsyncResult-D8eeb4MN.js";import"./useMessage-e6FMmVZQ.js";import"./useUserBundle-GB9vlSqF.js";import"./useSuspenseQuery-Chz7E6o7.js";import"./ConfirmationDialog-Bn1YHVno.js";import"./DialogBase-DG3FOts0.js";import"./Close-Cvfvekss.js";import"./HelpPopover-D15layXw.js";import"./MarkdownPopover-DYELty5d.js";import"./LightTooltip-CehMS9nA.js";import"./MarkdownSynapse-DbU2DxXy.js";import"./SkeletonButton-DJ25ODSP.js";import"./SkeletonInlineBlock-DaN9DO1b.js";import"./SkeletonTable-BaZC2los.js";import"./SkeletonParagraph-BiRrs5sP.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,w={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
