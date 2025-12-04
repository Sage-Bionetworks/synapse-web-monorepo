import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-APCqMGQN.js";import{A as c}from"./AccessRequirementAclEditor-CFqVnUkm.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-BMxGed4p.js";import"./index-Bfv0LEY1.js";import"./_baseOrderBy-BIdx1pYC.js";import"./_baseIteratee-C1iyXZJZ.js";import"./_baseMap-Df7tfatB.js";import"./_baseEach-CqMTNFX8.js";import"./useQueries-w0HgxzOW.js";import"./useInfiniteQuery-gXjf5_Em.js";import"./AclEditor-Bi-hfl1M.js";import"./UserSearchBoxV2-CbhAw4Yz.js";import"./useDebouncedEffect-Dle6wcr-.js";import"./use-deep-compare-effect.esm-D1mvsljV.js";import"./uniq-DteFCC0d.js";import"./without-BkfqYoGn.js";import"./UserBadge-CYspYllf.js";import"./useUserBundle-Cy20sB8T.js";import"./useSuspenseQuery-BHob01YS.js";import"./SkeletonTable-DvijJWyz.js";import"./MenuItem-BDJHy-II.js";import"./Card-CF59eyAb.js";import"./Chip-TkJBG0Qb.js";import"./Select-aab027f3.esm-ME89OYth.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-SDskbEKm.js";import"./TeamBadge-BsrWixdG.js";import"./SkeletonButton-BmM8-g6B.js";import"./SkeletonInlineBlock-CeF_-ICV.js";import"./SkeletonParagraph-D-_OgKUm.js";import"./IconSvgButton-C_03j1xR.js";import"./FormControlLabel-DrlXu2zA.js";import"./Checkbox-BFb0aAcu.js";import"./SwitchBase-CVLtTeuV.js";import"./useUpdateAcl-DblYyclZ.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
