import{dI as a,j as e,ao as p,jg as c}from"./iframe-C1Apx41K.js";import{D as d}from"./DateTimePicker--_gCpXZq.js";import"./index-Chi_LkuB.js";import"./useMobilePicker-BqI6h1RE.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-yDiyBt_p.js";import"./index-BNzSHHEP.js";import"./ListItem-p1vUKAzn.js";import"./listItemButtonClasses-8X19HTZJ.js";import"./Chip-S_uffPL4.js";import"./Tabs-C2QNzdql.js";import"./KeyboardArrowRight-CkN-H_98.js";import"./MenuItem-CghTk7HR.js";const D={title:"UI/DateTimePicker",component:d,tags:["autodocs"]};function s(r){const{children:i,utcTimeOverride:n}=r,m=p();return e.jsx(c,{synapseContext:{...m,utcTime:n},children:i})}const o={decorators:[r=>e.jsx(s,{utcTimeOverride:!1,children:e.jsx(r,{})})],args:{value:a("2023-01-01T00:00:00")}},t={decorators:[r=>e.jsx(s,{utcTimeOverride:!0,children:e.jsx(r,{})})],args:{value:a("2023-01-01T00:00:00")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
