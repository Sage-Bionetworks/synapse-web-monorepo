import{h as t,b as a}from"./iframe-QjK0KVVQ.js";import{C as s}from"./CertificationRequirement-DDWpkXT8.js";import"./index-Chi_LkuB.js";import"./useUserBundle-Dn3kF_9B.js";import"./useSuspenseQuery--yWao2XD.js";import"./RequirementItem-DMvxXCab.js";import"./LockTwoTone-CPq6gFhi.js";const u={title:"Governance/Data Access Request Flow/Requirements/CertificationRequirement",component:s,parameters:{stack:"mock"}},e={parameters:{msw:{handlers:[t(a,!0,!0)]}}},r={parameters:{msw:{handlers:[t(a,!1,!0)]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const l=["Certified","NotCertified"];export{e as Certified,r as NotCertified,l as __namedExportsOrder,u as default};
