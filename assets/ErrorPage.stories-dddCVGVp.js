import{E as g,S as a}from"./ErrorPage-LZPgC0As.js";import"./iframe-APCqMGQN.js";import"./index-r8ZA1smB.js";import"./useDOI-DBYDMkHL.js";import"./waitForAsyncResult-DytUQiAl.js";import"./useMessage-BkNOsziF.js";import"./useUserBundle-Cy20sB8T.js";import"./useSuspenseQuery-BHob01YS.js";import"./ConfirmationDialog-DX-eJ8BJ.js";import"./DialogBase-CPOjmtcd.js";import"./Close-Dfqur9mW.js";import"./HelpPopover-CSvALpOm.js";import"./MarkdownPopover-B00IKW0p.js";import"./LightTooltip-PuK_Y7Ky.js";import"./MarkdownSynapse-3Z4rZ9Dt.js";import"./SkeletonButton-BmM8-g6B.js";import"./SkeletonInlineBlock-CeF_-ICV.js";import"./SkeletonTable-DvijJWyz.js";import"./SkeletonParagraph-D-_OgKUm.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,w={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
