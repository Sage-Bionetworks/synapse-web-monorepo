import{E as g,S as o}from"./ErrorPage-CUrwos_M.js";import"./iframe-CGmVaDjG.js";import"./index-r8ZA1smB.js";import"./useDOI-D1zpP0jO.js";import"./waitForAsyncResult-h6I1MqyA.js";import"./useMessage-CV1yZ6JM.js";import"./ConfirmationDialog-Be0gJysx.js";import"./DialogBase-B3tdGTOA.js";import"./Close-lxYenFCK.js";import"./HelpPopover-2nxZPXpX.js";import"./MarkdownPopover-aHrxZUZD.js";import"./LightTooltip-ClWSh7qk.js";import"./MarkdownSynapse-V28WkNFd.js";import"./SkeletonButton-B4_njZrh.js";import"./SkeletonInlineBlock-DlR8y1uS.js";import"./SkeletonTable-DNeEDdIn.js";import"./SkeletonParagraph-Dm_x6xws.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
