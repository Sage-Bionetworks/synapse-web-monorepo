import{h as t,b as a}from"./iframe-BE9PbKHz.js";import{C as s}from"./CertificationRequirement-Dk1gaB2x.js";import"./index-Chi_LkuB.js";import"./useUserBundle-CnmcW3Hx.js";import"./useSuspenseQuery-CEXBd55g.js";import"./RequirementItem-B7HpiW1U.js";import"./LockTwoTone-CQVeHXtj.js";const u={title:"Governance/Data Access Request Flow/Requirements/CertificationRequirement",component:s,parameters:{stack:"mock"}},e={parameters:{msw:{handlers:[t(a,!0,!0)]}}},r={parameters:{msw:{handlers:[t(a,!1,!0)]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
