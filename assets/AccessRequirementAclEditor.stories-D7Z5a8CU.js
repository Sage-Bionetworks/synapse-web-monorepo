import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-oNn-8uxy.js";import{A as c}from"./AccessRequirementAclEditor-D3neFQ0M.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-CsaizCJ_.js";import"./index-BI05yMk-.js";import"./_baseOrderBy-CzjvuFz5.js";import"./_baseIteratee-BbGDd72L.js";import"./_baseMap-Cj7zEA7K.js";import"./_baseEach-zo0gRTCE.js";import"./useQueries-CKE-hIT5.js";import"./useInfiniteQuery-BMvK8V8y.js";import"./AclEditor-BnuwMBxM.js";import"./UserSearchBoxV2-V6QtyL8f.js";import"./useDebouncedEffect-DenHVWi1.js";import"./use-deep-compare-effect.esm-DLQm-Mgx.js";import"./uniq-D0RDBqXc.js";import"./without-DeOqkEKm.js";import"./UserBadge-bqUdhPgI.js";import"./useUserBundle-BvaO0LNa.js";import"./useSuspenseQuery-yMS-8lGQ.js";import"./SkeletonTable-iW-77ZUO.js";import"./MenuItem-2EGLr3CI.js";import"./Card-Dp1pXqZt.js";import"./Chip-D6UDoJiu.js";import"./Select-aab027f3.esm-Demt1hn3.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BwlzkA4O.js";import"./TeamBadge-DPKE54J4.js";import"./SkeletonButton-D_D34Tmd.js";import"./SkeletonInlineBlock-B6YJwBFk.js";import"./SkeletonParagraph-DAXRxcWE.js";import"./IconSvgButton-CB7dqq_3.js";import"./FormControlLabel-B2mrO8Kq.js";import"./Checkbox-Dcd_zqus.js";import"./SwitchBase-DbKIBTZe.js";import"./useUpdateAcl-DTW0wLgT.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
