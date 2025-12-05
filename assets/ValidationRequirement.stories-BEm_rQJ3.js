import{h as m,b as i}from"./iframe-Dh27wMqB.js";import{V as l}from"./ValidationRequirement-CXcymDOQ.js";import"./index-r8ZA1smB.js";import"./useUserBundle-CjBP39Vs.js";import"./useSuspenseQuery-B1cUOedV.js";import"./RequirementItem-B3FnPxV1.js";import"./LockTwoTone-BS5Njf1_.js";const f={title:"Governance/Data Access Request Flow/Requirements/ValidationRequirement",component:l,parameters:{stack:"mock"}},e={parameters:{msw:{handlers:[m(i,!0,!0)]}}},r={parameters:{msw:{handlers:[m(i,!0,!1)]}}};var a,t,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true)]
    }
  }
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var n,o,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, false)]
    }
  }
}`,...(d=(o=r.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const _=["Validated","NotValidated"];export{r as NotValidated,e as Validated,_ as __namedExportsOrder,f as default};
