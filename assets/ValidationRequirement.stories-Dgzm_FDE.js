import{h as a,b as t}from"./iframe-HR5efO_6.js";import{V as s}from"./ValidationRequirement-BCb1T1ot.js";import"./index-Chi_LkuB.js";import"./useUserBundle-B64ZgZGa.js";import"./RequirementItem-C7v9HlqK.js";import"./LockTwoTone-D3NZXD6U.js";const c={title:"Governance/Data Access Request Flow/Requirements/ValidationRequirement",component:s,parameters:{stack:"mock"}},e={parameters:{msw:{handlers:[a(t,!0,!0)]}}},r={parameters:{msw:{handlers:[a(t,!0,!1)]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const p=["Validated","NotValidated"];export{r as NotValidated,e as Validated,p as __namedExportsOrder,c as default};
