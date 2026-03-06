import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-CK9LwFro.js";import{A as i}from"./AccessRequirementAclEditor-C-l2LgW2.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DgSyxERp.js";import"./index-BisQv3gR.js";import"./_baseOrderBy-B7Ja_XJE.js";import"./_baseIteratee-D0W9oXXs.js";import"./_baseMap-BxMZGUb8.js";import"./_baseEach-D6x_jnH3.js";import"./useInfiniteQuery-D4l8wj4_.js";import"./AclEditor-vb1sQ5Eg.js";import"./UserSearchBoxV2-DeyLaBhj.js";import"./useDebouncedEffect-B_4plHpu.js";import"./use-deep-compare-effect.esm-SLXqSMue.js";import"./uniq-CxS-uYLh.js";import"./without-3tFQiPJ0.js";import"./UserBadge-D66c8QAm.js";import"./useUserBundle-CbV-ctfJ.js";import"./SkeletonTable-ycMK6xwc.js";import"./MenuItem-4nfAFdIM.js";import"./Card-Da6m2K6p.js";import"./Chip-CRLyozh0.js";import"./Select-aab027f3.esm-D86d0Vyl.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CBm6RPBU.js";import"./TeamBadge-Bss-ZnjZ.js";import"./SkeletonButton-BDlPnboj.js";import"./SkeletonInlineBlock-CxEf_EaS.js";import"./SkeletonParagraph-BI7CR1TI.js";import"./IconSvgButton-tCdyhzIP.js";import"./FormControlLabel-By4Xq7o_.js";import"./Checkbox-Te6sd5RK.js";import"./SwitchBase-BsMN4EVq.js";import"./useUpdateAcl-EhmNO8aM.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
