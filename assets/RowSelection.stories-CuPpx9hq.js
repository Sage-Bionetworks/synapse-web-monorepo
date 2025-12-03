import{U as m,j as e,c2 as p,B as d,J as c}from"./iframe-oNn-8uxy.js";import{R as u}from"./RowSelectionUI-BW7ztf0p.js";import"./index-r8ZA1smB.js";import"./Badge-B0_DQT7x.js";import"./usePreviousProps-Bcna0YUH.js";import"./pluralize-CC--1ngb.js";import"./TableRowSelectionState-B8qjQL24.js";const f=m(e.jsx("path",{d:"M19 9h-4V3H9v6H5l7 7zM5 18v2h14v-2z"})),S={title:"Explore/RowSelection",argTypes:{numberOfActions:{type:"number",description:"The number of actions to display"}},render:i=>{const{numberOfActions:n=0,...l}=i;return e.jsx(u,{...l,customControls:e.jsx(e.Fragment,{children:p(n,o=>e.jsxs(d,{variant:o===n-1?"contained":"outlined",color:o%3==3?"secondary":"primary",startIcon:e.jsx(f,{}),onClick:()=>c(`clicked action ${o}`),children:["Action ",o]}))})})},parameters:{design:{type:"figma",url:"https://www.figma.com/file/3l3RjDnKnv8jms2XFR5BQu/Main?type=design&node-id=462-39826"}}},t={name:"RowSelection",args:{show:!0,selectedRowCount:5,onClearSelection:()=>{c("clear selection called")},numberOfActions:2}};var r,s,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'RowSelection',
  args: {
    show: true,
    selectedRowCount: 5,
    onClearSelection: () => {
      displayToast('clear selection called');
    },
    numberOfActions: 2
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const b=["Demo"];export{t as Demo,b as __namedExportsOrder,S as default};
