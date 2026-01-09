import{E as g,S as a}from"./ErrorPage-D2wMSYaB.js";import"./iframe-CJCPT_yY.js";import"./index-r8ZA1smB.js";import"./useDOI-D5o0wmXq.js";import"./waitForAsyncResult-xjvy8IV2.js";import"./useMessage-S788rbmf.js";import"./useUserBundle-DV8uACsM.js";import"./useSuspenseQuery-CA-nz-xS.js";import"./ConfirmationDialog-BD2HXlgs.js";import"./DialogBase-DD_PbrBf.js";import"./Close-BRTzwidq.js";import"./HelpPopover-C4PJJkqz.js";import"./MarkdownPopover-D-gx4RgI.js";import"./LightTooltip-BJLQph6o.js";import"./MarkdownSynapse-CTWmq3WF.js";import"./SkeletonButton-B0ZXgmWW.js";import"./SkeletonInlineBlock-DKm9jtot.js";import"./SkeletonTable-DEcRya5M.js";import"./SkeletonParagraph-CRVUa_L6.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,w={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
