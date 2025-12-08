import{n as d,b as l,H as i}from"./iframe-DslgKmO_.js";import{T as h}from"./TwoFactorAuthEnabledRequirement-DO45fEJh.js";import"./index-r8ZA1smB.js";import"./RequirementItem-dVAIi-RS.js";import"./LockTwoTone-hWN2Z4dH.js";const R={title:"Governance/Data Access Request Flow/Requirements/TwoFactorAuthEnabledRequirement",component:h,parameters:{stack:"mock"},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}};function m(u){return[d.get(`${l}/auth/v1/2fa`,()=>{const p={status:u?"ENABLED":"DISABLED"};return i.json(p,{status:200})})]}const e={parameters:{msw:{handlers:[m(!0)]}}},t={parameters:{msw:{handlers:[m(!1)]}}};var a,r,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getTwoFactorAuthStatusHandler(true)]
    }
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var o,n,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getTwoFactorAuthStatusHandler(false)]
    }
  }
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const T=["Enabled","Disabled"];export{t as Disabled,e as Enabled,T as __namedExportsOrder,R as default};
