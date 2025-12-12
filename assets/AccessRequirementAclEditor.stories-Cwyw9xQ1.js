import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-6fxFvYFG.js";import{A as c}from"./AccessRequirementAclEditor-DfUvihLu.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-DXccu9dc.js";import"./index-CP3LG1g1.js";import"./_baseOrderBy-Cr16-GjM.js";import"./_baseIteratee-DY1tQatH.js";import"./_baseMap-Rk7cewzM.js";import"./_baseEach-Cn4IQ3HL.js";import"./useQueries-C1Wk7ykh.js";import"./useInfiniteQuery-D3h0JCdq.js";import"./AclEditor-C8qBMblg.js";import"./UserSearchBoxV2-LPivlEfZ.js";import"./useDebouncedEffect-BK30tzs9.js";import"./use-deep-compare-effect.esm-6HhN3vUK.js";import"./uniq-Bs8U3rF1.js";import"./without-DeXe7ptH.js";import"./UserBadge-CnsgxeYH.js";import"./useUserBundle-Cw5DWU5h.js";import"./useSuspenseQuery-ilZIAiZO.js";import"./SkeletonTable-B0KdXxpl.js";import"./MenuItem-B2VLGt4Y.js";import"./Card-Cx8rkxTL.js";import"./Chip-BwWvwcwU.js";import"./Select-aab027f3.esm-DG9oUfLW.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-CjRyaMhX.js";import"./TeamBadge-D5fJx7q9.js";import"./SkeletonButton-CwN3sKyQ.js";import"./SkeletonInlineBlock-DeCoWgUQ.js";import"./SkeletonParagraph-P8Ugt_HA.js";import"./IconSvgButton-DirrFFJ-.js";import"./FormControlLabel-D4CQ3AYq.js";import"./Checkbox-CHQ5V6dI.js";import"./SwitchBase-Bvt5w2g0.js";import"./useUpdateAcl-DwhKqgat.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
