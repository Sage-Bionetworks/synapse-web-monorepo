import{n as e}from"./chunk-zsgVPwQN.js";import{Tn as t,xn as n}from"./SynapseClient-BzG4sNth.js";import{r,t as i}from"./userProfileHandlers-C6s1Sw_t.js";import{n as a,t as o}from"./CertificationRequirement-g2d7g8a5.js";var s,c,l,u;e((()=>{r(),t(),a(),s={title:`Governance/Data Access Request Flow/Requirements/CertificationRequirement`,component:o,parameters:{stack:`mock`}},c={parameters:{msw:{handlers:[i(n,!0,!0)]}}},l={parameters:{msw:{handlers:[i(n,!1,!0)]}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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