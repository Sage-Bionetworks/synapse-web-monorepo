import{n as o,b as n,H as c}from"./iframe-D2314vV7.js";import{T as m}from"./TwoFactorAuthEnabledRequirement-HH4iL3RF.js";import"./index-Chi_LkuB.js";import"./RequirementItem-Ch627e8N.js";import"./LockTwoTone-mdaY99tg.js";const w={title:"Governance/Data Access Request Flow/Requirements/TwoFactorAuthEnabledRequirement",component:m,parameters:{stack:"mock"},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}};function a(r){return[o.get(`${n}/auth/v1/2fa`,()=>{const s={status:r?"ENABLED":"DISABLED"};return c.json(s,{status:200})})]}const e={parameters:{msw:{handlers:[a(!0)]}}},t={parameters:{msw:{handlers:[a(!1)]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getTwoFactorAuthStatusHandler(true)]
    }
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getTwoFactorAuthStatusHandler(false)]
    }
  }
}`,...t.parameters?.docs?.source}}};const A=["Enabled","Disabled"];export{t as Disabled,e as Enabled,A as __namedExportsOrder,w as default};
