import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-DmQVC8QI.js";import{A as i}from"./AccessRequirementAclEditor-CaM0RJP8.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Du84pJUO.js";import"./index-Br7gKF9R.js";import"./_baseOrderBy-Bsm9m9CU.js";import"./_baseIteratee-D0N2ShRx.js";import"./_baseMap-DQ_Afyp5.js";import"./_baseEach-ClM1nIwI.js";import"./useQueries-D8oiAeRD.js";import"./useInfiniteQuery-B2-G7M8y.js";import"./AclEditor-DEnpAq2_.js";import"./UserSearchBoxV2-jRrANhKJ.js";import"./useDebouncedEffect-BlGCI4v1.js";import"./use-deep-compare-effect.esm-BurpvcDK.js";import"./uniq-BTcnuA8-.js";import"./without-BKey7zIm.js";import"./UserBadge-BHL22CUj.js";import"./useUserBundle-BJGdVvY0.js";import"./useSuspenseQuery-BohpWjm9.js";import"./SkeletonTable-C27BPd4C.js";import"./MenuItem-CiiNgcaW.js";import"./Card-sv0DQAow.js";import"./Chip-OD2C4O6J.js";import"./Select-aab027f3.esm-29WMXchE.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-bGeChQxr.js";import"./TeamBadge-BJ0OyhIv.js";import"./SkeletonButton-DiNloKU2.js";import"./SkeletonInlineBlock-DroApun6.js";import"./SkeletonParagraph-uPmYqKww.js";import"./IconSvgButton-DKpO3lpB.js";import"./FormControlLabel-BfYMzRqL.js";import"./Checkbox-CLoF6Bfl.js";import"./SwitchBase-CXyOGGZH.js";import"./useUpdateAcl-Npggqy4f.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
