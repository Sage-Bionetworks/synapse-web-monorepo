import{h as t,b as a}from"./iframe-DrwjMxxV.js";import{C as s}from"./CertificationRequirement-CL6hvbVv.js";import"./index-Chi_LkuB.js";import"./useUserBundle-Bvpmk8jd.js";import"./RequirementItem-B1UsRqin.js";import"./LockTwoTone-Iyuaa1nt.js";const p={title:"Governance/Data Access Request Flow/Requirements/CertificationRequirement",component:s,parameters:{stack:"mock"}},e={parameters:{msw:{handlers:[t(a,!0,!0)]}}},r={parameters:{msw:{handlers:[t(a,!1,!0)]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
