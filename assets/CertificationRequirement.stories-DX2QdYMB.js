import{n as e}from"./chunk-jRWAZmH_.js";import{f as t,sg as n,u as r,ug as i}from"./iframe-DGMqlRXI.js";import{n as a,t as o}from"./CertificationRequirement-DXSXThYQ.js";var s,c,l,u;e((()=>{t(),i(),a(),s={title:`Governance/Data Access Request Flow/Requirements/CertificationRequirement`,component:o,parameters:{stack:`mock`}},c={parameters:{msw:{handlers:[r(n,!0,!0)]}}},l={parameters:{msw:{handlers:[r(n,!1,!0)]}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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