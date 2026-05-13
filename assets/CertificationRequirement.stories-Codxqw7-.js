import{n as e}from"./chunk-jRWAZmH_.js";import{ag as t,f as n,ng as r,u as i}from"./iframe-CEwhhiec.js";import{n as a,t as o}from"./CertificationRequirement-BzQhMmQP.js";var s,c,l,u;e((()=>{n(),t(),a(),s={title:`Governance/Data Access Request Flow/Requirements/CertificationRequirement`,component:o,parameters:{stack:`mock`}},c={parameters:{msw:{handlers:[i(r,!0,!0)]}}},l={parameters:{msw:{handlers:[i(r,!1,!0)]}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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