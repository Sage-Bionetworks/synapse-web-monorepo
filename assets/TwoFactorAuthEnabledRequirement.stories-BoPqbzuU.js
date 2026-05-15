import{n as e}from"./chunk-jRWAZmH_.js";import{Xt as t,Yt as n,Zt as r,ag as i,ng as a}from"./iframe-DLlGW_Fz.js";import{n as o,t as s}from"./TwoFactorAuthEnabledRequirement-D-KHkmAk.js";function c(e){return[r.get(`${a}/auth/v1/2fa`,()=>{let n={status:e?`ENABLED`:`DISABLED`};return t.json(n,{status:200})})]}var l,u,d,f;e((()=>{i(),n(),o(),l={title:`Governance/Data Access Request Flow/Requirements/TwoFactorAuthEnabledRequirement`,component:s,parameters:{stack:`mock`},argTypes:{isAuthenticated:{control:{type:`boolean`}}},args:{isAuthenticated:!0}},u={parameters:{msw:{handlers:[c(!0)]}}},d={parameters:{msw:{handlers:[c(!1)]}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getTwoFactorAuthStatusHandler(true)]
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getTwoFactorAuthStatusHandler(false)]
    }
  }
}`,...d.parameters?.docs?.source}}},f=[`Enabled`,`Disabled`]}))();export{d as Disabled,u as Enabled,f as __namedExportsOrder,l as default};