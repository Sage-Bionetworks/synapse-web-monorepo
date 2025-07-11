import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as c,M as d}from"./chunk-AYJ5UCUI-BovHwV8F.js";import{B as x}from"./Box-piqsVEzW.js";import{C as h}from"./Card-CaT9MWRB.js";import{S as u}from"./Stack-CL-Uwzo-.js";import{T as o}from"./Typography-CnygSuis.js";import{L as k}from"./Link-DkrvP2Xp.js";import"./iframe-CHSey4Qy.js";import"./index-GRv_M5xO.js";import"./createTheme-XMOvO1uz.js";import"./useTheme-D8ZpTE-W.js";import"./extendSxProp-BUjKKvW6.js";import"./DefaultPropsProvider-TL-5ySmN.js";import"./Paper-v_DbiU7W.js";import"./useTheme-CTnoRr58.js";import"./getThemeProps-BBbNAS-u.js";import"./index-BIrZvg_i.js";import"./createSimplePaletteValueFilter-CTGhusyg.js";import"./isFocusVisible-B8k4qzLc.js";const r=({cards:t,linkText:m})=>e.jsx(x,{sx:{display:"flex",gap:2,width:"100%",flexDirection:{xs:"column",md:"row"}},children:t.map((n,l)=>e.jsx(h,{sx:{padding:"24px",flex:"1"},children:e.jsxs(u,{sx:{height:"100%",gap:2},children:[e.jsx(o,{variant:"headline3",sx:{lineHeight:"20px"},children:n.title}),e.jsx(o,{variant:"body1",sx:{fontSize:"14px",flex:"1",lineHeight:"normal"},children:n.description}),e.jsx(o,{sx:{fontSize:"14px",marginTop:"auto"},children:e.jsx(k,{component:c,to:n.link,sx:{textDecoration:"none"},children:m})})]})},l))});try{r.displayName="CardGridWithLinks",r.__docgenInfo={description:"",displayName:"CardGridWithLinks",props:{linkText:{defaultValue:null,description:"",name:"linkText",required:!0,type:{name:"string"}},cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"CardGridWithLinksConfig[]"}}}}}catch{}const E={title:"Cards/CardGridWithLinks",component:r,parameters:{chromatic:{viewports:[600,1200]}}},i={render:t=>e.jsx(d,{children:e.jsx(r,{...t})}),args:{linkText:"More Resources",cards:[{title:"Title 1",description:"Description text 1.",link:"https://example-1.com"},{title:"Title 2",description:"Description text 2.",link:"https://example-2.com"},{title:"Title 2",description:"Description text 3.",link:"https://example-3.com"}]}};var s,p,a;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
