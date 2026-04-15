import{c as a,b as t}from"./iframe-C9UTN7n5.js";import{V as s}from"./ValidationRequirement-LUa4VynX.js";import"./index-Chi_LkuB.js";import"./useUserBundle-B2NBOQIN.js";import"./RequirementItem-vkMnBEA0.js";import"./LockTwoTone-Bq9iMu0B.js";const l={title:"Governance/Data Access Request Flow/Requirements/ValidationRequirement",component:s,parameters:{stack:"mock"}},e={parameters:{msw:{handlers:[a(t,!0,!0)]}}},r={parameters:{msw:{handlers:[a(t,!0,!1)]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true)]
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, false)]
    }
  }
}`,...r.parameters?.docs?.source}}};const p=["Validated","NotValidated"];export{r as NotValidated,e as Validated,p as __namedExportsOrder,l as default};
