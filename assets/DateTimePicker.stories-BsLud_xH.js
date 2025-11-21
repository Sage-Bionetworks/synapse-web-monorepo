import{dJ as c,j as e,ao as v,jh as x}from"./iframe-BWoxTCTX.js";import{D as g}from"./DateTimePicker-B370aCSJ.js";import"./index-r8ZA1smB.js";import"./useMobilePicker-BkoQYEE9.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-C1rITwj3.js";import"./index-5LTwdmKr.js";import"./ListItem-0cDlcVGp.js";import"./listItemButtonClasses-D1FOLiQs.js";import"./Chip-BAz2TZVD.js";import"./Tabs-Bq9iSwI6.js";import"./KeyboardArrowRight-Da1R-eS5.js";import"./MenuItem-Cb5PHefC.js";const _={title:"UI/DateTimePicker",component:g,tags:["autodocs"]};function d(r){const{children:u,utcTimeOverride:T}=r,l=v();return e.jsx(x,{synapseContext:{...l,utcTime:T},children:u})}const o={decorators:[r=>e.jsx(d,{utcTimeOverride:!1,children:e.jsx(r,{})})],args:{value:c("2023-01-01T00:00:00")}},t={decorators:[r=>e.jsx(d,{utcTimeOverride:!0,children:e.jsx(r,{})})],args:{value:c("2023-01-01T00:00:00")}};var a,s,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
