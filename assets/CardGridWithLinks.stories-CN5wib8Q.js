import{j as e}from"./jsx-runtime-DUbQcIgO.js";import{L as c,M as d}from"./chunk-AYJ5UCUI-CuAphczh.js";import{B as x}from"./Box-BNlGut7z.js";import{C as h}from"./Card-DXajUx_p.js";import{S as u}from"./Stack-ClyyUoGo.js";import{T as o}from"./Typography-B87fyUCj.js";import{L as k}from"./Link-yD6_0rZx.js";import"./index-B1sUgM2J.js";import"./iframe-dGFA8UIy.js";import"./createTheme-CbdxX3QN.js";import"./useTheme-CYmQzm27.js";import"./extendSxProp-BkqfAiBc.js";import"./DefaultPropsProvider-BrAb0sW2.js";import"./Paper-BJEASiZs.js";import"./useTheme-D4vJ6lFU.js";import"./getThemeProps-DbHHmb1Z.js";import"./index-Beh3Q5fM.js";import"./createSimplePaletteValueFilter-8fXUNCBa.js";import"./isFocusVisible-B8k4qzLc.js";const r=({cards:t,linkText:m})=>e.jsx(x,{sx:{display:"flex",gap:2,width:"100%",flexDirection:{xs:"column",md:"row"}},children:t.map((n,l)=>e.jsx(h,{sx:{padding:"24px",flex:"1"},children:e.jsxs(u,{sx:{height:"100%",gap:2},children:[e.jsx(o,{variant:"headline3",sx:{lineHeight:"20px"},children:n.title}),e.jsx(o,{variant:"body1",sx:{fontSize:"14px",flex:"1",lineHeight:"normal"},children:n.description}),e.jsx(o,{sx:{fontSize:"14px",marginTop:"auto"},children:e.jsx(k,{component:c,to:n.link,sx:{textDecoration:"none"},children:m})})]})},l))});try{r.displayName="CardGridWithLinks",r.__docgenInfo={description:"",displayName:"CardGridWithLinks",props:{linkText:{defaultValue:null,description:"",name:"linkText",required:!0,type:{name:"string"}},cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"CardGridWithLinksConfig[]"}}}}}catch{}const E={title:"Cards/CardGridWithLinks",component:r,parameters:{chromatic:{viewports:[600,1200]}}},i={render:t=>e.jsx(d,{children:e.jsx(r,{...t})}),args:{linkText:"More Resources",cards:[{title:"Title 1",description:"Description text 1.",link:"https://example-1.com"},{title:"Title 2",description:"Description text 2.",link:"https://example-2.com"},{title:"Title 2",description:"Description text 3.",link:"https://example-3.com"}]}};var s,p,a;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
