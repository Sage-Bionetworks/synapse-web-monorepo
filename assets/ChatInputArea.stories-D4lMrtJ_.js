import{o as e,u as t}from"./preload-helper-CsHsquCd.js";import{t as n}from"./react-BXiJfEW5.js";import{t as r}from"./jsx-runtime-l3w3GfrB.js";import{n as i,t as a}from"./ChatInputArea-BE8ykVpw.js";var o,s,c,l,u,d,f,p;e((()=>{o=t(n(),1),i(),s=r(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Synapse/Chat/ChatInputArea`,component:a,args:{onValueChange:c(),onSend:c(),placeholder:`Message SynapseChat`},render:function(e){let[t,n]=(0,o.useState)(e.value);return(0,s.jsx)(a,{...e,value:t,onValueChange:t=>{n(t),e.onValueChange(t)}})}},u={args:{value:``}},d={args:{value:`What files are attached to this project?`}},f={args:{value:`Waiting for a session...`,disabled:!0}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: ''
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'What files are attached to this project?'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Waiting for a session...',
    disabled: true
  }
}`,...f.parameters?.docs?.source}}},p=[`Empty`,`Typed`,`Disabled`]}))();export{f as Disabled,u as Empty,d as Typed,p as __namedExportsOrder,l as default};