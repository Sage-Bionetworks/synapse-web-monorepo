import{h as t,b as a}from"./iframe-r7gAu2bc.js";import{C as s}from"./CertificationRequirement-lilOneJu.js";import"./index-Chi_LkuB.js";import"./useUserBundle-CoSjfhMR.js";import"./useSuspenseQuery-DnY7oDDS.js";import"./RequirementItem-CFgF3WAB.js";import"./LockTwoTone-D33F24dd.js";const u={title:"Governance/Data Access Request Flow/Requirements/CertificationRequirement",component:s,parameters:{stack:"mock"}},e={parameters:{msw:{handlers:[t(a,!0,!0)]}}},r={parameters:{msw:{handlers:[t(a,!1,!0)]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
