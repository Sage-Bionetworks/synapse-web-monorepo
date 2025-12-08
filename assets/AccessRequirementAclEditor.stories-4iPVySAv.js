import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-CQ5-qSaZ.js";import{A as c}from"./AccessRequirementAclEditor-C8EjCtPi.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-Dy8pbEn3.js";import"./index-CMGxuthB.js";import"./_baseOrderBy-C1pU_GaP.js";import"./_baseIteratee-Dj3IYEgL.js";import"./_baseMap-BEQgNlee.js";import"./_baseEach-BprtyPd6.js";import"./useQueries-D_Kjb9rp.js";import"./useInfiniteQuery-CRASm_E1.js";import"./AclEditor-CGYC4Vsx.js";import"./UserSearchBoxV2-CGmgB0HG.js";import"./useDebouncedEffect-Df-PAMJS.js";import"./use-deep-compare-effect.esm-Mlqb8z9B.js";import"./uniq-Urbe3M_O.js";import"./without-C1d2PJCn.js";import"./UserBadge-B_sM3xEu.js";import"./useUserBundle-DvCkv3lX.js";import"./useSuspenseQuery-Be5C3Dgn.js";import"./SkeletonTable-BtsmZ8DU.js";import"./MenuItem-C2vxNPoL.js";import"./Card-Ds8RS4sw.js";import"./Chip-CIMnCwMP.js";import"./Select-aab027f3.esm-CHnT__mC.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-0nKpQxBa.js";import"./TeamBadge-ucKGQwM4.js";import"./SkeletonButton-c9WGL7V6.js";import"./SkeletonInlineBlock-DeFYqaGd.js";import"./SkeletonParagraph-BA_ojVwN.js";import"./IconSvgButton-CFrKJ-cO.js";import"./FormControlLabel-NHrBcrxm.js";import"./Checkbox-d-GkNVqV.js";import"./SwitchBase-DktDedBf.js";import"./useUpdateAcl-CliGTFTR.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var E,R,u;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID)
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(u=(R=s.parameters)==null?void 0:R.docs)==null?void 0:u.source}}};var A,_,g;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602671'
  },
  parameters: {
    stack: 'development'
  }
}`,...(g=(_=t.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const le=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,le as __namedExportsOrder,pe as default};
