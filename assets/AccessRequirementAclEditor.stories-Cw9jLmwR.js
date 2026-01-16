import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-DtZANp-B.js";import{A as i}from"./AccessRequirementAclEditor-CF9tp_1X.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DKJISnrb.js";import"./index-B5Np9YOe.js";import"./_baseOrderBy-COsRBMWK.js";import"./_baseIteratee-i_0eWQoQ.js";import"./_baseMap-ClbmS9Vb.js";import"./_baseEach-CqjDDkAS.js";import"./useQueries-DPg4cEVG.js";import"./useInfiniteQuery-b0TCzgLZ.js";import"./AclEditor-DyQfdAaW.js";import"./UserSearchBoxV2-clokRx2E.js";import"./useDebouncedEffect-CITJkFGr.js";import"./use-deep-compare-effect.esm-PoAMkIBW.js";import"./uniq-CA_-bD3V.js";import"./without-H6LCfWeO.js";import"./UserBadge-CkxbVezJ.js";import"./useUserBundle-DQIqkLqA.js";import"./useSuspenseQuery-BRkWn9u5.js";import"./SkeletonTable-kAcnUL28.js";import"./MenuItem-D40N-lEz.js";import"./Card-Dphefr3a.js";import"./Chip-gjecgf-1.js";import"./Select-aab027f3.esm-OdrQLI6h.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BIGvN5HG.js";import"./TeamBadge-BQao1YEd.js";import"./SkeletonButton-BbY-5M8h.js";import"./SkeletonInlineBlock-ByZd8Fsz.js";import"./SkeletonParagraph-CHnJlCLJ.js";import"./IconSvgButton-BldxGer9.js";import"./FormControlLabel-DB2ZnRYr.js";import"./Checkbox-CC1LHSjN.js";import"./SwitchBase-Dyc_-KPc.js";import"./useUpdateAcl-iO7Ij6mi.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
