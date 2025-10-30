import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as b}from"./Stack-DUv6l47M.js";import{F as o}from"./FormControlLabel-xTKYVFTr.js";import{C as r}from"./Checkbox-Bh4NpFPh.js";import{R as k}from"./RadioGroup-DK_RyPNx.js";import{R as t}from"./Radio-DATl1ljG.js";import"./DefaultPropsProvider-C8agOKNV.js";import"./createTheme-XmTP9ztr.js";import"./index-C0wX4_D5.js";import"./iframe-Dg1OjomY.js";import"./useThemeProps-B1LQGkAl.js";import"./getThemeProps-kFzncbx6.js";import"./useTheme-Ct2y6sLT.js";import"./extendSxProp-B4wy7T2i.js";import"./formControlState-Dq1zat_P.js";import"./useSlot-CMw1Guot.js";import"./useForkRef-DHDj_EBp.js";import"./useFormControl-B3QAb1Jy.js";import"./Typography-z9eLrlT0.js";import"./index-BCjqeLgG.js";import"./createSimplePaletteValueFilter-CMeensCQ.js";import"./SwitchBase-D2AGQkgK.js";import"./useControlled-DeciPQCg.js";import"./ButtonBase-BZaAYyhz.js";import"./useTimeout-VgJ8KSEC.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-C1R5uYZR.js";import"./mergeSlotProps-Du0sMu5_.js";import"./FormGroup-BJcZ7LqM.js";import"./createChainedFunction-BO_9K8Jh.js";const z={title:"UI/Checkbox & Radio",parameters:{design:[{name:"checkbox",type:"figma",url:"https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=70-1253"},{name:"radio",type:"figma",url:"https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=132-3283&t=dVoIbwiaKO0XaSkd-4"}]}},a={name:"Checkbox",render:()=>e.jsxs(b,{children:[e.jsx(o,{control:e.jsx(r,{}),label:"uncontrolled"}),e.jsx(o,{control:e.jsx(r,{checked:!0}),label:"checked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,checked:!0}),label:"checked + disabled"}),e.jsx(o,{control:e.jsx(r,{checked:!1}),label:"unchecked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,checked:!1}),label:"disabled unchecked"}),e.jsx(o,{control:e.jsx(r,{indeterminate:!0}),label:"indeterminate"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,indeterminate:!0}),label:"disabled indeterminate"})]})},l={name:"Radio",render:()=>e.jsxs(k,{children:[e.jsx(o,{control:e.jsx(t,{checked:!0}),label:"checked"}),e.jsx(o,{control:e.jsx(t,{disabled:!0,checked:!0}),label:"checked + disabled"}),e.jsx(o,{control:e.jsx(t,{checked:!1}),label:"unchecked"}),e.jsx(o,{control:e.jsx(t,{disabled:!0,checked:!1}),label:"disabled unchecked"})]})};var c,d,n;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Checkbox',
  render: () => {
    return <Stack>
        <FormControlLabel control={<Checkbox />} label={'uncontrolled'} />
        <FormControlLabel control={<Checkbox checked />} label={'checked'} />
        <FormControlLabel control={<Checkbox disabled={true} checked />} label={'checked + disabled'} />
        <FormControlLabel control={<Checkbox checked={false} />} label={'unchecked'} />
        <FormControlLabel control={<Checkbox disabled={true} checked={false} />} label={'disabled unchecked'} />
        <FormControlLabel control={<Checkbox indeterminate />} label={'indeterminate'} />
        <FormControlLabel control={<Checkbox disabled={true} indeterminate />} label={'disabled indeterminate'} />
      </Stack>;
  }
}`,...(n=(d=a.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var i,s,m;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Radio',
  render: () => {
    return <RadioGroup>
        <FormControlLabel control={<Radio checked />} label={'checked'} />
        <FormControlLabel control={<Radio disabled={true} checked />} label={'checked + disabled'} />
        <FormControlLabel control={<Radio checked={false} />} label={'unchecked'} />
        <FormControlLabel control={<Radio disabled={true} checked={false} />} label={'disabled unchecked'} />
      </RadioGroup>;
  }
}`,...(m=(s=l.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const B=["CheckboxDemo","RadioDemo"];export{a as CheckboxDemo,l as RadioDemo,B as __namedExportsOrder,z as default};
