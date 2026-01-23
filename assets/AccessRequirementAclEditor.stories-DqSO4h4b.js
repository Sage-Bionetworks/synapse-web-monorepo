import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-C7rwSIbr.js";import{A as i}from"./AccessRequirementAclEditor-d89MEfTP.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CDGfE6As.js";import"./index-Di-Cz18U.js";import"./_baseOrderBy-B3i1xKb7.js";import"./_baseIteratee-RvX3gnAq.js";import"./_baseMap-DlS14YDy.js";import"./_baseEach-B7tQAwJE.js";import"./useQueries-Ch1NNzV5.js";import"./useInfiniteQuery-B_4JrFtn.js";import"./AclEditor-CuMpSb0m.js";import"./UserSearchBoxV2-DxIhjRAV.js";import"./useDebouncedEffect-1GohcXtG.js";import"./use-deep-compare-effect.esm-0TBSbA1r.js";import"./uniq-CuRUC0sc.js";import"./without-B3B-Xyvk.js";import"./UserBadge-DIVA4wpA.js";import"./useUserBundle-pxWWzqzb.js";import"./useSuspenseQuery-SFMk3h0j.js";import"./SkeletonTable-Dj6LF7El.js";import"./MenuItem-GxwqXfxd.js";import"./Card-B6N2Lo5X.js";import"./Chip-CdXxtxxp.js";import"./Select-aab027f3.esm-C_Z_0jsj.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BMtKaCno.js";import"./TeamBadge-BqM7WgXA.js";import"./SkeletonButton-5OEfN7I-.js";import"./SkeletonInlineBlock-9crGgDl7.js";import"./SkeletonParagraph-DljX6hdA.js";import"./IconSvgButton-Dyd7ysap.js";import"./FormControlLabel-BfYoWgTN.js";import"./Checkbox-F7R52Ayc.js";import"./SwitchBase-CdhWNWQs.js";import"./useUpdateAcl-DXUGlUXi.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
