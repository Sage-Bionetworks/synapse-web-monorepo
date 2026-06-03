import{n as e}from"./chunk-jRWAZmH_.js";import{Dp as t,En as n,Kb as r,Tn as i,dd as a,qS as o,qv as s,su as c,up as l}from"./iframe-CyPEVg0t.js";import{n as u,t as d}from"./RowSelectionUI-ltDMqFkK.js";var f,p,m,h;e((()=>{n(),c(),u(),s(),l(),f=o(),p={title:`Explore/RowSelection`,argTypes:{numberOfActions:{type:`number`,description:`The number of actions to display`}},render:e=>{let{numberOfActions:n=0,...o}=e;return(0,f.jsx)(d,{...o,customControls:(0,f.jsx)(f.Fragment,{children:t(n,e=>(0,f.jsxs)(r,{variant:e===n-1?`contained`:`outlined`,color:e%3==3?`secondary`:`primary`,startIcon:(0,f.jsx)(a,{}),onClick:()=>i(`clicked action ${e}`),children:[`Action `,e]}))})})},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/3l3RjDnKnv8jms2XFR5BQu/Main?type=design&node-id=462-39826`}}},m={name:`RowSelection`,args:{show:!0,selectedRowCount:5,onClearSelection:()=>{i(`clear selection called`)},numberOfActions:2}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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