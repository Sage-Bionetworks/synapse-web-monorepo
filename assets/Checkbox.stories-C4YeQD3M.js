import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as b}from"./Stack-C33LiS6n.js";import{F as o}from"./FormControlLabel-e-8U1FLn.js";import{C as r}from"./Checkbox-Bi2OushC.js";import{R as k}from"./RadioGroup-nsW_ePfZ.js";import{R as t}from"./Radio-CRcn8ey3.js";import"./DefaultPropsProvider-BIDG4pXJ.js";import"./createTheme-_ssnMRbb.js";import"./index-C2ak8tr3.js";import"./iframe-CW0KqQYK.js";import"./extendSxProp-PxJDRmPe.js";import"./getThemeProps-a4OQxquJ.js";import"./useTheme-Dvg9yXlH.js";import"./formControlState-Dq1zat_P.js";import"./useSlot-Bq9ivddw.js";import"./useForkRef-Z2Y-bELM.js";import"./useFormControl-C0tIEcl5.js";import"./Typography-Dr6RcEbm.js";import"./index-k4a5S4FR.js";import"./createSimplePaletteValueFilter-pNOTYgat.js";import"./SwitchBase-CU9xpVil.js";import"./useControlled-Dzw8XpFp.js";import"./ButtonBase-M_04j4ij.js";import"./useTimeout-BN7atgB-.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-92Jf5xwN.js";import"./mergeSlotProps-BCD2xpIr.js";import"./FormGroup-BcVxjpOx.js";import"./createChainedFunction-BO_9K8Jh.js";const q={title:"UI/Checkbox & Radio",parameters:{design:[{name:"checkbox",type:"figma",url:"https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=70-1253"},{name:"radio",type:"figma",url:"https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=132-3283&t=dVoIbwiaKO0XaSkd-4"}]}},a={name:"Checkbox",render:()=>e.jsxs(b,{children:[e.jsx(o,{control:e.jsx(r,{}),label:"uncontrolled"}),e.jsx(o,{control:e.jsx(r,{checked:!0}),label:"checked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,checked:!0}),label:"checked + disabled"}),e.jsx(o,{control:e.jsx(r,{checked:!1}),label:"unchecked"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,checked:!1}),label:"disabled unchecked"}),e.jsx(o,{control:e.jsx(r,{indeterminate:!0}),label:"indeterminate"}),e.jsx(o,{control:e.jsx(r,{disabled:!0,indeterminate:!0}),label:"disabled indeterminate"})]})},l={name:"Radio",render:()=>e.jsxs(k,{children:[e.jsx(o,{control:e.jsx(t,{checked:!0}),label:"checked"}),e.jsx(o,{control:e.jsx(t,{disabled:!0,checked:!0}),label:"checked + disabled"}),e.jsx(o,{control:e.jsx(t,{checked:!1}),label:"unchecked"}),e.jsx(o,{control:e.jsx(t,{disabled:!0,checked:!1}),label:"disabled unchecked"})]})};var c,d,n;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
