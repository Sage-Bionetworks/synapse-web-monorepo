import{dJ as c,j as e,ao as v,ji as x}from"./iframe-C_QQiyp-.js";import{D as g}from"./DateTimePicker-REfFJAgX.js";import"./index-r8ZA1smB.js";import"./useMobilePicker-B0SCrojO.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BdXYx_Hc.js";import"./index-vrcVr6xS.js";import"./ListItem-zdk6i7tV.js";import"./listItemButtonClasses-DQREWixM.js";import"./Chip-B0GoZMHJ.js";import"./Tabs-BvYSaQbz.js";import"./KeyboardArrowRight-BdZv8R81.js";import"./MenuItem-BHFoVdQr.js";const _={title:"UI/DateTimePicker",component:g,tags:["autodocs"]};function d(r){const{children:u,utcTimeOverride:T}=r,l=v();return e.jsx(x,{synapseContext:{...l,utcTime:T},children:u})}const o={decorators:[r=>e.jsx(d,{utcTimeOverride:!1,children:e.jsx(r,{})})],args:{value:c("2023-01-01T00:00:00")}},t={decorators:[r=>e.jsx(d,{utcTimeOverride:!0,children:e.jsx(r,{})})],args:{value:c("2023-01-01T00:00:00")}};var a,s,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
