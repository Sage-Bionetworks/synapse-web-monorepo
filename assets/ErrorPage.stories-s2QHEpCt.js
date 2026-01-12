import{E as s,S as a}from"./ErrorPage-Dwu81hoe.js";import"./iframe-CaOcC-hf.js";import"./index-Chi_LkuB.js";import"./useDOI-BHs9QV1e.js";import"./waitForAsyncResult-DPibSOoJ.js";import"./useMessage-CJ_lvoSm.js";import"./useUserBundle-Dyiy-2qt.js";import"./useSuspenseQuery-D6gXheFj.js";import"./ConfirmationDialog-D38gahaL.js";import"./DialogBase-Dn94ypHd.js";import"./Close-7gN2buzZ.js";import"./HelpPopover-DtGoLtv4.js";import"./MarkdownPopover-pxj3Gfsw.js";import"./LightTooltip-DLMcdQ8O.js";import"./MarkdownSynapse-Bu_iQFQg.js";import"./SkeletonButton-C1Ne2e4S.js";import"./SkeletonInlineBlock-CXC8p12o.js";import"./SkeletonTable-BGTjeLmw.js";import"./SkeletonParagraph-DlGa_aoP.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,U={title:"Synapse/ErrorPage",args:{gotoPlace:t()},component:s},r={args:{type:a.DOWN,message:"We're busy updating Synapse for you and will be back soon."}},e={args:{type:a.ACCESS_DENIED,entityId:"syn12345"}},o={args:{type:a.NOT_FOUND}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.DOWN,
    message: "We're busy updating Synapse for you and will be back soon."
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.ACCESS_DENIED,
    entityId: 'syn12345'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: SynapseErrorType.NOT_FOUND
  }
}`,...o.parameters?.docs?.source}}};const A=["Maintenance","NoAccess","Unavailable"];export{r as Maintenance,e as NoAccess,o as Unavailable,A as __namedExportsOrder,U as default};
