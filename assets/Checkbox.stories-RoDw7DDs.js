import{n as e}from"./chunk-jRWAZmH_.js";import{HS as t,Pb as n,Sy as r,Uv as i,by as a,fb as o,sy as s}from"./iframe-DsTrbw8G.js";var c,l,u,d,f;e((()=>{i(),c=t(),l={title:`UI/Checkbox & Radio`,parameters:{design:[{name:`checkbox`,type:`figma`,url:`https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=70-1253`},{name:`radio`,type:`figma`,url:`https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=132-3283&t=dVoIbwiaKO0XaSkd-4`}]}},u={name:`Checkbox`,render:()=>(0,c.jsxs)(s,{children:[(0,c.jsx)(o,{control:(0,c.jsx)(n,{}),label:`uncontrolled`}),(0,c.jsx)(o,{control:(0,c.jsx)(n,{checked:!0}),label:`checked`}),(0,c.jsx)(o,{control:(0,c.jsx)(n,{disabled:!0,checked:!0}),label:`checked + disabled`}),(0,c.jsx)(o,{control:(0,c.jsx)(n,{checked:!1}),label:`unchecked`}),(0,c.jsx)(o,{control:(0,c.jsx)(n,{disabled:!0,checked:!1}),label:`disabled unchecked`}),(0,c.jsx)(o,{control:(0,c.jsx)(n,{indeterminate:!0}),label:`indeterminate`}),(0,c.jsx)(o,{control:(0,c.jsx)(n,{disabled:!0,indeterminate:!0}),label:`disabled indeterminate`})]})},d={name:`Radio`,render:()=>(0,c.jsxs)(a,{children:[(0,c.jsx)(o,{control:(0,c.jsx)(r,{checked:!0}),label:`checked`}),(0,c.jsx)(o,{control:(0,c.jsx)(r,{disabled:!0,checked:!0}),label:`checked + disabled`}),(0,c.jsx)(o,{control:(0,c.jsx)(r,{checked:!1}),label:`unchecked`}),(0,c.jsx)(o,{control:(0,c.jsx)(r,{disabled:!0,checked:!1}),label:`disabled unchecked`})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Radio',
  render: () => {
    return <RadioGroup>
        <FormControlLabel control={<Radio checked />} label={'checked'} />
        <FormControlLabel control={<Radio disabled={true} checked />} label={'checked + disabled'} />
        <FormControlLabel control={<Radio checked={false} />} label={'unchecked'} />
        <FormControlLabel control={<Radio disabled={true} checked={false} />} label={'disabled unchecked'} />
      </RadioGroup>;
  }
}`,...d.parameters?.docs?.source}}},f=[`CheckboxDemo`,`RadioDemo`]}))();export{u as CheckboxDemo,d as RadioDemo,f as __namedExportsOrder,l as default};