import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-BfDC4V0n.js";import{A as i}from"./AccessRequirementAclEditor-CyOoXh6c.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Cpf5-i3V.js";import"./index-D_SprHXq.js";import"./_baseOrderBy-CAV9pwT_.js";import"./_baseIteratee-CiW54l-R.js";import"./_baseMap-CVZ_hys5.js";import"./_baseEach-DqL3VxUs.js";import"./useInfiniteQuery-DM4nXvzm.js";import"./AclEditor-BQ6hZ72-.js";import"./UserSearchBoxV2-DYNA8OjD.js";import"./useDebouncedEffect-Bf5TrMkB.js";import"./use-deep-compare-effect.esm-BZPKmMbb.js";import"./uniq-D_5SEMlC.js";import"./without-CFBaUOGN.js";import"./UserBadge-BVCVeHNC.js";import"./useUserBundle-CgRRg9_x.js";import"./SkeletonTable-PdwLXVTh.js";import"./MenuItem-Dqvfd__a.js";import"./Card-BWuYZE85.js";import"./Chip-B3QjRI9f.js";import"./Select-aab027f3.esm-BouzVQCo.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BI-y8_m0.js";import"./TeamBadge-IZ63uKCk.js";import"./SkeletonButton-kWC2bpgD.js";import"./SkeletonInlineBlock-Dr1CyrsC.js";import"./SkeletonParagraph-DUo_BCXn.js";import"./IconSvgButton-C1Hdlrmu.js";import"./FormControlLabel-BC6aY042.js";import"./Checkbox-dwhzXcL9.js";import"./SwitchBase-D88Qn-kD.js";import"./useUpdateAcl-CjC1yGRB.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
