import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-CXX3j3k4.js";import{A as c}from"./AccessRequirementAclEditor-Zgt7QZtC.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-ZLwAU_Is.js";import"./index-BMdlDJHf.js";import"./_baseOrderBy-CfkeoQJ5.js";import"./_baseIteratee-1UNfM9nP.js";import"./_baseMap-lc2X7ooU.js";import"./_baseEach-Cin_LC24.js";import"./useQueries-DR1JWuQB.js";import"./useInfiniteQuery-qlxPBsTZ.js";import"./AclEditor-Cf-IFwt3.js";import"./UserSearchBoxV2-BvbJt7gy.js";import"./useDebouncedEffect-vxCbwBbS.js";import"./use-deep-compare-effect.esm-C67h1UqU.js";import"./uniq-BTvaEj3q.js";import"./without-DPQPdQUT.js";import"./UserBadge-BK9OLj7v.js";import"./useUserBundle-DyX5qaSO.js";import"./useSuspenseQuery-BN00Uhyj.js";import"./SkeletonTable-Dy_jc2vl.js";import"./MenuItem-Bsjjr9Hj.js";import"./Card-8IXpSYq4.js";import"./Chip-BQx2btmN.js";import"./Select-aab027f3.esm-CCwzdRLD.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-f9v9l6wh.js";import"./TeamBadge-C1Mow9Jp.js";import"./SkeletonButton-CM_ISHRH.js";import"./SkeletonInlineBlock-B8S3Nzba.js";import"./SkeletonParagraph-D9HvcMZH.js";import"./IconSvgButton-CtLbrmXI.js";import"./FormControlLabel-D_ywbKjj.js";import"./Checkbox-CncWC2DQ.js";import"./SwitchBase-ClGQ9l6f.js";import"./useUpdateAcl-CLDmsqTW.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
