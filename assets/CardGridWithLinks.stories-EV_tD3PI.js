import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as c,M as d}from"./chunk-AYJ5UCUI-C_JKew03.js";import{B as x}from"./Box-DGTuWuks.js";import{C as h}from"./Card-CV2r_ByC.js";import{S as u}from"./Stack-C33LiS6n.js";import{T as o}from"./Typography-Dr6RcEbm.js";import{L as k}from"./Link-66_rdqR4.js";import"./iframe-CW0KqQYK.js";import"./index-C2ak8tr3.js";import"./createTheme-_ssnMRbb.js";import"./useTheme-Dvg9yXlH.js";import"./extendSxProp-PxJDRmPe.js";import"./DefaultPropsProvider-BIDG4pXJ.js";import"./Paper-Clly3oeS.js";import"./useTheme-BXUR3X8S.js";import"./getThemeProps-a4OQxquJ.js";import"./index-k4a5S4FR.js";import"./createSimplePaletteValueFilter-pNOTYgat.js";import"./isFocusVisible-B8k4qzLc.js";const r=({cards:t,linkText:m})=>e.jsx(x,{sx:{display:"flex",gap:2,width:"100%",flexDirection:{xs:"column",md:"row"}},children:t.map((n,l)=>e.jsx(h,{sx:{padding:"24px",flex:"1"},children:e.jsxs(u,{sx:{height:"100%",gap:2},children:[e.jsx(o,{variant:"headline3",sx:{lineHeight:"20px"},children:n.title}),e.jsx(o,{variant:"body1",sx:{fontSize:"14px",flex:"1",lineHeight:"normal"},children:n.description}),e.jsx(o,{sx:{fontSize:"14px",marginTop:"auto"},children:e.jsx(k,{component:c,to:n.link,sx:{textDecoration:"none"},children:m})})]})},l))});try{r.displayName="CardGridWithLinks",r.__docgenInfo={description:"",displayName:"CardGridWithLinks",props:{linkText:{defaultValue:null,description:"",name:"linkText",required:!0,type:{name:"string"}},cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"CardGridWithLinksConfig[]"}}}}}catch{}const E={title:"Cards/CardGridWithLinks",component:r,parameters:{chromatic:{viewports:[600,1200]}}},i={render:t=>e.jsx(d,{children:e.jsx(r,{...t})}),args:{linkText:"More Resources",cards:[{title:"Title 1",description:"Description text 1.",link:"https://example-1.com"},{title:"Title 2",description:"Description text 2.",link:"https://example-2.com"},{title:"Title 2",description:"Description text 3.",link:"https://example-3.com"}]}};var s,p,a;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <MemoryRouter>
      <CardGridWithLinks {...args} />
    </MemoryRouter>,
  args: {
    linkText: 'More Resources',
    cards: [{
      title: 'Title 1',
      description: 'Description text 1.',
      link: 'https://example-1.com'
    }, {
      title: 'Title 2',
      description: 'Description text 2.',
      link: 'https://example-2.com'
    }, {
      title: 'Title 2',
      description: 'Description text 3.',
      link: 'https://example-3.com'
    }]
  }
}`,...(a=(p=i.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const H=["Demo"];export{i as Demo,H as __namedExportsOrder,E as default};
