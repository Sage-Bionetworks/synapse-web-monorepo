import{o as e}from"./preload-helper-CsHsquCd.js";import{n as t,p as n,t as r}from"./core-IjRt3rc-.js";import{An as i,En as a}from"./synapse-client-lwpa67nR.js";import{n as o,t as s}from"./TwoFactorAuthEnabledRequirement-CHQ2u69A.js";function c(e){return[t.get(`${a}/auth/v1/2fa`,()=>{let t={status:e?`ENABLED`:`DISABLED`};return n.json(t,{status:200})})]}var l,u,d,f;e((()=>{i(),r(),o(),l={title:`Governance/Data Access Request Flow/Requirements/TwoFactorAuthEnabledRequirement`,component:s,parameters:{stack:`mock`},argTypes:{isAuthenticated:{control:{type:`boolean`}}},args:{isAuthenticated:!0}},u={parameters:{msw:{handlers:[c(!0)]}}},d={parameters:{msw:{handlers:[c(!1)]}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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