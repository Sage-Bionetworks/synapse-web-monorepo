import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-MmUnwf_I.js";import{A as i}from"./AccessRequirementAclEditor-DgGXPhhB.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-COUUD8qB.js";import"./index-DFpfHoB1.js";import"./_baseOrderBy-CLYcswMr.js";import"./_baseIteratee-DuWwUvju.js";import"./_baseMap-Bk2mvBia.js";import"./_baseEach-CKJISio3.js";import"./useQueries-BtYNrF4R.js";import"./useInfiniteQuery-B-kwFNwz.js";import"./AclEditor-DP5aX96e.js";import"./UserSearchBoxV2-CzqE0EkR.js";import"./useDebouncedEffect-IK0lQq3K.js";import"./use-deep-compare-effect.esm-BqBQcVZ-.js";import"./uniq-BTaYoBVF.js";import"./without-lsWXnEhz.js";import"./UserBadge-DP5amhmd.js";import"./useUserBundle-Dndd3Zuv.js";import"./useSuspenseQuery-BiDsxdrf.js";import"./SkeletonTable-BLb5k01Q.js";import"./MenuItem-D3dfLHqd.js";import"./Card-DpsJeDne.js";import"./Chip-p99lz26K.js";import"./Select-aab027f3.esm-BDn15PHk.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CAyrKgak.js";import"./TeamBadge-DC-gFpCd.js";import"./SkeletonButton-I9hMZOT-.js";import"./SkeletonInlineBlock-Di0FCUFm.js";import"./SkeletonParagraph-_n4WmOaG.js";import"./IconSvgButton-wO6-Vz70.js";import"./FormControlLabel-kiBD7IDn.js";import"./Checkbox-BQeLkSuG.js";import"./SwitchBase-DN75FVfu.js";import"./useUpdateAcl-D3UfeMNo.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
