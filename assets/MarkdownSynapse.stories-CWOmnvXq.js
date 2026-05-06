import{n as e}from"./chunk-jRWAZmH_.js";import{G_ as t,O_ as n}from"./iframe-K8MLH6ew.js";import{n as r,t as i}from"./MarkdownSynapse-C1x59Ofw.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{r(),n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Markdown/MarkdownSynapse`,component:i,args:{onMarkdownProcessingDone:a()}},s={args:{markdown:`*markdown* given to the **component**`}},c={args:{ownerId:`syn12666371`,wikiId:`585317`,loadingSkeletonRowCount:20}},l={args:{ownerId:`9602704`,wikiId:void 0,objectType:t.ACCESS_REQUIREMENT},parameters:{stack:`development`}},u={args:{ownerId:`syn18142975`}},d={args:{markdown:`Button link demo 


\${buttonlink?text=Align%20Left&align=left} 


\${buttonlink?text=Align%20Right&align=right} 


\${buttonlink?text=Align%20Center&align=center} 


\${buttonlink?text=Highlight&highlight=true} 


Some text before the inline button \${buttonlink?text=Highlight&highlight=true} 


Links to synapse: 

\${buttonlink?text=This%20Button%20Links%20to%20Synapse&url=https://synapse.org/}
  `}},f={args:{markdown:`Note: you must be signed in to see this image
\${image?synapseId=syn36695878}`}},p={args:{markdown:'${plot?query=select "id"%2C "createdOn" from syn23567477&title=&type=BAR&barmode=GROUP&horizontal=false&showlegend=true}'}},m={args:{markdown:`# Synapse Table

Modify the markdown control to change the parameters

\${synapsetable?query=SELECT %2A FROM syn26302617&showquery=false&tableonly=false}`}},h={args:{markdown:`# Provenance Graphs
Multiple start nodes
\${provenance?entityList=syn12548902%2Csyn33344762&depth=3&displayHeightPx=800&showExpand=false}
Specify the entity version
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`}},g={args:{ownerId:`syn5585645`,wikiId:`493662`}},_={args:{ownerId:`syn66340468`}},v={args:{markdown:"${iduReport?accessRestrictionId=9605700}"}},y={args:{ownerId:`syn23567475`,wikiId:`621868`}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    markdown: '*markdown* given to the **component**'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ownerId: 'syn12666371',
    wikiId: '585317',
    loadingSkeletonRowCount: 20
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ownerId: '9602704',
    wikiId: undefined,
    objectType: ObjectType.ACCESS_REQUIREMENT
  },
  parameters: {
    stack: 'development'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ownerId: 'syn18142975'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    markdown: \`Button link demo \\n

\\\${buttonlink?text=Align%20Left&align=left} \\n

\\\${buttonlink?text=Align%20Right&align=right} \\n

\\\${buttonlink?text=Align%20Center&align=center} \\n

\\\${buttonlink?text=Highlight&highlight=true} \\n

Some text before the inline button \\\${buttonlink?text=Highlight&highlight=true} \\n

Links to synapse: \\n
\\\${buttonlink?text=This%20Button%20Links%20to%20Synapse&url=https://synapse.org/}
  \`
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    markdown: 'Note: you must be signed in to see this image\\n\${image?synapseId=syn36695878}'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    markdown: '\${plot?query=select "id"%2C "createdOn" from syn23567477&title=&type=BAR&barmode=GROUP&horizontal=false&showlegend=true}'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    markdown: '# Synapse Table\\n\\nModify the markdown control to change the parameters\\n\\n\${synapsetable?query=SELECT %2A FROM syn26302617&showquery=false&tableonly=false}'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    markdown: '# Provenance Graphs\\nMultiple start nodes\\n\${provenance?entityList=syn12548902%2Csyn33344762&depth=3&displayHeightPx=800&showExpand=false}\\nSpecify the entity version\\n\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ownerId: 'syn5585645',
    wikiId: '493662'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ownerId: 'syn66340468'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    markdown: '\${iduReport?accessRestrictionId=9605700}'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ownerId: 'syn23567475',
    wikiId: '621868'
  }
}`,...y.parameters?.docs?.source}}},b=[`HardCodedMarkdown`,`WikiPage`,`RootWikiPageAccessRequirement`,`ImageDemo`,`ButtonLink`,`ImageBySynID`,`Plot`,`SynapseTable`,`MarkdownProvenanceGraph`,`HtmlRenderingTest`,`LargeHtmlFileRenderingTest`,`MarkdownIDUReport`,`ComprehensivePlainMarkdownWiki`]}))();export{d as ButtonLink,y as ComprehensivePlainMarkdownWiki,s as HardCodedMarkdown,g as HtmlRenderingTest,f as ImageBySynID,u as ImageDemo,_ as LargeHtmlFileRenderingTest,v as MarkdownIDUReport,h as MarkdownProvenanceGraph,p as Plot,l as RootWikiPageAccessRequirement,m as SynapseTable,c as WikiPage,b as __namedExportsOrder,o as default};