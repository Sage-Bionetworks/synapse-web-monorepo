import{n as e}from"./chunk-jRWAZmH_.js";import{Cn as t,Ep as n,Ub as r,WS as i,Wv as a,lp as o,ou as s,ud as c,wn as l}from"./iframe-tFiJfl5m.js";import{n as u,t as d}from"./RowSelectionUI-vu7fkMvr.js";var f,p,m,h;e((()=>{l(),s(),u(),a(),o(),f=i(),p={title:`Explore/RowSelection`,argTypes:{numberOfActions:{type:`number`,description:`The number of actions to display`}},render:e=>{let{numberOfActions:i=0,...a}=e;return(0,f.jsx)(d,{...a,customControls:(0,f.jsx)(f.Fragment,{children:n(i,e=>(0,f.jsxs)(r,{variant:e===i-1?`contained`:`outlined`,color:e%3==3?`secondary`:`primary`,startIcon:(0,f.jsx)(c,{}),onClick:()=>t(`clicked action ${e}`),children:[`Action `,e]}))})})},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/3l3RjDnKnv8jms2XFR5BQu/Main?type=design&node-id=462-39826`}}},m={name:`RowSelection`,args:{show:!0,selectedRowCount:5,onClearSelection:()=>{t(`clear selection called`)},numberOfActions:2}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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