import{j as r,ix as t,iy as i,iz as l,Y as m}from"./iframe-CvDTy6mw.js";import{A as u}from"./AvailableEvaluationQueueList-D9z3PyOQ.js";import"./index-Chi_LkuB.js";import"./LightTooltip-Cn6AM7tu.js";import"./MarkdownSynapse-BqOzEXKP.js";import"./SkeletonButton-DrRqzwrL.js";import"./SkeletonInlineBlock-DRwNak6O.js";import"./SkeletonTable-DjmsDm7y.js";import"./SkeletonParagraph-DAWCny1c.js";import"./Autocomplete-DwBAeBSM.js";import"./usePreviousProps-0ca6yt6K.js";import"./Chip-DmppX2NC.js";import"./MenuItem-DnOuV5Bw.js";import"./ListItem-DoXG3GUM.js";import"./listItemButtonClasses-DMs0uJ6l.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,j={title:"Synapse/Challenge/AvailableEvaluationQueueList",component:u,decorators:[n=>r.jsx(m,{sx:{maxWidth:"600px"},children:r.jsx(n,{})})],args:{onChangeSelectedEvaluation:c()}},a={args:{evaluations:[]}},p="*markdown* given to the **component**",e={args:{evaluations:[{...t,submissionInstructionsMessage:p}]}},s={args:{evaluations:i}},o={args:{evaluations:l}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    evaluations: []
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    evaluations: [{
      ...mockEvaluationQueue,
      submissionInstructionsMessage: markdownText
    }]
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    evaluations: sevenGeneratedEvaulations
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    evaluations: generatedEvaulations
  }
}`,...o.parameters?.docs?.source}}};const y=["NoneAvailable","OneAvailable","SevenAvailable","ManyAvailable"];export{o as ManyAvailable,a as NoneAvailable,e as OneAvailable,s as SevenAvailable,y as __namedExportsOrder,j as default};
