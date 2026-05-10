import{n as e}from"./chunk-jRWAZmH_.js";import{Qh as t,Yh as n,c as r,u as i}from"./iframe-DIpPaeje.js";import{n as a,t as o}from"./ValidationRequirement-Bt416can.js";var s,c,l,u;e((()=>{i(),t(),a(),s={title:`Governance/Data Access Request Flow/Requirements/ValidationRequirement`,component:o,parameters:{stack:`mock`}},c={parameters:{msw:{handlers:[r(n,!0,!0)]}}},l={parameters:{msw:{handlers:[r(n,!0,!1)]}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true)]
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, false)]
    }
  }
}`,...l.parameters?.docs?.source}}},u=[`Validated`,`NotValidated`]}))();export{l as NotValidated,c as Validated,u as __namedExportsOrder,s as default};