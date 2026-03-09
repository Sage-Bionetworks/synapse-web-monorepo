import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-CIPlMaLT.js";import{A as i}from"./AccessRequirementAclEditor-QrLVps3G.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements--DGVu5sD.js";import"./index-Bv4HrMwv.js";import"./_baseOrderBy-DYXHbJkm.js";import"./_baseIteratee-B2ldj8aD.js";import"./_baseMap-CdpLgayS.js";import"./_baseEach-CqCzLPLD.js";import"./useInfiniteQuery-CTnmUoN7.js";import"./AclEditor-_Fd-FSuD.js";import"./UserSearchBoxV2-eX_TL4jF.js";import"./useDebouncedEffect-DGVqyScO.js";import"./use-deep-compare-effect.esm-CII-ykOk.js";import"./uniq-DZ5zy0KT.js";import"./without-CjdV3gl3.js";import"./UserBadge-BE1Nldxc.js";import"./useUserBundle-o77XsN2e.js";import"./SkeletonTable-CWf8URW0.js";import"./MenuItem-D7kngZjY.js";import"./Card-C5MMO-uO.js";import"./Chip-CesnYDs9.js";import"./Select-aab027f3.esm-Ckg3VF7r.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BtU8R2nS.js";import"./TeamBadge-CNkiDRvW.js";import"./SkeletonButton-BYZF9tG6.js";import"./SkeletonInlineBlock-1S1r7zTT.js";import"./SkeletonParagraph--qeTTP7n.js";import"./IconSvgButton-CjMFK2QZ.js";import"./FormControlLabel-_mvSb2kF.js";import"./Checkbox-DQIchTi2.js";import"./SwitchBase-CIwH6QQ1.js";import"./useUpdateAcl-CV69OUYg.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
