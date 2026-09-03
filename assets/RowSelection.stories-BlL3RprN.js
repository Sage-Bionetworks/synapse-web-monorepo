import{o as e}from"./preload-helper-CsHsquCd.js";import{t}from"./jsx-runtime-l3w3GfrB.js";import{t as n,yn as r}from"./esm-BSTH_Qsy.js";import{T as i,t as a}from"./lodash-5EZjp2uK.js";import{Bi as o,t as s}from"./esm-C7nQhXEz.js";import{i as c,r as l}from"./ToastMessage-BZdFB-U-.js";import{n as u,t as d}from"./RowSelectionUI-Evnlz7Rt.js";var f,p,m,h;e((()=>{c(),s(),u(),n(),a(),f=t(),p={title:`Explore/RowSelection`,argTypes:{numberOfActions:{type:`number`,description:`The number of actions to display`}},render:e=>{let{numberOfActions:t=0,...n}=e;return(0,f.jsx)(d,{...n,customControls:(0,f.jsx)(f.Fragment,{children:i(t,e=>(0,f.jsxs)(r,{variant:e===t-1?`contained`:`outlined`,color:e%3==3?`secondary`:`primary`,startIcon:(0,f.jsx)(o,{}),onClick:()=>l(`clicked action ${e}`),children:[`Action `,e]}))})})},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/3l3RjDnKnv8jms2XFR5BQu/Main?type=design&node-id=462-39826`}}},m={name:`RowSelection`,args:{show:!0,selectedRowCount:5,onClearSelection:()=>{l(`clear selection called`)},numberOfActions:2}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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