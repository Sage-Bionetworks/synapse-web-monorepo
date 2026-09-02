import{o as e}from"./preload-helper-CsHsquCd.js";import{_ as t,i as n,t as r}from"./core-CI8DLeHF.js";import{Ln as i,Vn as a}from"./synapse-client-CZF9FYCe.js";import{n as o,t as s}from"./TwoFactorAuthEnabledRequirement-ChKLhApJ.js";function c(e){return[n.get(`${i}/auth/v1/2fa`,()=>{let n={status:e?`ENABLED`:`DISABLED`};return t.json(n,{status:200})})]}var l,u,d,f;e((()=>{a(),r(),o(),l={title:`Governance/Data Access Request Flow/Requirements/TwoFactorAuthEnabledRequirement`,component:s,parameters:{stack:`mock`},argTypes:{isAuthenticated:{control:{type:`boolean`}}},args:{isAuthenticated:!0}},u={parameters:{msw:{handlers:[c(!0)]}}},d={parameters:{msw:{handlers:[c(!1)]}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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