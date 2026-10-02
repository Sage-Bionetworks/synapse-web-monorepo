import{o as e}from"./preload-helper-CsHsquCd.js";import{H as t,t as n}from"./dist-C7SMz8Oe.js";import{n as r,t as i}from"./MarkdownSynapse-Ba2qp3Qe.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{r(),n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Markdown/MarkdownSynapse`,component:i,args:{onMarkdownProcessingDone:a()}},s={args:{markdown:`*markdown* given to the **component**`}},c={args:{ownerId:`syn12666371`,wikiId:`585317`,loadingSkeletonRowCount:20}},l={args:{ownerId:`9602704`,wikiId:void 0,objectType:t.ACCESS_REQUIREMENT},parameters:{stack:`development`}},u={args:{ownerId:`syn18142975`}},d={args:{markdown:`Button link demo 


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
\${provenance?entityList=syn12548902%2Fversion%2F34&depth=1&displayHeightPx=500&showExpand=true}`}},g={args:{ownerId:`syn5585645`,wikiId:`493662`}},_={args:{ownerId:`syn66340468`}},v={args:{markdown:"${iduReport?accessRestrictionId=9605700}"}},y={args:{ownerId:`syn23567475`,wikiId:`621868`}},b=[`HardCodedMarkdown`,`WikiPage`,`RootWikiPageAccessRequirement`,`ImageDemo`,`ButtonLink`,`ImageBySynID`,`Plot`,`SynapseTable`,`MarkdownProvenanceGraph`,`HtmlRenderingTest`,`LargeHtmlFileRenderingTest`,`MarkdownIDUReport`,`ComprehensivePlainMarkdownWiki`]}))();export{d as ButtonLink,y as ComprehensivePlainMarkdownWiki,s as HardCodedMarkdown,g as HtmlRenderingTest,f as ImageBySynID,u as ImageDemo,_ as LargeHtmlFileRenderingTest,v as MarkdownIDUReport,h as MarkdownProvenanceGraph,p as Plot,l as RootWikiPageAccessRequirement,m as SynapseTable,c as WikiPage,b as __namedExportsOrder,o as default};