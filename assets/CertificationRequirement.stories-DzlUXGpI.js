import{h as m,b as d}from"./iframe-Ci1lmE8g.js";import{C as c}from"./CertificationRequirement-QNLxH5mK.js";import"./index-r8ZA1smB.js";import"./RequirementItem-DP_I-Bz7.js";import"./LockTwoTone-CrK_l1K_.js";const O={title:"Governance/Data Access Request Flow/Requirements/CertificationRequirement",component:c,parameters:{stack:"mock"}},e={parameters:{msw:{handlers:[m(d,!0,!0)]}}},r={parameters:{msw:{handlers:[m(d,!1,!0)]}}};var t,a,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true)]
    }
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var n,i,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, false, true)]
    }
  }
}`,...(o=(i=r.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const R=["Certified","NotCertified"];export{e as Certified,r as NotCertified,R as __namedExportsOrder,O as default};
