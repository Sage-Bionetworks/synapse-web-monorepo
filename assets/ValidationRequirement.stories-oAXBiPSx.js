import{n as e}from"./chunk-jRWAZmH_.js";import{ag as t,f as n,ng as r,u as i}from"./iframe-DfAEcxNr.js";import{n as a,t as o}from"./ValidationRequirement-Aowp1EBt.js";var s,c,l,u;e((()=>{n(),t(),a(),s={title:`Governance/Data Access Request Flow/Requirements/ValidationRequirement`,component:o,parameters:{stack:`mock`}},c={parameters:{msw:{handlers:[i(r,!0,!0)]}}},l={parameters:{msw:{handlers:[i(r,!0,!1)]}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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