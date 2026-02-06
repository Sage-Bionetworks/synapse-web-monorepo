import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-D-3jDgkP.js";import{A as i}from"./AccessRequirementAclEditor-D5xCr90j.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CUKfd1Wa.js";import"./index-DB-dn3wn.js";import"./_baseOrderBy-h4Ei6xa1.js";import"./_baseIteratee-DyY3KhVC.js";import"./_baseMap-Ca_HBm0L.js";import"./_baseEach-ChY8cEpb.js";import"./useQueries-C3g3qxiV.js";import"./useInfiniteQuery-C8k1H9sd.js";import"./AclEditor-CMKgqTNW.js";import"./UserSearchBoxV2-CAcSYdV5.js";import"./useDebouncedEffect-CsFv19tw.js";import"./use-deep-compare-effect.esm-BrMn--PC.js";import"./uniq-DeK1FA4B.js";import"./without-DTKLuMUu.js";import"./UserBadge-D2SDTi18.js";import"./useUserBundle-B_3OQShc.js";import"./useSuspenseQuery-CtXxGYgq.js";import"./SkeletonTable-gbeUh3ur.js";import"./MenuItem-aznIDkac.js";import"./Card-C30_Jw7R.js";import"./Chip-CH85Kc0i.js";import"./Select-aab027f3.esm-BlRgl09U.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BvSb0qOV.js";import"./TeamBadge-0Sq_c6Re.js";import"./SkeletonButton-C7XBrhUR.js";import"./SkeletonInlineBlock-DPp6vqqG.js";import"./SkeletonParagraph-BGwjKkDC.js";import"./IconSvgButton-4lgcinP3.js";import"./FormControlLabel-C87EfYI2.js";import"./Checkbox-BPvRmOPY.js";import"./SwitchBase-BVjlCjDZ.js";import"./useUpdateAcl-Bor_OhaD.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const se=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,se as __namedExportsOrder,re as default};
