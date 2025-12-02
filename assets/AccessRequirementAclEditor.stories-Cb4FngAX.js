import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-ClyxPfmc.js";import{A as c}from"./AccessRequirementAclEditor-CpNHi8YR.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-D8QtUaKF.js";import"./index-DAlOmM9o.js";import"./_baseOrderBy-mKcR7STP.js";import"./_baseIteratee-9Jql63Gf.js";import"./_baseMap-BZX5HvhC.js";import"./_baseEach-BKNPTxf-.js";import"./useQueries-CSThz8EB.js";import"./useInfiniteQuery-Cqgwy5DL.js";import"./AclEditor-Df9y182b.js";import"./UserSearchBoxV2-C8PwSj7D.js";import"./useDebouncedEffect-DulQ5ukY.js";import"./use-deep-compare-effect.esm-vk4Z9RWV.js";import"./uniq-wuCvyXTJ.js";import"./without-BrkAU00P.js";import"./UserBadge-dq1rcuGr.js";import"./SkeletonTable-ClI70_Q3.js";import"./MenuItem-DP0olmzU.js";import"./Card-u1-hFSg-.js";import"./Chip-Bt2Da9Ss.js";import"./Select-aab027f3.esm-CFC8E6a2.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-xgcTiyiN.js";import"./TeamBadge-i2qsl3bw.js";import"./SkeletonButton-JqUeiWK5.js";import"./SkeletonInlineBlock-CyrAtLJW.js";import"./SkeletonParagraph-BsIbpmnA.js";import"./IconSvgButton-15iafk-a.js";import"./FormControlLabel-DuHvGhLT.js";import"./Checkbox-rnd4zaCH.js";import"./SwitchBase-DZhxFchy.js";import"./useUpdateAcl-D0WXp1_p.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(_=t.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const ce=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,ce as __namedExportsOrder,ie as default};
