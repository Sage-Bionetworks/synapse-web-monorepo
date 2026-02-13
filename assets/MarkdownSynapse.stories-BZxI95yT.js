import{M as g}from"./MarkdownSynapse-CF0aiU3p.js";import{bX as u}from"./iframe-vUTu6M8D.js";import"./index-Chi_LkuB.js";import"./SkeletonButton-BfImOAlj.js";import"./SkeletonInlineBlock-Dw1qUrgT.js";import"./SkeletonTable-CYuF7-ZU.js";import"./SkeletonParagraph-DI0oUi2H.js";const{fn:y}=__STORYBOOK_MODULE_TEST__,f={title:"Markdown/MarkdownSynapse",component:g,args:{onMarkdownProcessingDone:y()}},e={args:{markdown:"*markdown* given to the **component**"}},n={args:{ownerId:"syn12666371",wikiId:"585317",loadingSkeletonRowCount:20}},r={args:{ownerId:"9602704",wikiId:void 0,objectType:u.ACCESS_REQUIREMENT},parameters:{stack:"development"}},s={args:{ownerId:"syn18142975"}},a={args:{markdown:`Button link demo 


\${buttonlink?text=Align%20Left&align=left} 


\${buttonlink?text=Align%20Right&align=right} 


\${buttonlink?text=Align%20Center&align=center} 


\${buttonlink?text=Highlight&highlight=true} 


Links to synapse: 

\${buttonlink?text=This%20Button%20Links%20to%20Synapse&url=https://synapse.org/}
  `}},o={args:{markdown:"Note: you must be signed in to see this image\n${image?synapseId=syn36695878}"}},t={args:{markdown:'${plot?query=select "id"%2C "createdOn" from syn23567477&title=&type=BAR&barmode=GROUP&horizontal=false&showlegend=true}'}},i={args:{markdown:`# Synapse Table

Modify the markdown control to change the parameters

\${synapsetable?query=SELECT %2A FROM syn26302617&showquery=false&tableonly=false}`}},d={args:{markdown:`# Provenance Graphs
Multiple start nodes
\${provenance?entityList=syn12548902%2Csyn33344762&depth=3&displayHeightPx=800&showExpand=false}
Specify the entity version
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`}},c={args:{ownerId:"syn5585645",wikiId:"493662"}},p={args:{ownerId:"syn66340468"}},m={args:{markdown:"${iduReport?accessRestrictionId=9605700}"}},l={args:{ownerId:"syn23567475",wikiId:"621868"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    markdown: '*markdown* given to the **component**'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ownerId: 'syn12666371',
    wikiId: '585317',
    loadingSkeletonRowCount: 20
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ownerId: '9602704',
    wikiId: undefined,
    objectType: ObjectType.ACCESS_REQUIREMENT
  },
  parameters: {
    stack: 'development'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ownerId: 'syn18142975'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    markdown: \`Button link demo \\n

\\\${buttonlink?text=Align%20Left&align=left} \\n

\\\${buttonlink?text=Align%20Right&align=right} \\n

\\\${buttonlink?text=Align%20Center&align=center} \\n

\\\${buttonlink?text=Highlight&highlight=true} \\n

Links to synapse: \\n
\\\${buttonlink?text=This%20Button%20Links%20to%20Synapse&url=https://synapse.org/}
  \`
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    markdown: 'Note: you must be signed in to see this image\\n\${image?synapseId=syn36695878}'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    markdown: '\${plot?query=select "id"%2C "createdOn" from syn23567477&title=&type=BAR&barmode=GROUP&horizontal=false&showlegend=true}'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    markdown: '# Synapse Table\\n\\nModify the markdown control to change the parameters\\n\\n\${synapsetable?query=SELECT %2A FROM syn26302617&showquery=false&tableonly=false}'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    markdown: '# Provenance Graphs\\nMultiple start nodes\\n\${provenance?entityList=syn12548902%2Csyn33344762&depth=3&displayHeightPx=800&showExpand=false}\\nSpecify the entity version\\n\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ownerId: 'syn5585645',
    wikiId: '493662'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ownerId: 'syn66340468'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    markdown: '\${iduReport?accessRestrictionId=9605700}'
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ownerId: 'syn23567475',
    wikiId: '621868'
  }
}`,...l.parameters?.docs?.source}}};const M=["HardCodedMarkdown","WikiPage","RootWikiPageAccessRequirement","ImageDemo","ButtonLink","ImageBySynID","Plot","SynapseTable","MarkdownProvenanceGraph","HtmlRenderingTest","LargeHtmlFileRenderingTest","MarkdownIDUReport","ComprehensivePlainMarkdownWiki"];export{a as ButtonLink,l as ComprehensivePlainMarkdownWiki,e as HardCodedMarkdown,c as HtmlRenderingTest,o as ImageBySynID,s as ImageDemo,p as LargeHtmlFileRenderingTest,m as MarkdownIDUReport,d as MarkdownProvenanceGraph,t as Plot,r as RootWikiPageAccessRequirement,i as SynapseTable,n as WikiPage,M as __namedExportsOrder,f as default};
