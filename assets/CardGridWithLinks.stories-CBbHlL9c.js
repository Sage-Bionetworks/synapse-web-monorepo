import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as c,M as d}from"./chunk-AYJ5UCUI-BNB_QKCv.js";import{B as x}from"./Box-DacBFjar.js";import{C as h}from"./Card-DddgyEkc.js";import{S as u}from"./Stack-Bj7c06tH.js";import{T as o}from"./Typography-BsIa8Xjl.js";import{L as k}from"./Link-hmzR4kgp.js";import"./iframe-CHJdwkcb.js";import"./index-D0zaLgG5.js";import"./createTheme-Bzp3Oebg.js";import"./useTheme-BD4wcF5Z.js";import"./extendSxProp-Cxiymmpb.js";import"./DefaultPropsProvider-DAPNjWet.js";import"./Paper-Dqc9mm5b.js";import"./useTheme-B2DydEPb.js";import"./getThemeProps-Cdu9ZaST.js";import"./index-3FGJ995p.js";import"./createSimplePaletteValueFilter-B-MvoJXT.js";import"./isFocusVisible-B8k4qzLc.js";const r=({cards:t,linkText:m})=>e.jsx(x,{sx:{display:"flex",gap:2,width:"100%",flexDirection:{xs:"column",md:"row"}},children:t.map((n,l)=>e.jsx(h,{sx:{padding:"24px",flex:"1"},children:e.jsxs(u,{sx:{height:"100%",gap:2},children:[e.jsx(o,{variant:"headline3",sx:{lineHeight:"20px"},children:n.title}),e.jsx(o,{variant:"body1",sx:{fontSize:"14px",flex:"1",lineHeight:"normal"},children:n.description}),e.jsx(o,{sx:{fontSize:"14px",marginTop:"auto"},children:e.jsx(k,{component:c,to:n.link,sx:{textDecoration:"none"},children:m})})]})},l))});try{r.displayName="CardGridWithLinks",r.__docgenInfo={description:"",displayName:"CardGridWithLinks",props:{linkText:{defaultValue:null,description:"",name:"linkText",required:!0,type:{name:"string"}},cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"CardGridWithLinksConfig[]"}}}}}catch{}const E={title:"Cards/CardGridWithLinks",component:r,parameters:{chromatic:{viewports:[600,1200]}}},i={render:t=>e.jsx(d,{children:e.jsx(r,{...t})}),args:{linkText:"More Resources",cards:[{title:"Title 1",description:"Description text 1.",link:"https://example-1.com"},{title:"Title 2",description:"Description text 2.",link:"https://example-2.com"},{title:"Title 2",description:"Description text 3.",link:"https://example-3.com"}]}};var s,p,a;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
