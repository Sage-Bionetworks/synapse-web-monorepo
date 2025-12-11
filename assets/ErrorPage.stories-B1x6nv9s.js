import{E as g,S as a}from"./ErrorPage-BshVR-LA.js";import"./iframe-DGqgB8og.js";import"./index-r8ZA1smB.js";import"./useDOI-CMwyZXIL.js";import"./waitForAsyncResult-VArvAqyx.js";import"./useMessage-B3iT8_1W.js";import"./useUserBundle-DaZ17bF_.js";import"./useSuspenseQuery-DgAqulHC.js";import"./ConfirmationDialog-DuodJ_BP.js";import"./DialogBase-BdfEWFiQ.js";import"./Close-1BktUZ1s.js";import"./HelpPopover-D7QaDdbI.js";import"./MarkdownPopover-Baf-6UEB.js";import"./LightTooltip-CD7bmaAv.js";import"./MarkdownSynapse-DybE5CEs.js";import"./SkeletonButton-VHDypD6K.js";import"./SkeletonInlineBlock-CDJCDGy_.js";import"./SkeletonTable-B050jOXg.js";import"./SkeletonParagraph-_skZGHOU.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,w={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
