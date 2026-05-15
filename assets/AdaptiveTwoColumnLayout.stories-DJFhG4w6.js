import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{HS as n,Uv as r,Wb as i,XS as a,dx as o}from"./iframe-DdE_KseG.js";import{n as s,t as c}from"./AdaptiveTwoColumnLayout-BHy66zjm.js";function l({items:e,color:t=`inherit`}){return(0,p.jsx)(i,{component:`dl`,sx:{display:`grid`,gridTemplateColumns:`auto 1fr`,columnGap:`24px`,rowGap:`6px`,margin:0},children:e.map(({key:e,value:n})=>(0,p.jsxs)(f.Fragment,{children:[(0,p.jsx)(o,{component:`dt`,variant:`caption`,sx:{fontWeight:600,textTransform:`uppercase`,opacity:.7,whiteSpace:`nowrap`,paddingTop:`2px`,color:t},children:e}),(0,p.jsx)(o,{component:`dd`,variant:`body2`,sx:{margin:0,lineHeight:1.55,color:t},children:n})]},e))})}function u({info:e}){let t=e===null;return(0,p.jsx)(i,{sx:{marginTop:`12px`,padding:`8px 12px`,background:`#1e1e1e`,color:t?`#9ca3af`:`#d4d4d4`,fontFamily:`monospace`,fontSize:`0.8rem`,borderRadius:`6px`},children:t?`Measuring…`:(0,p.jsxs)(p.Fragment,{children:[`Left:`,` `,(0,p.jsxs)(`strong`,{style:{color:`#7dd3fc`},children:[e.leftHeight,`px`]}),`  ·  `,`Right:`,` `,(0,p.jsxs)(`strong`,{style:{color:`#7dd3fc`},children:[e.rightHeight,`px`]}),`  ·  `,`Ratio:`,` `,(0,p.jsx)(`strong`,{style:{color:`#fbbf24`},children:e.ratio.toFixed(3)}),`  →  `,(0,p.jsx)(`strong`,{style:{color:e.stacked?`#86efac`:`#f9a8d4`},children:e.stacked?`⬇ STACKED`:`↔ SIDE-BY-SIDE`})]})})}function d(e){let[t,n]=(0,f.useState)(null);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c,{...e,onMeasure:n}),(0,p.jsx)(u,{info:t})]})}var f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{r(),f=t(a(),1),s(),p=n(),m=`Longitudinal analysis of neurodegeneration in aging cohorts spanning three
continents and twelve research sites. Participants aged 55–90 were recruited via
primary care networks and followed at annual intervals using a standardized battery
of cognitive, imaging, and biomarker assessments. High-density cortical EEG recordings
were combined with volumetric MRI to derive atrophy indices for hippocampal subfields
and entorhinal cortex. Plasma neurofilament light chain (NfL) was quantified at each
visit as a continuous marker of axonal injury. Genome-wide association data were
integrated using polygenic risk scoring for late-onset Alzheimer's disease to stratify
participants into low, medium, and high genetic-risk quintiles. Bayesian mixed-effects
models accounted for site, age, sex, education, and APOE ε4 carrier status. The
primary endpoint was annual change in composite cognitive z-score; secondary endpoints
included white-matter hyperintensity volume progression and CSF Aβ42/40 ratio decline.`,h=`A brief study examining neurodegeneration at a single research site using
standard cognitive and imaging assessments.`,g=[{key:`Status`,value:`Active`},{key:`Data Type`,value:`Genomics, Proteomics`},{key:`Access`,value:`Public`},{key:`Grant`,value:`NIH R01-AG123456`}],_=[{key:`Status`,value:`Active`},{key:`Data Type`,value:`Genomics, Proteomics`},{key:`Access`,value:`Public`},{key:`Grant`,value:`NIH R01-AG123456`},{key:`Principal Investigator`,value:`Dr. Jane Smith`},{key:`Institution`,value:`University of California, San Francisco`},{key:`Start Date`,value:`2021-03-01`},{key:`End Date`,value:`2026-02-28`},{key:`Disease Focus`,value:`Alzheimer's Disease`},{key:`Cohort Size`,value:`4,200 participants`},{key:`Biobank`,value:`Yes`},{key:`Species`,value:`Human`},{key:`Platform`,value:`Synapse`},{key:`DOI`,value:`10.7303/syn1234567`},{key:`Last Updated`,value:`2025-11-14`}],v={title:`Components/AdaptiveTwoColumnLayout`,component:c,parameters:{layout:`fullscreen`},argTypes:{leftContent:{control:!1},rightContent:{control:!1},onMeasure:{control:!1},stackRatioThreshold:{control:{type:`number`,min:.05,max:1.5,step:.05},description:`Stack when leftHeight ÷ rightHeight falls below this value. Default 0.45.`},gap:{control:`text`}}},y={name:`Side-by-side (long left / short right)`,render:e=>(0,p.jsx)(i,{sx:{padding:`40px 48px`,background:`#f8f9fa`},children:(0,p.jsx)(d,{stackRatioThreshold:e.stackRatioThreshold??.45,gap:e.gap??`40px`,leftContent:(0,p.jsx)(o,{variant:`body1`,sx:{lineHeight:1.65},children:m.trim()}),rightContent:(0,p.jsx)(l,{items:g})})}),args:{stackRatioThreshold:.45,gap:`40px`}},b={name:`Stacked (short left / tall right)`,render:e=>(0,p.jsx)(i,{sx:{padding:`40px 48px`,background:`#f8f9fa`},children:(0,p.jsx)(d,{stackRatioThreshold:e.stackRatioThreshold??.45,gap:e.gap??`40px`,leftContent:(0,p.jsx)(o,{variant:`body1`,sx:{lineHeight:1.65},children:h.trim()}),rightContent:(0,p.jsx)(l,{items:_})})}),args:{stackRatioThreshold:.45,gap:`40px`}},x={name:`HeaderCard-like (clamped description + properties)`,render:e=>(0,p.jsxs)(i,{sx:{background:`#253578`,color:`white`,padding:`40px 48px`},children:[(0,p.jsx)(o,{variant:`overline`,sx:{color:`rgba(255,255,255,0.65)`,letterSpacing:`0.1em`},children:`Study`}),(0,p.jsx)(o,{variant:`h5`,sx:{fontWeight:700,color:`white`,marginBottom:`24px`},children:`Longitudinal Analysis of Neurodegeneration in Aging Cohorts`}),(0,p.jsx)(d,{stackRatioThreshold:e.stackRatioThreshold??.45,gap:e.gap??`40px`,leftContent:(0,p.jsx)(i,{sx:{display:`-webkit-box`,WebkitLineClamp:4,WebkitBoxOrient:`vertical`,overflow:`hidden`,color:`rgba(255,255,255,0.9)`,lineHeight:1.65,fontSize:`0.9375rem`},children:m.trim()}),rightContent:(0,p.jsx)(l,{items:_.slice(0,8),color:`white`})})]}),args:{stackRatioThreshold:.45,gap:`40px`}},S={name:`Single column (no right content)`,render:e=>(0,p.jsx)(i,{sx:{padding:`40px 48px`,background:`#f8f9fa`},children:(0,p.jsx)(d,{stackRatioThreshold:e.stackRatioThreshold??.45,gap:e.gap??`40px`,leftContent:(0,p.jsx)(o,{variant:`body1`,sx:{lineHeight:1.65},children:m.trim()})})}),args:{stackRatioThreshold:.45}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Side-by-side (long left / short right)',
  render: args => <Box sx={{
    padding: '40px 48px',
    background: '#f8f9fa'
  }}>
      <WithDebug stackRatioThreshold={args.stackRatioThreshold ?? 0.45} gap={args.gap ?? '40px'} leftContent={<Typography variant="body1" sx={{
      lineHeight: 1.65
    }}>
            {LOREM_LONG.trim()}
          </Typography>} rightContent={<PropertyList items={FEW_PROPERTIES} />} />
    </Box>,
  args: {
    stackRatioThreshold: 0.45,
    gap: '40px'
  }
}`,...y.parameters?.docs?.source},description:{story:`The left column (long description) is taller than the right (few properties),
so ratio > 1 → stays side-by-side.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Stacked (short left / tall right)',
  render: args => <Box sx={{
    padding: '40px 48px',
    background: '#f8f9fa'
  }}>
      <WithDebug stackRatioThreshold={args.stackRatioThreshold ?? 0.45} gap={args.gap ?? '40px'} leftContent={<Typography variant="body1" sx={{
      lineHeight: 1.65
    }}>
            {LOREM_SHORT.trim()}
          </Typography>} rightContent={<PropertyList items={MANY_PROPERTIES} />} />
    </Box>,
  args: {
    stackRatioThreshold: 0.45,
    gap: '40px'
  }
}`,...b.parameters?.docs?.source},description:{story:`The left column (one-sentence description) is much shorter than the right
(15 properties), so ratio is small → stacks.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'HeaderCard-like (clamped description + properties)',
  render: args => <Box sx={{
    background: '#253578',
    color: 'white',
    padding: '40px 48px'
  }}>
      <Typography variant="overline" sx={{
      color: 'rgba(255,255,255,0.65)',
      letterSpacing: '0.1em'
    }}>
        Study
      </Typography>
      <Typography variant="h5" sx={{
      fontWeight: 700,
      color: 'white',
      marginBottom: '24px'
    }}>
        Longitudinal Analysis of Neurodegeneration in Aging Cohorts
      </Typography>
      <WithDebug stackRatioThreshold={args.stackRatioThreshold ?? 0.45} gap={args.gap ?? '40px'} leftContent={<Box sx={{
      display: '-webkit-box',
      WebkitLineClamp: 4,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      color: 'rgba(255,255,255,0.9)',
      lineHeight: 1.65,
      fontSize: '0.9375rem'
    }}>
            {LOREM_LONG.trim()}
          </Box>} rightContent={<PropertyList items={MANY_PROPERTIES.slice(0, 8)} color="white" />} />
    </Box>,
  args: {
    stackRatioThreshold: 0.45,
    gap: '40px'
  }
}`,...x.parameters?.docs?.source},description:{story:`Mimics the HeaderCard scenario: a 4-line clamped description on the left and
8 key-value pairs on the right (dark blue background). Should stack.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Single column (no right content)',
  render: args => <Box sx={{
    padding: '40px 48px',
    background: '#f8f9fa'
  }}>
      <WithDebug stackRatioThreshold={args.stackRatioThreshold ?? 0.45} gap={args.gap ?? '40px'} leftContent={<Typography variant="body1" sx={{
      lineHeight: 1.65
    }}>
            {LOREM_LONG.trim()}
          </Typography>} />
    </Box>,
  args: {
    stackRatioThreshold: 0.45
  }
}`,...S.parameters?.docs?.source},description:{story:`No right column — single full-width layout. Becomes visible immediately
(no measurement needed).`,...S.parameters?.docs?.description}}},C=[`SideBySide`,`Stacked`,`HeaderCardLike`,`SingleColumn`]}))();export{x as HeaderCardLike,y as SideBySide,S as SingleColumn,b as Stacked,C as __namedExportsOrder,v as default};