import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-2O6u4SzH.js";import{A as i}from"./AccessRequirementAclEditor-Bh0fIyUW.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BWgolwog.js";import"./index-D8WZJQs0.js";import"./_baseOrderBy-BUAxPvkr.js";import"./_baseIteratee-DQS7eQMK.js";import"./_baseMap-CKBkbJ2G.js";import"./_baseEach-hos6MCbv.js";import"./useInfiniteQuery-DbGbDORf.js";import"./AclEditor-BVeD42Ir.js";import"./UserSearchBoxV2-0Cicch3p.js";import"./useDebouncedEffect-BL3vMKQV.js";import"./use-deep-compare-effect.esm-1HSucEhU.js";import"./uniq-BZsjCJJT.js";import"./without-DEpKL-0v.js";import"./UserBadge-CMOF3-F_.js";import"./useUserBundle-BSscApBt.js";import"./SkeletonTable-Cg2ViMwY.js";import"./MenuItem-C5eSP5TX.js";import"./Card-CmTr6plw.js";import"./Chip-Dc7Q2EIH.js";import"./Select-aab027f3.esm-DdB2Gk_N.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-C-mlQQMW.js";import"./TeamBadge-BSqbTOYM.js";import"./SkeletonButton-CiuXBI7w.js";import"./SkeletonInlineBlock-BxhXmgi0.js";import"./SkeletonParagraph-0TQyd4RC.js";import"./IconSvgButton-BcyYT9Dp.js";import"./FormControlLabel-CSDFCuV7.js";import"./Checkbox-Cso4WlBt.js";import"./SwitchBase-DBYBJcDT.js";import"./useUpdateAcl-CTDBwJhf.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
