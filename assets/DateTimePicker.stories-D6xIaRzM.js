import{dG as c,j as e,an as v,jd as x}from"./iframe-WhfIvkO3.js";import{D as g}from"./DateTimePicker-4ugAuIA3.js";import"./index-r8ZA1smB.js";import"./useMobilePicker-DNB2_gE1.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-By-00YBB.js";import"./index-sVzarH1I.js";import"./ListItem-NOMhssXa.js";import"./listItemButtonClasses-BHYF_LrE.js";import"./Chip-BbqPcVoT.js";import"./Tabs-DmYC_uUQ.js";import"./KeyboardArrowRight-CUnfx-8d.js";import"./MenuItem-Dje8pbb_.js";const _={title:"UI/DateTimePicker",component:g,tags:["autodocs"]};function d(r){const{children:u,utcTimeOverride:T}=r,l=v();return e.jsx(x,{synapseContext:{...l,utcTime:T},children:u})}const o={decorators:[r=>e.jsx(d,{utcTimeOverride:!1,children:e.jsx(r,{})})],args:{value:c("2023-01-01T00:00:00")}},t={decorators:[r=>e.jsx(d,{utcTimeOverride:!0,children:e.jsx(r,{})})],args:{value:c("2023-01-01T00:00:00")}};var a,s,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const G=["Local","UTC"];export{o as Local,t as UTC,G as __namedExportsOrder,_ as default};
