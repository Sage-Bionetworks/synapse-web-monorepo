import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-xmmb_I0l.js";import{A as i}from"./AccessRequirementAclEditor-COxdPGnx.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B7hNwYVJ.js";import"./index-lYHXK35I.js";import"./_baseOrderBy-C623CZoW.js";import"./_baseIteratee-BdxYwHJk.js";import"./_baseMap-CGzOi-md.js";import"./_baseEach-B1RTpd10.js";import"./useQueries-B6_MsPWT.js";import"./useInfiniteQuery-Dlr9EZ3N.js";import"./AclEditor-cSWqRJsD.js";import"./UserSearchBoxV2-DuM6LC6s.js";import"./useDebouncedEffect-BRRoY4Pd.js";import"./use-deep-compare-effect.esm-Bk5z4cMR.js";import"./uniq-Dle9qHow.js";import"./without-DT1JddDE.js";import"./UserBadge-BPn0fooo.js";import"./useUserBundle-CiacMnau.js";import"./useSuspenseQuery-B2gu81Lt.js";import"./SkeletonTable-jOb-G6tL.js";import"./MenuItem-PkdQuBZK.js";import"./Card-Bs3Zj2Gb.js";import"./Chip-5gf_Tn0T.js";import"./Select-aab027f3.esm-CyqaM6X1.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-B1e5dJDX.js";import"./TeamBadge-CLN4Npj3.js";import"./SkeletonButton-9FRcX2_1.js";import"./SkeletonInlineBlock-CLZ8B174.js";import"./SkeletonParagraph-BjPCkGoh.js";import"./IconSvgButton-jPfTkJr7.js";import"./FormControlLabel-CUoHWybp.js";import"./Checkbox-DX9286fe.js";import"./SwitchBase-rtiI9HZl.js";import"./useUpdateAcl-DgrJc7Fi.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
