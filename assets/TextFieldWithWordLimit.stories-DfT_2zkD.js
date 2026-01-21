import{T as l}from"./TextFieldWithWordLimit-Bw9ME6Sa.js";import"./iframe-BVXHJH4u.js";import"./index-Chi_LkuB.js";const s={title:"UI/SDS/TextFieldWithWordLimit",component:l,parameters:{design:[{type:"figma",url:"https://www.figma.com/design/jaE5E1p8qv4lZ46iqVdh7y/AD-Knowledge-Portal?node-id=2727-943&m=dev"}]},tags:["autodocs"]},e={args:{label:"Label",placeholder:"my placeholder",fullWidth:!0,required:!0,maxWords:10}},r={args:{label:"Label",placeholder:"my placeholder",fullWidth:!0,required:!0,minWords:5}},a={args:{label:"Label",placeholder:"my placeholder",fullWidth:!0,required:!0,minWords:5,maxWords:10}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'my placeholder',
    fullWidth: true,
    required: true,
    maxWords: 10
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'my placeholder',
    fullWidth: true,
    required: true,
    minWords: 5
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'my placeholder',
    fullWidth: true,
    required: true,
    minWords: 5,
    maxWords: 10
  }
}`,...a.parameters?.docs?.source}}};const i=["WithMax","WithMin","WithMaxAndMin"];export{e as WithMax,a as WithMaxAndMin,r as WithMin,i as __namedExportsOrder,s as default};
