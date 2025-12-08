import{j as r,iF as x,iG as A,iH as S,V as _}from"./iframe-DslgKmO_.js";import{A as O}from"./AvailableEvaluationQueueList-C5bfDx7N.js";import"./index-r8ZA1smB.js";import"./LightTooltip-DtnUKaEX.js";import"./MarkdownSynapse-BtLlVZBF.js";import"./SkeletonButton-CrnZOVdp.js";import"./SkeletonInlineBlock-iMtCHDfe.js";import"./SkeletonTable-B6rYfEE0.js";import"./SkeletonParagraph-CWIA3BjK.js";import"./Autocomplete-CwtCP0qR.js";import"./usePreviousProps-D79KkPg-.js";import"./Chip-BUIb0Z0i.js";import"./MenuItem-CTidO0-V.js";import"./ListItem-86j4_waz.js";import"./listItemButtonClasses-XKo5iVko.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,F={title:"Synapse/Challenge/AvailableEvaluationQueueList",component:O,decorators:[b=>r.jsx(_,{sx:{maxWidth:"600px"},children:r.jsx(b,{})})],args:{onChangeSelectedEvaluation:h()}},a={args:{evaluations:[]}},k="*markdown* given to the **component**",e={args:{evaluations:[{...x,submissionInstructionsMessage:k}]}},s={args:{evaluations:A}},o={args:{evaluations:S}};var n,t,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
