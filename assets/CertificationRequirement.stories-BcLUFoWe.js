import{h as m,b as d}from"./iframe-CXX3j3k4.js";import{C as c}from"./CertificationRequirement-C2UEzDCp.js";import"./index-r8ZA1smB.js";import"./useUserBundle-DyX5qaSO.js";import"./useSuspenseQuery-BN00Uhyj.js";import"./RequirementItem-5-prE39_.js";import"./LockTwoTone-DosQQuBB.js";const _={title:"Governance/Data Access Request Flow/Requirements/CertificationRequirement",component:c,parameters:{stack:"mock"}},e={parameters:{msw:{handlers:[m(d,!0,!0)]}}},r={parameters:{msw:{handlers:[m(d,!1,!0)]}}};var t,a,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true)]
    }
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,n,o;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, false, true)]
    }
  }
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const I=["Certified","NotCertified"];export{e as Certified,r as NotCertified,I as __namedExportsOrder,_ as default};
