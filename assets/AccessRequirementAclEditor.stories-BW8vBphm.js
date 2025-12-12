import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-BrkRRQUD.js";import{A as c}from"./AccessRequirementAclEditor-kH-8PJ5-.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-S1u6kgMx.js";import"./index-78Wjm31F.js";import"./_baseOrderBy-CfQMT3l2.js";import"./_baseIteratee-DsR7q60b.js";import"./_baseMap-DNuKpY8_.js";import"./_baseEach-CjJA-Bxp.js";import"./useQueries-CZ2UZAmG.js";import"./useInfiniteQuery-Cwe-jDYH.js";import"./AclEditor-DSd7wv8M.js";import"./UserSearchBoxV2-DPb5XwnH.js";import"./useDebouncedEffect-bnbmKPq9.js";import"./use-deep-compare-effect.esm-DGZRY9L-.js";import"./uniq-DfAZrWYH.js";import"./without-4Pynd6JM.js";import"./UserBadge-DK_HXqMk.js";import"./useUserBundle-DImWu9jA.js";import"./useSuspenseQuery-CGvWjD8G.js";import"./SkeletonTable-Drmu1Y3r.js";import"./MenuItem-BDBbE2H1.js";import"./Card-BB85GGha.js";import"./Chip-BtXAVNoa.js";import"./Select-aab027f3.esm-DhUMs_k8.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-C1VjpGi1.js";import"./TeamBadge-CTAvEacD.js";import"./SkeletonButton-CFrxD1jj.js";import"./SkeletonInlineBlock-DcZvYGLi.js";import"./SkeletonParagraph-TWiIzOXd.js";import"./IconSvgButton-ggVMxXoi.js";import"./FormControlLabel-5WovY1jg.js";import"./Checkbox-C5PLq8_S.js";import"./SwitchBase-DYU8qapt.js";import"./useUpdateAcl-CVntTMsd.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
