import{j as r,iK as x,iL as A,iM as S,V as _}from"./iframe-B4CHAk6x.js";import{A as O}from"./AvailableEvaluationQueueList-VBnRCOgb.js";import"./index-r8ZA1smB.js";import"./LightTooltip-CSn5B8sG.js";import"./MarkdownSynapse-BVqNsxRc.js";import"./SkeletonButton-CPwz8mIe.js";import"./SkeletonInlineBlock-DNU7D5U5.js";import"./SkeletonTable-RSxhuQlc.js";import"./SkeletonParagraph-DDHYucUN.js";import"./Autocomplete-DhoUM4I7.js";import"./usePreviousProps-B6lXH9VI.js";import"./Chip-D5KlvdWr.js";import"./MenuItem-lGKzud5I.js";import"./ListItem-DHpCFzYH.js";import"./listItemButtonClasses-jgplJjM1.js";const{fn:M}=__STORYBOOK_MODULE_TEST__,D={title:"Synapse/Challenge/AvailableEvaluationQueueList",component:O,decorators:[b=>r.jsx(_,{sx:{maxWidth:"600px"},children:r.jsx(b,{})})],args:{onChangeSelectedEvaluation:M()}},a={args:{evaluations:[]}},h="*markdown* given to the **component**",e={args:{evaluations:[{...x,submissionInstructionsMessage:h}]}},s={args:{evaluations:A}},o={args:{evaluations:S}};var n,t,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(E=(g=o.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};const U=["NoneAvailable","OneAvailable","SevenAvailable","ManyAvailable"];export{o as ManyAvailable,a as NoneAvailable,e as OneAvailable,s as SevenAvailable,U as __namedExportsOrder,D as default};
