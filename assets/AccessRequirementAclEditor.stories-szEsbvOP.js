import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-CtRRQlop.js";import{A as i}from"./AccessRequirementAclEditor-ByUr0jj6.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Cvhlmdj9.js";import"./index-6GE_fzjW.js";import"./_baseOrderBy-Bk1bsJnk.js";import"./_baseIteratee-BXQ1WM-F.js";import"./_baseMap-DwbT6tLf.js";import"./_baseEach-Hh6WIfXN.js";import"./useInfiniteQuery-SCJRjalP.js";import"./AclEditor-BOPmHouS.js";import"./UserSearchBoxV2-DSdTx4XR.js";import"./useDebouncedEffect-cQjc9s_a.js";import"./use-deep-compare-effect.esm-C0uoZ_oH.js";import"./uniq-Cv8YpuUH.js";import"./without-BusR9VnX.js";import"./UserBadge-euSgz4-X.js";import"./useUserBundle-B0DX8PZs.js";import"./SkeletonTable-DdWEF2Hw.js";import"./MenuItem-BQGtU2sS.js";import"./Card-zOjMR6J6.js";import"./Chip-CNSuJPte.js";import"./Select-aab027f3.esm-XUK4oJCg.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CBBJMgGn.js";import"./TeamBadge-_s2u8MYC.js";import"./SkeletonButton-pOxqmMp7.js";import"./SkeletonInlineBlock-DEN7Z-Ku.js";import"./SkeletonParagraph-B1xPIO3Y.js";import"./IconSvgButton-EG8aUGof.js";import"./FormControlLabel-BNm1JdZT.js";import"./Checkbox-cEqZeYxj.js";import"./SwitchBase-DDTU8e8q.js";import"./useUpdateAcl-yHNE6Y_u.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const ee=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,ee as __namedExportsOrder,$ as default};
