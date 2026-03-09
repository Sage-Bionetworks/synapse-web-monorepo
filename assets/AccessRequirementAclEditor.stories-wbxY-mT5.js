import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-CCrcZxgU.js";import{A as i}from"./AccessRequirementAclEditor-DgtCMi3M.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BQdyOVUc.js";import"./index-DOETxQEh.js";import"./_baseOrderBy-D6U9sUP-.js";import"./_baseIteratee-DKTdiFzP.js";import"./_baseMap-BMwtKdev.js";import"./_baseEach-w-ECc3U0.js";import"./useInfiniteQuery-1J2BPHjO.js";import"./AclEditor-ChY4TSP_.js";import"./UserSearchBoxV2-DOTN9-Mx.js";import"./useDebouncedEffect-C8ke_a0a.js";import"./use-deep-compare-effect.esm-DIYMX9jp.js";import"./uniq-C5y9uiBh.js";import"./without-DvwL1Z7T.js";import"./UserBadge-foBknIQ2.js";import"./useUserBundle-BX_9QzHX.js";import"./SkeletonTable-Ba707JDB.js";import"./MenuItem-BOrJnNIc.js";import"./Card-B7y7fXMD.js";import"./Chip-BosvP6Bi.js";import"./Select-aab027f3.esm-CpiUxLQo.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BYvSduTj.js";import"./TeamBadge-C1b2KqY0.js";import"./SkeletonButton-BtsVrZX-.js";import"./SkeletonInlineBlock-D21wux6D.js";import"./SkeletonParagraph--DCUjqtN.js";import"./IconSvgButton-CVXquev8.js";import"./FormControlLabel-4WFQ0_kJ.js";import"./Checkbox-CTa9HHu3.js";import"./SwitchBase-Bn9II5pr.js";import"./useUpdateAcl-BA98BLLm.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
