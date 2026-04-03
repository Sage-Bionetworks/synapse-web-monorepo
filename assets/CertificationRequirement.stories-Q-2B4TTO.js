import{e as t,a}from"./iframe-DWQ8siyH.js";import{C as s}from"./CertificationRequirement-Dp-cs7mO.js";import"./index-Chi_LkuB.js";import"./useUserBundle-C6KLzzS2.js";import"./RequirementItem-CmlHNfCg.js";import"./LockTwoTone-DHGZ51Jg.js";const p={title:"Governance/Data Access Request Flow/Requirements/CertificationRequirement",component:s,parameters:{stack:"mock"}},e={parameters:{msw:{handlers:[t(a,!0,!0)]}}},r={parameters:{msw:{handlers:[t(a,!1,!0)]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
