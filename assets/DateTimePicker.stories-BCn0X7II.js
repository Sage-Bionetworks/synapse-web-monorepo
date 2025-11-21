import{dJ as c,j as e,ao as v,jh as x}from"./iframe-C0_MGelw.js";import{D as g}from"./DateTimePicker-CrZ7YeD_.js";import"./index-r8ZA1smB.js";import"./useMobilePicker-DiCpmb6q.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-ymwbD-ER.js";import"./index-B6X4B_B8.js";import"./ListItem-WIMDd-Tf.js";import"./listItemButtonClasses-Crgbwq92.js";import"./Chip-DoXtLwjl.js";import"./Tabs-5qZ0wNOZ.js";import"./KeyboardArrowRight-4XCdniRx.js";import"./MenuItem-VpU5uB21.js";const _={title:"UI/DateTimePicker",component:g,tags:["autodocs"]};function d(r){const{children:u,utcTimeOverride:T}=r,l=v();return e.jsx(x,{synapseContext:{...l,utcTime:T},children:u})}const o={decorators:[r=>e.jsx(d,{utcTimeOverride:!1,children:e.jsx(r,{})})],args:{value:c("2023-01-01T00:00:00")}},t={decorators:[r=>e.jsx(d,{utcTimeOverride:!0,children:e.jsx(r,{})})],args:{value:c("2023-01-01T00:00:00")}};var a,s,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  decorators: [Story => <TimezoneConfigOverrideWrapper utcTimeOverride={false}>
        <Story />
      </TimezoneConfigOverrideWrapper>],
  args: {
    value: dayjs('2023-01-01T00:00:00')
  }
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  decorators: [Story => <TimezoneConfigOverrideWrapper utcTimeOverride={true}>
        <Story />
      </TimezoneConfigOverrideWrapper>],
  args: {
    value: dayjs('2023-01-01T00:00:00')
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const I=["Local","UTC"];export{o as Local,t as UTC,I as __namedExportsOrder,_ as default};
