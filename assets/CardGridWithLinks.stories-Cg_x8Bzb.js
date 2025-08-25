import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as c,M as d}from"./chunk-AYJ5UCUI-C3d9T5HW.js";import{B as x}from"./Box-BcE9yvph.js";import{C as h}from"./Card-Dv4hnMAF.js";import{S as u}from"./Stack-BGpq_-To.js";import{T as o}from"./Typography-DtntXaKd.js";import{L as k}from"./Link-gmr1YpL6.js";import"./iframe-BJviWTqp.js";import"./index-CNMTJ46z.js";import"./createTheme-zhaCRmkM.js";import"./useTheme-aLami-tv.js";import"./extendSxProp-wdNZDvym.js";import"./DefaultPropsProvider-DPtW3vxh.js";import"./Paper-Dik6GTog.js";import"./useTheme-ICdOAtbl.js";import"./getThemeProps-Ccd5Mcjt.js";import"./index-CJ1gOIxh.js";import"./createSimplePaletteValueFilter-BeNeyznZ.js";import"./isFocusVisible-B8k4qzLc.js";const r=({cards:t,linkText:m})=>e.jsx(x,{sx:{display:"flex",gap:2,width:"100%",flexDirection:{xs:"column",md:"row"}},children:t.map((n,l)=>e.jsx(h,{sx:{padding:"24px",flex:"1"},children:e.jsxs(u,{sx:{height:"100%",gap:2},children:[e.jsx(o,{variant:"headline3",sx:{lineHeight:"20px"},children:n.title}),e.jsx(o,{variant:"body1",sx:{fontSize:"14px",flex:"1",lineHeight:"normal"},children:n.description}),e.jsx(o,{sx:{fontSize:"14px",marginTop:"auto"},children:e.jsx(k,{component:c,to:n.link,sx:{textDecoration:"none"},children:m})})]})},l))});try{r.displayName="CardGridWithLinks",r.__docgenInfo={description:"",displayName:"CardGridWithLinks",props:{linkText:{defaultValue:null,description:"",name:"linkText",required:!0,type:{name:"string"}},cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"CardGridWithLinksConfig[]"}}}}}catch{}const E={title:"Cards/CardGridWithLinks",component:r,parameters:{chromatic:{viewports:[600,1200]}}},i={render:t=>e.jsx(d,{children:e.jsx(r,{...t})}),args:{linkText:"More Resources",cards:[{title:"Title 1",description:"Description text 1.",link:"https://example-1.com"},{title:"Title 2",description:"Description text 2.",link:"https://example-2.com"},{title:"Title 2",description:"Description text 3.",link:"https://example-3.com"}]}};var s,p,a;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
