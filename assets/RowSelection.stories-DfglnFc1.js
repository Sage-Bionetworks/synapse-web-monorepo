import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-CR4qI0Ep.js";import{_t as n,t as r}from"./esm-s2mEZK13.js";import{t as i,x as a}from"./lodash-BaDgl1So.js";import{Kt as o,t as s}from"./esm-CapvDp-v.js";import{i as c,r as l}from"./ToastMessage-D-XhstTd.js";import{n as u,t as d}from"./RowSelectionUI-MbXkD_j9.js";var f,p,m,h;e((()=>{c(),s(),u(),r(),i(),f=t(),p={title:`Explore/RowSelection`,argTypes:{numberOfActions:{type:`number`,description:`The number of actions to display`}},render:e=>{let{numberOfActions:t=0,...r}=e;return(0,f.jsx)(d,{...r,customControls:(0,f.jsx)(f.Fragment,{children:a(t,e=>(0,f.jsxs)(n,{variant:e===t-1?`contained`:`outlined`,color:e%3==3?`secondary`:`primary`,startIcon:(0,f.jsx)(o,{}),onClick:()=>l(`clicked action ${e}`),children:[`Action `,e]}))})})},parameters:{design:{type:`figma`,url:`https://www.figma.com/file/3l3RjDnKnv8jms2XFR5BQu/Main?type=design&node-id=462-39826`}}},m={name:`RowSelection`,args:{show:!0,selectedRowCount:5,onClearSelection:()=>{l(`clear selection called`)},numberOfActions:2}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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