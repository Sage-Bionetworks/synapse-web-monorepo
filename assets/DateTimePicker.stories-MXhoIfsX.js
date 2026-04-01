import{du as a,j as e,al as p,j6 as c}from"./iframe-2O6u4SzH.js";import{D as d}from"./DateTimePicker-DAYD6n4u.js";import"./index-Chi_LkuB.js";import"./useMobilePicker-CZD9NtMC.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-6o2Du6WR.js";import"./index-D8WZJQs0.js";import"./ListItem-CoEHE71A.js";import"./listItemButtonClasses-YQAYCKJ1.js";import"./Chip-Dc7Q2EIH.js";import"./Tabs-XMzB4nZ2.js";import"./KeyboardArrowRight-DWJaxETJ.js";import"./MenuItem-C5eSP5TX.js";const D={title:"UI/DateTimePicker",component:d,tags:["autodocs"]};function s(r){const{children:i,utcTimeOverride:n}=r,m=p();return e.jsx(c,{synapseContext:{...m,utcTime:n},children:i})}const o={decorators:[r=>e.jsx(s,{utcTimeOverride:!1,children:e.jsx(r,{})})],args:{value:a("2023-01-01T00:00:00")}},t={decorators:[r=>e.jsx(s,{utcTimeOverride:!0,children:e.jsx(r,{})})],args:{value:a("2023-01-01T00:00:00")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <TimezoneConfigOverrideWrapper utcTimeOverride={false}>
        <Story />
      </TimezoneConfigOverrideWrapper>],
  args: {
    value: dayjs('2023-01-01T00:00:00')
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <TimezoneConfigOverrideWrapper utcTimeOverride={true}>
        <Story />
      </TimezoneConfigOverrideWrapper>],
  args: {
    value: dayjs('2023-01-01T00:00:00')
  }
}`,...t.parameters?.docs?.source}}};const P=["Local","UTC"];export{o as Local,t as UTC,P as __namedExportsOrder,D as default};
