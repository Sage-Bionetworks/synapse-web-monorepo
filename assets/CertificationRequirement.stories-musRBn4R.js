import{o as e}from"./preload-helper-CsHsquCd.js";import{Nn as t,kn as n}from"./synapse-client-DgmFX6bi.js";import{f as r,u as i}from"./iframe-DiM6Ded9.js";import{n as a,t as o}from"./CertificationRequirement-QJjU6EXw.js";var s,c,l,u;e((()=>{r(),t(),a(),s={title:`Governance/Data Access Request Flow/Requirements/CertificationRequirement`,component:o,parameters:{stack:`mock`}},c={parameters:{msw:{handlers:[i(n,!0,!0)]}}},l={parameters:{msw:{handlers:[i(n,!1,!0)]}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true)]
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, false, true)]
    }
  }
}`,...l.parameters?.docs?.source}}},u=[`Certified`,`NotCertified`]}))();export{c as Certified,l as NotCertified,u as __namedExportsOrder,s as default};