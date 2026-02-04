import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-C64n1GD8.js";import{A as i}from"./AccessRequirementAclEditor-CXB0RYb8.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-R8R2EY7s.js";import"./index-C-1MBf7J.js";import"./_baseOrderBy-DBvXkxJa.js";import"./_baseIteratee-DRcYnuUR.js";import"./_baseMap-BIWfE2OE.js";import"./_baseEach-5KfUbR-i.js";import"./useQueries-CI1-f4sD.js";import"./useInfiniteQuery-17Rp3FWY.js";import"./AclEditor-CtYJSF6-.js";import"./UserSearchBoxV2-CEOaBZBE.js";import"./useDebouncedEffect-B1LnpUgj.js";import"./use-deep-compare-effect.esm-DM9VHs1k.js";import"./uniq-DGMRWxbl.js";import"./without-C01j4c9t.js";import"./UserBadge-gsVQwvQr.js";import"./useUserBundle-D00teTqN.js";import"./useSuspenseQuery-DKR51829.js";import"./SkeletonTable-QL6vSy9n.js";import"./MenuItem-BnAVJRr4.js";import"./Card-BkBy63xK.js";import"./Chip-B6rIlUNr.js";import"./Select-aab027f3.esm-BnGTkP-J.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BDkiNsf3.js";import"./TeamBadge-BDXFLMIb.js";import"./SkeletonButton-BHX6f9gP.js";import"./SkeletonInlineBlock-CDYMy8y_.js";import"./SkeletonParagraph-Duc3bDvV.js";import"./IconSvgButton-ZI2NH7SN.js";import"./FormControlLabel-DFd8tF3Z.js";import"./Checkbox-D83KQWHy.js";import"./SwitchBase-D7SWinHy.js";import"./useUpdateAcl-BTmenhAr.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
