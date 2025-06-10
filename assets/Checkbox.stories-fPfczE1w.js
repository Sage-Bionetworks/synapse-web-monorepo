import{j as e}from"./jsx-runtime-t7nzLwR6.js";import{S as b}from"./Stack-q5ZhcqOi.js";import{F as o}from"./FormControlLabel-DXnJ6IzH.js";import{C as r}from"./Checkbox-dFmgyNbd.js";import{R as k}from"./RadioGroup-Vr6ik8xV.js";import{R as a}from"./Radio-NKYYkBgX.js";import"./index-cFSMVzyl.js";import"./iframe-DKD27Aac.js";import"./DefaultPropsProvider-BUqR-A8n.js";import"./createTheme-BR5rdewz.js";import"./getThemeProps-DVXcGSou.js";import"./useTheme-CFHXXkX7.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Bw1v6BJr.js";import"./Typography-BCNKC2CY.js";import"./SwitchBase-DJ_x4Gtg.js";import"./useControlled-Bndl0fHX.js";import"./ButtonBase-DAHKIKHs.js";import"./useTimeout-Bc3Gkepm.js";import"./TransitionGroupContext-CKv4C-Ss.js";import"./useForkRef-BNzkLrh_.js";import"./useIsFocusVisible-D0xbJsl_.js";import"./useEventCallback-C85vUDBQ.js";import"./createSvgIcon-CopB8Zvr.js";import"./useId-C8qhAs8K.js";import"./FormGroup-DZJGTCUA.js";import"./createChainedFunction-BO_9K8Jh.js";const K={title:"UI/Checkbox & Radio",parameters:{design:[{name:"checkbox",type:"figma",url:"https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=70-1253"},{name:"radio",type:"figma",url:"https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=132-3283&t=dVoIbwiaKO0XaSkd-4"}]}},l={name:"Checkbox",render:()=>e.jsxs(b,{children:[e.jsx(o,{control:e.jsx(r,{}),label:"uncontrolled"}),e.jsx(o,{control:e.jsx(r,{checked:!0}),label:"checked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,checked:!0}),label:"checked + disabled"}),e.jsx(o,{control:e.jsx(r,{checked:!1}),label:"unchecked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,checked:!1}),label:"disabled unchecked"}),e.jsx(o,{control:e.jsx(r,{indeterminate:!0}),label:"indeterminate"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,indeterminate:!0}),label:"disabled indeterminate"})]})},t={name:"Radio",render:()=>e.jsxs(k,{children:[e.jsx(o,{control:e.jsx(a,{checked:!0}),label:"checked"}),e.jsx(o,{control:e.jsx(a,{disabled:!0,checked:!0}),label:"checked + disabled"}),e.jsx(o,{control:e.jsx(a,{checked:!1}),label:"unchecked"}),e.jsx(o,{control:e.jsx(a,{disabled:!0,checked:!1}),label:"disabled unchecked"})]})};var c,d,n;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
