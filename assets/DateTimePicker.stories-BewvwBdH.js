import{dG as a,j as e,an as p,jd as c}from"./iframe-Pdm4gHko.js";import{D as d}from"./DateTimePicker-BNqO7hj1.js";import"./index-Chi_LkuB.js";import"./useMobilePicker-xl2HQYqi.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-CY6iHKEJ.js";import"./index-DFJ7Q3Tb.js";import"./ListItem-CaARSvW0.js";import"./listItemButtonClasses-mwEcVMPS.js";import"./Chip-D7Y4i0b0.js";import"./Tabs-CkvR7jS-.js";import"./KeyboardArrowRight-DJ5-WBvT.js";import"./MenuItem-D1_ZdkN0.js";const D={title:"UI/DateTimePicker",component:d,tags:["autodocs"]};function s(r){const{children:i,utcTimeOverride:n}=r,m=p();return e.jsx(c,{synapseContext:{...m,utcTime:n},children:i})}const o={decorators:[r=>e.jsx(s,{utcTimeOverride:!1,children:e.jsx(r,{})})],args:{value:a("2023-01-01T00:00:00")}},t={decorators:[r=>e.jsx(s,{utcTimeOverride:!0,children:e.jsx(r,{})})],args:{value:a("2023-01-01T00:00:00")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
