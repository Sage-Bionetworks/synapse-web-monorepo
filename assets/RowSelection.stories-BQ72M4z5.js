import{n as e}from"./chunk-jRWAZmH_.js";import{Cn as t,Dp as n,Gv as r,Ub as i,WS as a,dd as o,su as s,up as c,wn as l}from"./iframe-Cc_1Im-O.js";import{n as u,t as d}from"./RowSelectionUI-DXyulnvN.js";var f,p,m,h;e((()=>{l(),s(),u(),r(),c(),f=a(),p={title:`Explore/RowSelection`,argTypes:{numberOfActions:{type:`number`,description:`The number of actions to display`}},render:e=>{let{numberOfActions:r=0,...a}=e;return(0,f.jsx)(d,{...a,customControls:(0,f.jsx)(f.Fragment,{children:n(r,e=>(0,f.jsxs)(i,{variant:e===r-1?`contained`:`outlined`,color:e%3==3?`secondary`:`primary`,startIcon:(0,f.jsx)(o,{}),onClick:()=>t(`clicked action ${e}`),children:[`Action `,e]}))})})},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/3l3RjDnKnv8jms2XFR5BQu/Main?type=design&node-id=462-39826`}}},m={name:`RowSelection`,args:{show:!0,selectedRowCount:5,onClearSelection:()=>{t(`clear selection called`)},numberOfActions:2}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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