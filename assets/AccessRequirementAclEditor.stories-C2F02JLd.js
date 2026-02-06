import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-CqOjta_N.js";import{A as i}from"./AccessRequirementAclEditor-BsghvXSK.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Dj24ol6H.js";import"./index-BRBOZzYG.js";import"./_baseOrderBy-CrOC6Mn0.js";import"./_baseIteratee-Qgts5el_.js";import"./_baseMap-DE06An5T.js";import"./_baseEach-DE_p8oHn.js";import"./useQueries-DQ-K6YXz.js";import"./useInfiniteQuery-BaCRejyT.js";import"./AclEditor-BSPKru6j.js";import"./UserSearchBoxV2-CuVQKUqF.js";import"./useDebouncedEffect-G9xT7YEM.js";import"./use-deep-compare-effect.esm-BUOODDvb.js";import"./uniq-Dl61YuRX.js";import"./without-GtTijs6J.js";import"./UserBadge-D2tCEW5C.js";import"./useUserBundle-D8JYfTyv.js";import"./useSuspenseQuery-BD3WNLbV.js";import"./SkeletonTable-BGlGLKIw.js";import"./MenuItem-DGqgHDXw.js";import"./Card-qx92vT-y.js";import"./Chip-9i0QEYWa.js";import"./Select-aab027f3.esm-g8nPODH5.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-Ciy7jFc1.js";import"./TeamBadge-LU9hsP02.js";import"./SkeletonButton-BR5YXC6L.js";import"./SkeletonInlineBlock-CN4aVK2u.js";import"./SkeletonParagraph-B4VFFfOl.js";import"./IconSvgButton-BKx5PYSX.js";import"./FormControlLabel-4STj1xWu.js";import"./Checkbox-DyGR3-VE.js";import"./SwitchBase-IqgR6dPG.js";import"./useUpdateAcl-BdmB5ZL0.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
