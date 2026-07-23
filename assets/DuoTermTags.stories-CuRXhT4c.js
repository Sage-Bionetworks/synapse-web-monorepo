import{o as e}from"./preload-helper-CsHsquCd.js";import{pn as t}from"./TextField-DshmLCH7.js";import{t as n}from"./jsx-runtime-l3w3GfrB.js";import{D as r,mn as i,t as a}from"./esm-CeuVXgHQ.js";import{a as o,i as s,n as c,r as l,t as u}from"./DuoTermTags-B5DPfafB.js";import{n as d,t as f}from"./FacetValueChip-D4B85bWh.js";import{n as p,t as m}from"./GenericCardIcon-BqdayKUb.js";import{n as h,t as g}from"./GenericCard-gJFWFRMy.js";import{n as _,t as v}from"./EnumFacetFilterOption-BbVmXzjf.js";import{n as y,t as b}from"./SelectionCriteriaPill-C-pNkWX8.js";function x(e){let{code:t,truncate:n=!1}=e,r=C(`duo`,t);return(0,S.jsx)(f,{label:r.label,icon:r.icon,tooltipTitle:r.tooltipTitle,placement:`right`,truncate:n})}var S,C,w,T,E,D,O,k,A;e((()=>{a(),h(),p(),_(),y(),d(),l(),o(),S=n(),C=c(`duo`),w={title:`Explore/GenericCard/DuoTermTags`,component:u,parameters:{docs:{description:{component:`Renders Data Use Ontology (DUO) \`dataUseModifiers\` values as labelled tags.
The tags use a single neutral, theme-driven color (not color-coded by
category); meaning is conveyed by the icon, label, and a tooltip with the
term's definition and a link to its ontology entry.

The same renderer is used in three places: dataset cards (full names), the
"Data Use Modifiers" facet (truncated to fit the sidebar), and the
active-filter ("results filtered by") pills (full names, with a delete icon).`}}}},T={args:{terms:[`DUO:0000006`,`DUO:0000046`,`DUOplus7`]}},E={args:{terms:s.map(e=>e.code)}},D={args:{terms:[]},render:()=>(0,S.jsxs)(i,{sx:{width:320,p:2,border:e=>`1px solid ${e.palette.divider}`,borderRadius:1},children:[(0,S.jsx)(t,{variant:`smallText1`,sx:{fontWeight:600,mb:1,display:`block`},children:`Data Use Modifiers`}),s.map((e,t)=>(0,S.jsx)(v,{id:e.code,inputType:`checkbox`,isDropdown:!1,checked:!1,count:t*7%130,label:(0,S.jsx)(x,{code:e.code,truncate:!0}),onChange:()=>{},onHover:()=>{}},e.code))]})},O={args:{terms:[]},render:()=>(0,S.jsxs)(r,{gap:2,sx:{maxWidth:900},children:[(0,S.jsx)(g,{type:`DATASET`,title:`Whole-genome sequencing of NF1-associated tumors`,description:`A representative dataset carrying several data-use conditions, including a commercial-use restriction and an attribution requirement.`,icon:(0,S.jsx)(m,{type:`DATASET`,useTypeForIcon:!0}),labels:[{columnDisplayName:`Data Use Modifiers`,value:(0,S.jsx)(u,{terms:[`DUO:0000006`,`DUO:0000046`,`DUOplus7`]})},{columnDisplayName:`Assay`,value:`Whole Genome Sequencing`},{columnDisplayName:`Species`,value:`Homo sapiens`}]}),(0,S.jsx)(g,{type:`DATASET`,title:`Disease-specific cohort with access conditions`,description:`Disease-specific research with ethics approval, geographic, and collaboration requirements.`,icon:(0,S.jsx)(m,{type:`DATASET`,useTypeForIcon:!0}),labels:[{columnDisplayName:`Data Use Modifiers`,value:(0,S.jsx)(u,{terms:[`DUO:0000007`,`DUO:0000021`,`DUO:0000022`,`DUO:0000020`]})},{columnDisplayName:`Assay`,value:`RNA-seq`}]})]})},k={args:{terms:[]},render:()=>(0,S.jsx)(`div`,{className:`TotalQueryResults`,children:(0,S.jsxs)(`div`,{className:`TotalQueryResults__selections`,style:{display:`flex`,flexWrap:`wrap`},children:[[`DUO:0000006`,`DUO:0000042`,`DUO:0000046`].map(e=>{let t=C(`duo`,e);return(0,S.jsx)(b,{label:t.label,icon:t.icon,tooltipText:t.tooltipTitle,onRemoveFilter:()=>{}},e)}),(0,S.jsx)(b,{label:`2022`,tooltipText:`Year Processed: 2022`,onRemoveFilter:()=>{}},`year`)]})})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    terms: ['DUO:0000006', 'DUO:0000046', 'DUOplus7']
  }
}`,...T.parameters?.docs?.source},description:{story:`A few terms together, as they'd appear on a card with several conditions.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    terms: ALL_DUO_TERMS.map(t => t.code)
  }
}`,...E.parameters?.docs?.source},description:{story:`Every term in the vocabulary, grouped by category and shown with full names.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    terms: []
  },
  render: () => <Box sx={{
    width: 320,
    p: 2,
    border: theme => \`1px solid \${theme.palette.divider}\`,
    borderRadius: 1
  }}>
      <Typography variant="smallText1" sx={{
      fontWeight: 600,
      mb: 1,
      display: 'block'
    }}>
        Data Use Modifiers
      </Typography>
      {ALL_DUO_TERMS.map((t, i) => <EnumFacetFilterOption key={t.code} id={t.code} inputType="checkbox" isDropdown={false} checked={false} count={i * 7 % 130} label={<DuoChip code={t.code} truncate={true} />} onChange={() => {}} onHover={() => {}} />)}
    </Box>
}`,...D.parameters?.docs?.source},description:{story:`In the facet sidebar the tags are truncated to a fixed max width (full name
still available in the tooltip) so long names don't blow out the column.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    terms: []
  },
  render: () => <Stack gap={2} sx={{
    maxWidth: 900
  }}>
      <GenericCard type="DATASET" title="Whole-genome sequencing of NF1-associated tumors" description="A representative dataset carrying several data-use conditions, including a commercial-use restriction and an attribution requirement." icon={<GenericCardIcon type="DATASET" useTypeForIcon />} labels={[{
      columnDisplayName: 'Data Use Modifiers',
      value: <DuoTermTags terms={['DUO:0000006', 'DUO:0000046', 'DUOplus7']} />
    }, {
      columnDisplayName: 'Assay',
      value: 'Whole Genome Sequencing'
    }, {
      columnDisplayName: 'Species',
      value: 'Homo sapiens'
    }]} />
      <GenericCard type="DATASET" title="Disease-specific cohort with access conditions" description="Disease-specific research with ethics approval, geographic, and collaboration requirements." icon={<GenericCardIcon type="DATASET" useTypeForIcon />} labels={[{
      columnDisplayName: 'Data Use Modifiers',
      value: <DuoTermTags terms={['DUO:0000007', 'DUO:0000021', 'DUO:0000022', 'DUO:0000020']} />
    }, {
      columnDisplayName: 'Assay',
      value: 'RNA-seq'
    }]} />
    </Stack>
}`,...O.parameters?.docs?.source},description:{story:`On a dataset card, DUO terms appear as a metadata row labeled with the DUO
column's display name (e.g. "Data Use Modifiers", matching the facet), with
full term names.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    terms: []
  },
  render: () => <div className="TotalQueryResults">
      <div className="TotalQueryResults__selections" style={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
        {['DUO:0000006', 'DUO:0000042', 'DUO:0000046'].map(code => {
        const content = renderDuoFacetValue('duo', code)!;
        return <SelectionCriteriaPill key={code} label={content.label} icon={content.icon} tooltipText={content.tooltipTitle} onRemoveFilter={() => {}} />;
      })}
        <SelectionCriteriaPill key="year" label="2022" tooltipText="Year Processed: 2022" onRemoveFilter={() => {}} />
      </div>
    </div>
}`,...k.parameters?.docs?.source},description:{story:`In the active-filter ("results filtered by") row, each selected DUO value is
a single deletable chip — the same chip design as a plain (non-DUO) filter
pill, shown here alongside one for size comparison.`,...k.parameters?.docs?.description}}},A=[`Default`,`AllTerms`,`TruncatedForFacetSidebar`,`OnADatasetCard`,`AsActiveFilterPills`]}))();export{E as AllTerms,k as AsActiveFilterPills,T as Default,O as OnADatasetCard,D as TruncatedForFacetSidebar,A as __namedExportsOrder,w as default};