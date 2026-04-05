import{dl as a,j as e,ak as p,j5 as c}from"./iframe-b13k1F7I.js";import{D as d}from"./DateTimePicker-BoJdzwlO.js";import"./index-Chi_LkuB.js";import"./useMobilePicker-Rjz4jJMP.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DEYxwdGc.js";import"./index-BnGRXv6y.js";import"./ListItem-DzDRJtuQ.js";import"./listItemButtonClasses-buvqHCdw.js";import"./Chip-DjWJ18GV.js";import"./Tabs-CEXGJ2q4.js";import"./KeyboardArrowRight-CrQMuxYY.js";import"./MenuItem-DH1v1_Sf.js";const k={title:"UI/DateTimePicker",component:d,tags:["autodocs"]};function s(r){const{children:i,utcTimeOverride:n}=r,m=p();return e.jsx(c,{synapseContext:{...m,utcTime:n},children:i})}const o={decorators:[r=>e.jsx(s,{utcTimeOverride:!1,children:e.jsx(r,{})})],args:{value:a("2023-01-01T00:00:00")}},t={decorators:[r=>e.jsx(s,{utcTimeOverride:!0,children:e.jsx(r,{})})],args:{value:a("2023-01-01T00:00:00")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const D=["Local","UTC"];export{o as Local,t as UTC,D as __namedExportsOrder,k as default};
