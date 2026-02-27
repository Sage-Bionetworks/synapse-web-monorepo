import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-RNQ9FFfL.js";import{A as i}from"./AccessRequirementAclEditor-D1DALT1M.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BpcWwB_F.js";import"./index-BQpHgqbu.js";import"./_baseOrderBy-BAC9mgPR.js";import"./_baseIteratee-DejOueIh.js";import"./_baseMap-By2r3gd3.js";import"./_baseEach-D2x73z0-.js";import"./useInfiniteQuery-BxfOt_4y.js";import"./AclEditor-D_ZZ6Jo8.js";import"./UserSearchBoxV2-BaYbTtSh.js";import"./useDebouncedEffect-BfX1Nvoe.js";import"./use-deep-compare-effect.esm-CR1MGTYv.js";import"./uniq-BtLabKOw.js";import"./without-dxVEvsO8.js";import"./UserBadge-DfL9o1vu.js";import"./useUserBundle-DBFUriey.js";import"./SkeletonTable-CWFE2ocy.js";import"./MenuItem-CB_dWfsU.js";import"./Card-COObVNPF.js";import"./Chip-Dz2JQ-pG.js";import"./Select-aab027f3.esm-fVrVd46F.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-B5BaJdL5.js";import"./TeamBadge-DUZLoM7e.js";import"./SkeletonButton-D0L_5F4L.js";import"./SkeletonInlineBlock-Bh2U8Vk5.js";import"./SkeletonParagraph-TNDyKrCR.js";import"./IconSvgButton-BcZJmfpL.js";import"./FormControlLabel-CQvWlPja.js";import"./Checkbox-C6yQUJRz.js";import"./SwitchBase-Djcezb5v.js";import"./useUpdateAcl-DekE3OS8.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
