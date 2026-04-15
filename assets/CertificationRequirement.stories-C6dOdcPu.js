import{c as t,b as a}from"./iframe-C9UTN7n5.js";import{C as s}from"./CertificationRequirement-CfAwG5E9.js";import"./index-Chi_LkuB.js";import"./useUserBundle-B2NBOQIN.js";import"./RequirementItem-vkMnBEA0.js";import"./LockTwoTone-Bq9iMu0B.js";const p={title:"Governance/Data Access Request Flow/Requirements/CertificationRequirement",component:s,parameters:{stack:"mock"}},e={parameters:{msw:{handlers:[t(a,!0,!0)]}}},r={parameters:{msw:{handlers:[t(a,!1,!0)]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true)]
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, false, true)]
    }
  }
}`,...r.parameters?.docs?.source}}};const u=["Certified","NotCertified"];export{e as Certified,r as NotCertified,u as __namedExportsOrder,p as default};
