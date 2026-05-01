import{n as e}from"./chunk-jRWAZmH_.js";import{Jh as t,Zh as n,c as r,u as i}from"./iframe-BN9ezngx.js";import{n as a,t as o}from"./ValidationRequirement-E-ob0jzk.js";var s,c,l,u;e((()=>{i(),n(),a(),s={title:`Governance/Data Access Request Flow/Requirements/ValidationRequirement`,component:o,parameters:{stack:`mock`}},c={parameters:{msw:{handlers:[r(t,!0,!0)]}}},l={parameters:{msw:{handlers:[r(t,!0,!1)]}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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