import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{S as b}from"./Stack-BRvuPf6D.js";import{F as o}from"./FormControlLabel-DgRTZiDC.js";import{C as r}from"./Checkbox-3lY1RI3r.js";import{R as k}from"./RadioGroup-DoqBFkVV.js";import{R as a}from"./Radio-Bd46EQAO.js";import"./index-Cu9bd8lq.js";import"./styled-DuixqW8V.js";import"./createTheme-BDTvfUpa.js";import"./index-GEGPABih.js";import"./extends-CF3RwP-h.js";import"./useFormControl-vG3XTiAH.js";import"./ButtonBase-CIP26XmV.js";import"./TransitionGroupContext-C4KIfRep.js";import"./useForkRef-Bm_QQ74L.js";import"./useIsFocusVisible-Lp1_y5xp.js";import"./useControlled-JEQ1v-P8.js";import"./Typography-Jzf0ov00.js";import"./createSvgIcon-L3-Z4vl2.js";import"./useId-g68bhPgm.js";import"./FormGroup-Dmpm2a0P.js";import"./createChainedFunction-BO_9K8Jh.js";const M={title:"UI/Checkbox & Radio",parameters:{design:[{name:"checkbox",type:"figma",url:"https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=70-1253"},{name:"radio",type:"figma",url:"https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=132-3283&t=dVoIbwiaKO0XaSkd-4"}]}},l={name:"Checkbox",render:()=>e.jsxs(b,{children:[e.jsx(o,{control:e.jsx(r,{}),label:"uncontrolled"}),e.jsx(o,{control:e.jsx(r,{checked:!0}),label:"checked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,checked:!0}),label:"checked + disabled"}),e.jsx(o,{control:e.jsx(r,{checked:!1}),label:"unchecked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,checked:!1}),label:"disabled unchecked"}),e.jsx(o,{control:e.jsx(r,{indeterminate:!0}),label:"indeterminate"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,indeterminate:!0}),label:"disabled indeterminate"})]})},t={name:"Radio",render:()=>e.jsxs(k,{children:[e.jsx(o,{control:e.jsx(a,{checked:!0}),label:"checked"}),e.jsx(o,{control:e.jsx(a,{disabled:!0,checked:!0}),label:"checked + disabled"}),e.jsx(o,{control:e.jsx(a,{checked:!1}),label:"unchecked"}),e.jsx(o,{control:e.jsx(a,{disabled:!0,checked:!1}),label:"disabled unchecked"})]})};var c,d,n;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(n=(d=l.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var i,s,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Radio',
  render: () => {
    return <RadioGroup>
        <FormControlLabel control={<Radio checked />} label={'checked'} />
        <FormControlLabel control={<Radio disabled={true} checked />} label={'checked + disabled'} />
        <FormControlLabel control={<Radio checked={false} />} label={'unchecked'} />
        <FormControlLabel control={<Radio disabled={true} checked={false} />} label={'disabled unchecked'} />
      </RadioGroup>;
  }
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const N=["CheckboxDemo","RadioDemo"];export{l as CheckboxDemo,t as RadioDemo,N as __namedExportsOrder,M as default};
