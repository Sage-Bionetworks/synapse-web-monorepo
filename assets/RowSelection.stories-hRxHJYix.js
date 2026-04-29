import{n as e}from"./chunk-jRWAZmH_.js";import{Ab as t,Mv as n,id as r,jS as i,np as a,ru as o,vn as s,yn as c,yp as l}from"./iframe-BDPawGT4.js";import{n as u,t as d}from"./RowSelectionUI-CuPCtzh6.js";var f,p,m,h;e((()=>{c(),o(),u(),n(),a(),f=i(),p={title:`Explore/RowSelection`,argTypes:{numberOfActions:{type:`number`,description:`The number of actions to display`}},render:e=>{let{numberOfActions:n=0,...i}=e;return(0,f.jsx)(d,{...i,customControls:(0,f.jsx)(f.Fragment,{children:l(n,e=>(0,f.jsxs)(t,{variant:e===n-1?`contained`:`outlined`,color:e%3==3?`secondary`:`primary`,startIcon:(0,f.jsx)(r,{}),onClick:()=>s(`clicked action ${e}`),children:[`Action `,e]}))})})},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/3l3RjDnKnv8jms2XFR5BQu/Main?type=design&node-id=462-39826`}}},m={name:`RowSelection`,args:{show:!0,selectedRowCount:5,onClearSelection:()=>{s(`clear selection called`)},numberOfActions:2}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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