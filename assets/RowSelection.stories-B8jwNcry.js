import{V as c,j as e,c3 as i,B as l,K as r}from"./iframe-D-KER6Qh.js";import{R as m}from"./RowSelectionUI-DDgWSZ0_.js";import"./index-Chi_LkuB.js";import"./Badge-DZvbrd90.js";import"./usePreviousProps-DpBYS96o.js";import"./pluralize-DvqWrKl4.js";import"./TableRowSelectionState-BnA1kNY-.js";const p=c(e.jsx("path",{d:"M19 9h-4V3H9v6H5l7 7zM5 18v2h14v-2z"})),h={title:"Explore/RowSelection",argTypes:{numberOfActions:{type:"number",description:"The number of actions to display"}},render:s=>{const{numberOfActions:n=0,...a}=s;return e.jsx(m,{...a,customControls:e.jsx(e.Fragment,{children:i(n,o=>e.jsxs(l,{variant:o===n-1?"contained":"outlined",color:o%3==3?"secondary":"primary",startIcon:e.jsx(p,{}),onClick:()=>r(`clicked action ${o}`),children:["Action ",o]}))})})},parameters:{design:{type:"figma",url:"https://www.figma.com/file/3l3RjDnKnv8jms2XFR5BQu/Main?type=design&node-id=462-39826"}}},t={name:"RowSelection",args:{show:!0,selectedRowCount:5,onClearSelection:()=>{r("clear selection called")},numberOfActions:2}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'RowSelection',
  args: {
    show: true,
    selectedRowCount: 5,
    onClearSelection: () => {
      displayToast('clear selection called');
    },
    numberOfActions: 2
  }
}`,...t.parameters?.docs?.source}}};const j=["Demo"];export{t as Demo,j as __namedExportsOrder,h as default};
