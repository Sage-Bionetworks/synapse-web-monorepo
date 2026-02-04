import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-BhrR5Sll.js";import{A as i}from"./AccessRequirementAclEditor-C_faWf79.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-iVIEM_r3.js";import"./index-CPX53gcL.js";import"./_baseOrderBy-BTMBj8Ip.js";import"./_baseIteratee-BvC8fp-4.js";import"./_baseMap-BS7AJXJp.js";import"./_baseEach-BandNteZ.js";import"./useQueries-DqSPqXIA.js";import"./useInfiniteQuery-BrWjCX7v.js";import"./AclEditor-DpHuOS67.js";import"./UserSearchBoxV2-DX0czZ-C.js";import"./useDebouncedEffect-BTOvpNyz.js";import"./use-deep-compare-effect.esm-CGRSmNRA.js";import"./uniq-CQgVzW-H.js";import"./without-qQ8_IAI5.js";import"./UserBadge-B_-Td5kg.js";import"./useUserBundle-hOPzwbRd.js";import"./useSuspenseQuery-CuIa-HUN.js";import"./SkeletonTable-bVZR_JBz.js";import"./MenuItem-BJbLDGlr.js";import"./Card-D2q1-b23.js";import"./Chip-BT3G1XLE.js";import"./Select-aab027f3.esm-BZsNg5Uj.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CsisTzN0.js";import"./TeamBadge-NgGjmUWT.js";import"./SkeletonButton-CXfcR02x.js";import"./SkeletonInlineBlock-BVfsrZM3.js";import"./SkeletonParagraph-BvDfq1qX.js";import"./IconSvgButton-DWIetKRW.js";import"./FormControlLabel-e808tZ2M.js";import"./Checkbox-DkVVye31.js";import"./SwitchBase-CdXIgPgp.js";import"./useUpdateAcl-Cul4rHcM.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
