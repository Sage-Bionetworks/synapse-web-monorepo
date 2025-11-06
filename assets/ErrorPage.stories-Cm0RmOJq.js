import{E as g,S as o}from"./ErrorPage-DzX1VBSe.js";import"./iframe-ynK1h1ZQ.js";import"./index-r8ZA1smB.js";import"./useDOI-CXO6oWiM.js";import"./waitForAsyncResult-D84rOecf.js";import"./useMessage-DK5hEimn.js";import"./ConfirmationDialog-_5j4EqxQ.js";import"./DialogBase-04kg5s93.js";import"./Close-BsDzgrCN.js";import"./HelpPopover-DR5Q4c37.js";import"./MarkdownPopover-Dyxx0IQ0.js";import"./LightTooltip-D_YZpsMa.js";import"./MarkdownSynapse-Cg823f1k.js";import"./SkeletonButton-Bwr03Ql7.js";import"./SkeletonInlineBlock-C3nmwKQa.js";import"./SkeletonTable-CyuXTNTX.js";import"./SkeletonParagraph-DikrQ7Cm.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,k={title:"Synapse/ErrorPage",args:{gotoPlace:S()},component:g},r={args:{type:o.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:o.ACCESS_DENIED,entityId:"syn12345"}},a={args:{type:o.NOT_FOUND}};var s,t,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
