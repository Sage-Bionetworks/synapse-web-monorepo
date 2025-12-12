import{j as r,iF as x,iG as A,iH as S,V as _}from"./iframe-Bv3225dD.js";import{A as O}from"./AvailableEvaluationQueueList-cX9MzZRV.js";import"./index-r8ZA1smB.js";import"./LightTooltip-fCebiKMM.js";import"./MarkdownSynapse-Cfnzx3pH.js";import"./SkeletonButton-DJp9easj.js";import"./SkeletonInlineBlock-Bq5p5oKd.js";import"./SkeletonTable-DN4iiShU.js";import"./SkeletonParagraph-CLTPxESa.js";import"./Autocomplete-DapENeZ9.js";import"./usePreviousProps-BcAwrMJ-.js";import"./Chip-B2GRsUoa.js";import"./MenuItem-BwJ2Gdnn.js";import"./ListItem-WLaZXmmW.js";import"./listItemButtonClasses-D4nxibAL.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,F={title:"Synapse/Challenge/AvailableEvaluationQueueList",component:O,decorators:[b=>r.jsx(_,{sx:{maxWidth:"600px"},children:r.jsx(b,{})})],args:{onChangeSelectedEvaluation:h()}},a={args:{evaluations:[]}},k="*markdown* given to the **component**",e={args:{evaluations:[{...x,submissionInstructionsMessage:k}]}},s={args:{evaluations:A}},o={args:{evaluations:S}};var n,t,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    evaluations: []
  }
}`,...(i=(t=a.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var l,m,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    evaluations: [{
      ...mockEvaluationQueue,
      submissionInstructionsMessage: markdownText
    }]
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var c,p,v;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    evaluations: sevenGeneratedEvaulations
  }
}`,...(v=(p=s.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var d,g,E;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    evaluations: generatedEvaulations
  }
}`,...(E=(g=o.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};const H=["NoneAvailable","OneAvailable","SevenAvailable","ManyAvailable"];export{o as ManyAvailable,a as NoneAvailable,e as OneAvailable,s as SevenAvailable,H as __namedExportsOrder,F as default};
