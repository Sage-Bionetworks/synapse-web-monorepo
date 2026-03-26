import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-D7hmFFD3.js";import{A as i}from"./AccessRequirementAclEditor-D34nYn3N.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B_xJJQtS.js";import"./index-DkPQYPLq.js";import"./_baseOrderBy-pC3KBgwM.js";import"./_baseIteratee-FZWzk7ua.js";import"./_baseMap-DsRa866f.js";import"./_baseEach-CLfxsE0k.js";import"./useInfiniteQuery-D13lTl67.js";import"./AclEditor-DuKeiVKL.js";import"./UserSearchBoxV2-pzLFwmAF.js";import"./useDebouncedEffect-CGbyTEUz.js";import"./use-deep-compare-effect.esm-D5U3OuuB.js";import"./uniq-BXe1zYGf.js";import"./without-BhOOg42B.js";import"./UserBadge-Ba74d-w4.js";import"./useUserBundle-DevMQvcY.js";import"./SkeletonTable-DwOxfj-6.js";import"./MenuItem-seRjpzQC.js";import"./Card-CUtKvHak.js";import"./Chip-CwHKBceN.js";import"./Select-aab027f3.esm-EDX_gZZ3.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DhkRd2TB.js";import"./TeamBadge-DRtca3gu.js";import"./SkeletonButton-BRppMIVv.js";import"./SkeletonInlineBlock-J2_tfC8B.js";import"./SkeletonParagraph-RrPVfHxb.js";import"./IconSvgButton-Bg48--ql.js";import"./FormControlLabel-DsGvY4MC.js";import"./Checkbox-DmdgFLw0.js";import"./SwitchBase-Dm2o857r.js";import"./useUpdateAcl-BqL2nKqt.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
