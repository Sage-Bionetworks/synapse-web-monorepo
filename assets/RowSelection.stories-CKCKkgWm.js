import{n as e}from"./chunk-jRWAZmH_.js";import{Cn as t,GS as n,Kv as r,Op as i,Wb as a,cu as o,dp as s,fd as c,wn as l}from"./iframe-DXefh1ld.js";import{n as u,t as d}from"./RowSelectionUI-ZnJphqWu.js";var f,p,m,h;e((()=>{l(),o(),u(),r(),s(),f=n(),p={title:`Explore/RowSelection`,argTypes:{numberOfActions:{type:`number`,description:`The number of actions to display`}},render:e=>{let{numberOfActions:n=0,...r}=e;return(0,f.jsx)(d,{...r,customControls:(0,f.jsx)(f.Fragment,{children:i(n,e=>(0,f.jsxs)(a,{variant:e===n-1?`contained`:`outlined`,color:e%3==3?`secondary`:`primary`,startIcon:(0,f.jsx)(c,{}),onClick:()=>t(`clicked action ${e}`),children:[`Action `,e]}))})})},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/3l3RjDnKnv8jms2XFR5BQu/Main?type=design&node-id=462-39826`}}},m={name:`RowSelection`,args:{show:!0,selectedRowCount:5,onClearSelection:()=>{t(`clear selection called`)},numberOfActions:2}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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