import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-CR9Kppk9.js";import{A as i}from"./AccessRequirementAclEditor-B-OvkeAi.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BwTB5lmZ.js";import"./index-CTj_7GLi.js";import"./_baseOrderBy-BYfxWAAx.js";import"./_baseIteratee-DMXgAEIk.js";import"./_baseMap-BF4oj2Kl.js";import"./_baseEach-mi46k9dW.js";import"./useInfiniteQuery-CfvRCTip.js";import"./AclEditor-rVIOVnK8.js";import"./UserSearchBoxV2-CTZsjJc3.js";import"./useDebouncedEffect-B4osGQWy.js";import"./use-deep-compare-effect.esm-DxKcMd8s.js";import"./uniq-Bmsqcuv3.js";import"./without-BJBdBmJs.js";import"./UserBadge-CJm2e0vF.js";import"./useUserBundle-BZz123Kg.js";import"./SkeletonTable-DJdtHoqT.js";import"./MenuItem-CatSzqG9.js";import"./Card-NdZ0o22H.js";import"./Chip-B6UQirNv.js";import"./Select-aab027f3.esm-D1BoHFrG.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-Bj4ioeqn.js";import"./TeamBadge-Wj2QxLQh.js";import"./SkeletonButton-DgY4znPZ.js";import"./SkeletonInlineBlock-D-RkmMYK.js";import"./SkeletonParagraph-DAQxrYxE.js";import"./IconSvgButton-DVCmQ8x8.js";import"./FormControlLabel-BQUL44l6.js";import"./Checkbox-wG1Izzux.js";import"./SwitchBase-CsuXxPzE.js";import"./useUpdateAcl-CVMBNp1M.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
