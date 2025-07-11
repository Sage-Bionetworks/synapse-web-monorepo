import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as b}from"./Stack-CL-Uwzo-.js";import{F as o}from"./FormControlLabel-lePtt5em.js";import{C as r}from"./Checkbox-Deju3EgL.js";import{R as k}from"./RadioGroup-uiMtTKNi.js";import{R as t}from"./Radio-1mVdaPlr.js";import"./DefaultPropsProvider-TL-5ySmN.js";import"./createTheme-XMOvO1uz.js";import"./index-GRv_M5xO.js";import"./iframe-CHSey4Qy.js";import"./extendSxProp-BUjKKvW6.js";import"./getThemeProps-BBbNAS-u.js";import"./useTheme-D8ZpTE-W.js";import"./formControlState-Dq1zat_P.js";import"./useSlot-DIJeBNuE.js";import"./useForkRef-9xmpncSc.js";import"./useFormControl-CZj6mLFN.js";import"./Typography-CnygSuis.js";import"./index-BIrZvg_i.js";import"./createSimplePaletteValueFilter-CTGhusyg.js";import"./SwitchBase-B-XCGJ2o.js";import"./useControlled-BFF-TWZN.js";import"./ButtonBase-V1v9Oy7w.js";import"./useTimeout-BKm-mX-p.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-D5Yfx_2a.js";import"./mergeSlotProps-ivrbvmyg.js";import"./FormGroup-Bk65GCgc.js";import"./createChainedFunction-BO_9K8Jh.js";const q={title:"UI/Checkbox & Radio",parameters:{design:[{name:"checkbox",type:"figma",url:"https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=70-1253"},{name:"radio",type:"figma",url:"https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=132-3283&t=dVoIbwiaKO0XaSkd-4"}]}},a={name:"Checkbox",render:()=>e.jsxs(b,{children:[e.jsx(o,{control:e.jsx(r,{}),label:"uncontrolled"}),e.jsx(o,{control:e.jsx(r,{checked:!0}),label:"checked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,checked:!0}),label:"checked + disabled"}),e.jsx(o,{control:e.jsx(r,{checked:!1}),label:"unchecked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,checked:!1}),label:"disabled unchecked"}),e.jsx(o,{control:e.jsx(r,{indeterminate:!0}),label:"indeterminate"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,indeterminate:!0}),label:"disabled indeterminate"})]})},l={name:"Radio",render:()=>e.jsxs(k,{children:[e.jsx(o,{control:e.jsx(t,{checked:!0}),label:"checked"}),e.jsx(o,{control:e.jsx(t,{disabled:!0,checked:!0}),label:"checked + disabled"}),e.jsx(o,{control:e.jsx(t,{checked:!1}),label:"unchecked"}),e.jsx(o,{control:e.jsx(t,{disabled:!0,checked:!1}),label:"disabled unchecked"})]})};var c,d,n;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(s=l.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const z=["CheckboxDemo","RadioDemo"];export{a as CheckboxDemo,l as RadioDemo,z as __namedExportsOrder,q as default};
