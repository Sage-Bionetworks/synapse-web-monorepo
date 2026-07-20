import{o as e}from"./preload-helper-CsHsquCd.js";import{Tn as t,kn as n}from"./synapse-client-SWrWebbD.js";import{f as r,u as i}from"./iframe-DYvT7Fs6.js";import{n as a,t as o}from"./ValidationRequirement-BoBNaW_P.js";var s,c,l,u;e((()=>{r(),n(),a(),s={title:`Governance/Data Access Request Flow/Requirements/ValidationRequirement`,component:o,parameters:{stack:`mock`}},c={parameters:{msw:{handlers:[i(t,!0,!0)]}}},l={parameters:{msw:{handlers:[i(t,!0,!1)]}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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