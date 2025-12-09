import{E as g,S as a}from"./ErrorPage-BQU_kWY0.js";import"./iframe-mfaqAuKn.js";import"./index-r8ZA1smB.js";import"./useDOI-DDu597ab.js";import"./waitForAsyncResult-DY7fr6WO.js";import"./useMessage-Boh72GX4.js";import"./useUserBundle-DyICHo5Z.js";import"./useSuspenseQuery-Ck8XhOTY.js";import"./ConfirmationDialog-DK1C4L_H.js";import"./DialogBase-BA7H051B.js";import"./Close-YScbRJtZ.js";import"./HelpPopover-CYTH5UW2.js";import"./MarkdownPopover-B-BPuZn1.js";import"./LightTooltip-BuyZuxhp.js";import"./MarkdownSynapse-ChHwalJV.js";import"./SkeletonButton-Df6Re1Ke.js";import"./SkeletonInlineBlock-B--4faiZ.js";import"./SkeletonTable-CQAWTA0x.js";import"./SkeletonParagraph-BK2WyijI.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,w={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
