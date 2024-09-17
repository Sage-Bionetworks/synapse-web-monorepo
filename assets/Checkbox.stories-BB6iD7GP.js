import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{S as b}from"./Stack-ERnuki-b.js";import{F as o}from"./FormControlLabel-Ceo3GfFJ.js";import{C as r}from"./Checkbox-De6Bx9_m.js";import{R as k}from"./RadioGroup-1EmPIqNl.js";import{R as a}from"./Radio-BsbSlyDe.js";import"./index-Cu9bd8lq.js";import"./styled-D9q5EqxT.js";import"./createTheme-BJ_1npSs.js";import"./index-GEGPABih.js";import"./useFormControl-vG3XTiAH.js";import"./ButtonBase-BH4d2aSg.js";import"./TransitionGroupContext-C4KIfRep.js";import"./useForkRef-Bm_QQ74L.js";import"./useIsFocusVisible-Lp1_y5xp.js";import"./useControlled-JEQ1v-P8.js";import"./Typography-BmBIKDjf.js";import"./createSvgIcon-WkAWHJz7.js";import"./useId-g68bhPgm.js";import"./FormGroup-DrbvCU_x.js";import"./createChainedFunction-BO_9K8Jh.js";const I={title:"UI/Checkbox & Radio",parameters:{design:[{name:"checkbox",type:"figma",url:"https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=70-1253"},{name:"radio",type:"figma",url:"https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=132-3283&t=dVoIbwiaKO0XaSkd-4"}]}},l={name:"Checkbox",render:()=>e.jsxs(b,{children:[e.jsx(o,{control:e.jsx(r,{}),label:"uncontrolled"}),e.jsx(o,{control:e.jsx(r,{checked:!0}),label:"checked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,checked:!0}),label:"checked + disabled"}),e.jsx(o,{control:e.jsx(r,{checked:!1}),label:"unchecked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,checked:!1}),label:"disabled unchecked"}),e.jsx(o,{control:e.jsx(r,{indeterminate:!0}),label:"indeterminate"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,indeterminate:!0}),label:"disabled indeterminate"})]})},t={name:"Radio",render:()=>e.jsxs(k,{children:[e.jsx(o,{control:e.jsx(a,{checked:!0}),label:"checked"}),e.jsx(o,{control:e.jsx(a,{disabled:!0,checked:!0}),label:"checked + disabled"}),e.jsx(o,{control:e.jsx(a,{checked:!1}),label:"unchecked"}),e.jsx(o,{control:e.jsx(a,{disabled:!0,checked:!1}),label:"disabled unchecked"})]})};var c,d,n;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(n=(d=l.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var s,i,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Radio',
  render: () => {
    return <RadioGroup>
        <FormControlLabel control={<Radio checked />} label={'checked'} />
        <FormControlLabel control={<Radio disabled={true} checked />} label={'checked + disabled'} />
        <FormControlLabel control={<Radio checked={false} />} label={'unchecked'} />
        <FormControlLabel control={<Radio disabled={true} checked={false} />} label={'disabled unchecked'} />
      </RadioGroup>;
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const M=["CheckboxDemo","RadioDemo"];export{l as CheckboxDemo,t as RadioDemo,M as __namedExportsOrder,I as default};
