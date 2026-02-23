import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-DUgvw_e1.js";import{A as i}from"./AccessRequirementAclEditor-CCZDXPxn.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-e0J-uQ6G.js";import"./index-D5BySe1V.js";import"./_baseOrderBy-BA14F0fV.js";import"./_baseIteratee-DEPznUuf.js";import"./_baseMap-CaX1bcDJ.js";import"./_baseEach-DYGtEyDy.js";import"./useQueries-CSyyVGU0.js";import"./useInfiniteQuery-DR51fsMw.js";import"./AclEditor-CdjZwnWL.js";import"./useRealmPrincipals-fdFgSFA-.js";import"./UserSearchBoxV2-C-SnilQ_.js";import"./useDebouncedEffect-BfM37di2.js";import"./use-deep-compare-effect.esm-CjYY6bBe.js";import"./uniq-4I4fGcu8.js";import"./without-CFz4Jv-t.js";import"./UserBadge-D8J1ZLdA.js";import"./useUserBundle-DplDm6GV.js";import"./useSuspenseQuery-ox9OnZJk.js";import"./SkeletonTable-wy_brudp.js";import"./MenuItem-DFV-o_UX.js";import"./Card-BDbGewBq.js";import"./Chip-D6AY4yga.js";import"./Select-aab027f3.esm-ka4o34aa.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BR8pSTgs.js";import"./TeamBadge-ilp_6bmi.js";import"./SkeletonButton-CHYteE0_.js";import"./SkeletonInlineBlock-C0f092qz.js";import"./SkeletonParagraph-zF20ua7-.js";import"./IconSvgButton-DjoQMft9.js";import"./FormControlLabel-B9NBpo6a.js";import"./Checkbox-PIprMSav.js";import"./SwitchBase-BVmFI5tz.js";import"./useUpdateAcl-DL84EKMw.js";const se={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID)
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602671'
  },
  parameters: {
    stack: 'development'
  }
}`,...t.parameters?.docs?.source}}};const te=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,te as __namedExportsOrder,se as default};
