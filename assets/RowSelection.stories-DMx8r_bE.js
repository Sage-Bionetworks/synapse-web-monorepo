import{n as e}from"./chunk-jRWAZmH_.js";import{MS as t,Nv as n,ad as r,bp as i,jb as a,rp as o,ru as s,vn as c,yn as l}from"./iframe-DtZHC7tB.js";import{n as u,t as d}from"./RowSelectionUI-C5LdVbV_.js";var f,p,m,h;e((()=>{l(),s(),u(),n(),o(),f=t(),p={title:`Explore/RowSelection`,argTypes:{numberOfActions:{type:`number`,description:`The number of actions to display`}},render:e=>{let{numberOfActions:t=0,...n}=e;return(0,f.jsx)(d,{...n,customControls:(0,f.jsx)(f.Fragment,{children:i(t,e=>(0,f.jsxs)(a,{variant:e===t-1?`contained`:`outlined`,color:e%3==3?`secondary`:`primary`,startIcon:(0,f.jsx)(r,{}),onClick:()=>c(`clicked action ${e}`),children:[`Action `,e]}))})})},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/3l3RjDnKnv8jms2XFR5BQu/Main?type=design&node-id=462-39826`}}},m={name:`RowSelection`,args:{show:!0,selectedRowCount:5,onClearSelection:()=>{c(`clear selection called`)},numberOfActions:2}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'RowSelection',
  args: {
    show: true,
    selectedRowCount: 5,
    onClearSelection: () => {
      displayToast('clear selection called');
    },
    numberOfActions: 2
  }
}`,...m.parameters?.docs?.source}}},h=[`Demo`]}))();export{m as Demo,h as __namedExportsOrder,p as default};