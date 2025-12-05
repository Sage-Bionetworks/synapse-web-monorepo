import{E as g,S as a}from"./ErrorPage-drGcOHi6.js";import"./iframe-Dh27wMqB.js";import"./index-r8ZA1smB.js";import"./useDOI-Brrhc8b7.js";import"./waitForAsyncResult-B3qxMof1.js";import"./useMessage-BUDVL9Qi.js";import"./useUserBundle-CjBP39Vs.js";import"./useSuspenseQuery-B1cUOedV.js";import"./ConfirmationDialog-DxjWAx0P.js";import"./DialogBase-CaFiVTkO.js";import"./Close-BffXL7L9.js";import"./HelpPopover-BHvKVQ3A.js";import"./MarkdownPopover-DnKNyBIA.js";import"./LightTooltip-y4XaVzOV.js";import"./MarkdownSynapse-BfugqKsd.js";import"./SkeletonButton-zWY26s6L.js";import"./SkeletonInlineBlock-CUxQyvLz.js";import"./SkeletonTable-QTbu1S9P.js";import"./SkeletonParagraph-BECb2Xut.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,w={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
