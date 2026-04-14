import{dl as a,j as e,ak as p,j5 as c}from"./iframe-xuGDYskk.js";import{D as d}from"./DateTimePicker--NBZ33dL.js";import"./index-Chi_LkuB.js";import"./useMobilePicker-Bya3Gpvs.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-D4HCwoEr.js";import"./index-D8fOn0Se.js";import"./ListItem-wbeJVpNQ.js";import"./listItemButtonClasses-DhUDG0R8.js";import"./Chip-Ckkk-5JS.js";import"./Tabs-xp6AEFcu.js";import"./KeyboardArrowRight-DqzKYgWG.js";import"./MenuItem-D1rBKZNi.js";const k={title:"UI/DateTimePicker",component:d,tags:["autodocs"]};function s(r){const{children:i,utcTimeOverride:n}=r,m=p();return e.jsx(c,{synapseContext:{...m,utcTime:n},children:i})}const o={decorators:[r=>e.jsx(s,{utcTimeOverride:!1,children:e.jsx(r,{})})],args:{value:a("2023-01-01T00:00:00")}},t={decorators:[r=>e.jsx(s,{utcTimeOverride:!0,children:e.jsx(r,{})})],args:{value:a("2023-01-01T00:00:00")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
