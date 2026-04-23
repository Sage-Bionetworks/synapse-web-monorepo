import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./jsx-runtime-CR4qI0Ep.js";import{t as r}from"./dayjs.min-CPZ64RI7.js";import{Cr as i}from"./useLogin-Cbh1wzaf.js";import{a,r as o}from"./SynapseContext-B9M5CU_4.js";import{n as s,t as c}from"./DateTimePicker-Bsgpudh0.js";function l(e){let{children:t,utcTimeOverride:n}=e;return(0,d.jsx)(o,{synapseContext:{...a(),utcTime:n},children:t})}var u,d,f,p,m,h;e((()=>{i(),u=t(r(),1),s(),d=n(),f={title:`UI/DateTimePicker`,component:c,tags:[`autodocs`]},p={decorators:[e=>(0,d.jsx)(l,{utcTimeOverride:!1,children:(0,d.jsx)(e,{})})],args:{value:(0,u.default)(`2023-01-01T00:00:00`)}},m={decorators:[e=>(0,d.jsx)(l,{utcTimeOverride:!0,children:(0,d.jsx)(e,{})})],args:{value:(0,u.default)(`2023-01-01T00:00:00`)}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <TimezoneConfigOverrideWrapper utcTimeOverride={false}>
        <Story />
      </TimezoneConfigOverrideWrapper>],
  args: {
    value: dayjs('2023-01-01T00:00:00')
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <TimezoneConfigOverrideWrapper utcTimeOverride={true}>
        <Story />
      </TimezoneConfigOverrideWrapper>],
  args: {
    value: dayjs('2023-01-01T00:00:00')
  }
}`,...m.parameters?.docs?.source}}},h=[`Local`,`UTC`]}))();export{p as Local,m as UTC,h as __namedExportsOrder,f as default};