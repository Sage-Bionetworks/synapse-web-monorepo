import{c as a,b as t}from"./iframe-90f2SQV6.js";import{V as s}from"./ValidationRequirement--kA7ebI9.js";import"./index-Chi_LkuB.js";import"./useUserBundle-C1tRTjHW.js";import"./RequirementItem-BpNXPcKo.js";import"./LockTwoTone-_uktnvXE.js";const l={title:"Governance/Data Access Request Flow/Requirements/ValidationRequirement",component:s,parameters:{stack:"mock"}},e={parameters:{msw:{handlers:[a(t,!0,!0)]}}},r={parameters:{msw:{handlers:[a(t,!0,!1)]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
