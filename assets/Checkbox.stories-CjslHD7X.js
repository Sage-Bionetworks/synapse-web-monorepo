import{j as e}from"./jsx-runtime-CZmUC0kc.js";import{S as b}from"./Stack-s10dd2v_.js";import{F as o}from"./FormControlLabel-Bf8z5W8E.js";import{C as r}from"./Checkbox-DRIa-Uyp.js";import{R as k}from"./RadioGroup-B7x7JRTC.js";import{R as a}from"./Radio-BEcqEy-h.js";import"./index-D48dKAGK.js";import"./iframe-DXxs8wzV.js";import"./DefaultPropsProvider-DnsYkYhu.js";import"./createTheme-DdUHwKDu.js";import"./getThemeProps-DpFYsVdH.js";import"./useTheme-Cdkd9-zl.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BJVTKRLi.js";import"./Typography-CDDEj6bd.js";import"./SwitchBase-OgGZNchr.js";import"./useControlled-DZ97s39z.js";import"./ButtonBase-DijL8LGZ.js";import"./useTimeout-CfJSgBAN.js";import"./TransitionGroupContext-xk93-I-l.js";import"./useForkRef-B4VymO4y.js";import"./useIsFocusVisible-pZRnHMmE.js";import"./useEventCallback-CfXeTH2v.js";import"./createSvgIcon-CGfU68f8.js";import"./useId-Buvf4Xiv.js";import"./FormGroup-BPwInIWX.js";import"./createChainedFunction-BO_9K8Jh.js";const K={title:"UI/Checkbox & Radio",parameters:{design:[{name:"checkbox",type:"figma",url:"https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=70-1253"},{name:"radio",type:"figma",url:"https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=132-3283&t=dVoIbwiaKO0XaSkd-4"}]}},l={name:"Checkbox",render:()=>e.jsxs(b,{children:[e.jsx(o,{control:e.jsx(r,{}),label:"uncontrolled"}),e.jsx(o,{control:e.jsx(r,{checked:!0}),label:"checked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,checked:!0}),label:"checked + disabled"}),e.jsx(o,{control:e.jsx(r,{checked:!1}),label:"unchecked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,checked:!1}),label:"disabled unchecked"}),e.jsx(o,{control:e.jsx(r,{indeterminate:!0}),label:"indeterminate"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,indeterminate:!0}),label:"disabled indeterminate"})]})},t={name:"Radio",render:()=>e.jsxs(k,{children:[e.jsx(o,{control:e.jsx(a,{checked:!0}),label:"checked"}),e.jsx(o,{control:e.jsx(a,{disabled:!0,checked:!0}),label:"checked + disabled"}),e.jsx(o,{control:e.jsx(a,{checked:!1}),label:"unchecked"}),e.jsx(o,{control:e.jsx(a,{disabled:!0,checked:!1}),label:"disabled unchecked"})]})};var c,d,n;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const X=["CheckboxDemo","RadioDemo"];export{l as CheckboxDemo,t as RadioDemo,X as __namedExportsOrder,K as default};
