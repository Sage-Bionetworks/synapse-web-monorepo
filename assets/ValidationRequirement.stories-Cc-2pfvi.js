import{h as m,b as i}from"./iframe-DkJtXMGY.js";import{V as l}from"./ValidationRequirement-D63edw6H.js";import"./index-r8ZA1smB.js";import"./RequirementItem-BcnU9vZO.js";import"./LockTwoTone-qAEF7vz4.js";const V={title:"Governance/Data Access Request Flow/Requirements/ValidationRequirement",component:l,parameters:{stack:"mock"}},e={parameters:{msw:{handlers:[m(i,!0,!0)]}}},r={parameters:{msw:{handlers:[m(i,!0,!1)]}}};var a,t,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(d=(o=r.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const C=["Validated","NotValidated"];export{r as NotValidated,e as Validated,C as __namedExportsOrder,V as default};
