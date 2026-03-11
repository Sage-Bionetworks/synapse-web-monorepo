import{dv as a,j as e,an as p,j7 as c}from"./iframe-BFOdDDU9.js";import{D as d}from"./DateTimePicker-BfNjNo2Z.js";import"./index-Chi_LkuB.js";import"./useMobilePicker-DvdQMuBj.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-Cn7M2egv.js";import"./index-DDJJe_s9.js";import"./ListItem-CYmW793j.js";import"./listItemButtonClasses-ByFlDGo4.js";import"./Chip-D2x9BPaK.js";import"./Tabs-UO7EtSpl.js";import"./KeyboardArrowRight-D74rIE2H.js";import"./MenuItem-PnDY4AEM.js";const D={title:"UI/DateTimePicker",component:d,tags:["autodocs"]};function s(r){const{children:i,utcTimeOverride:n}=r,m=p();return e.jsx(c,{synapseContext:{...m,utcTime:n},children:i})}const o={decorators:[r=>e.jsx(s,{utcTimeOverride:!1,children:e.jsx(r,{})})],args:{value:a("2023-01-01T00:00:00")}},t={decorators:[r=>e.jsx(s,{utcTimeOverride:!0,children:e.jsx(r,{})})],args:{value:a("2023-01-01T00:00:00")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
