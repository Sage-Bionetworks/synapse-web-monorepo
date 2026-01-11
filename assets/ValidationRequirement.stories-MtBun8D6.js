import{h as a,b as t}from"./iframe-BIEbu1W6.js";import{V as s}from"./ValidationRequirement-CnljNcX1.js";import"./index-Chi_LkuB.js";import"./useUserBundle-bL5uBmII.js";import"./useSuspenseQuery-B21UYyAc.js";import"./RequirementItem-7ooCnbon.js";import"./LockTwoTone-CZBccG1v.js";const c={title:"Governance/Data Access Request Flow/Requirements/ValidationRequirement",component:s,parameters:{stack:"mock"}},e={parameters:{msw:{handlers:[a(t,!0,!0)]}}},r={parameters:{msw:{handlers:[a(t,!0,!1)]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const u=["Validated","NotValidated"];export{r as NotValidated,e as Validated,u as __namedExportsOrder,c as default};
