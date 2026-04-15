import{dl as a,j as e,ak as p,j5 as c}from"./iframe-C9UTN7n5.js";import{D as d}from"./DateTimePicker-CATq1dLa.js";import"./index-Chi_LkuB.js";import"./useMobilePicker-CPRaeE6n.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BgHugj3i.js";import"./index-C0fxb07w.js";import"./ListItem-BV4Jjguv.js";import"./listItemButtonClasses-Dh3m0zIa.js";import"./Chip-kWAD_96F.js";import"./Tabs-CYVUwAu5.js";import"./KeyboardArrowRight-CFDP3z_9.js";import"./MenuItem-CX39S6wD.js";const k={title:"UI/DateTimePicker",component:d,tags:["autodocs"]};function s(r){const{children:i,utcTimeOverride:n}=r,m=p();return e.jsx(c,{synapseContext:{...m,utcTime:n},children:i})}const o={decorators:[r=>e.jsx(s,{utcTimeOverride:!1,children:e.jsx(r,{})})],args:{value:a("2023-01-01T00:00:00")}},t={decorators:[r=>e.jsx(s,{utcTimeOverride:!0,children:e.jsx(r,{})})],args:{value:a("2023-01-01T00:00:00")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
