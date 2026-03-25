import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-BnwOOxVB.js";import{A as i}from"./AccessRequirementAclEditor-C_AvW9Mr.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DZU0KuhL.js";import"./index-BWFWUV0I.js";import"./_baseOrderBy-EvR_akUg.js";import"./_baseIteratee-B9myDPIW.js";import"./_baseMap-Bsco3WZ-.js";import"./_baseEach-D1jaI2sf.js";import"./useInfiniteQuery-1s6_iIB7.js";import"./AclEditor-7scYZMqN.js";import"./UserSearchBoxV2-BHo-abXU.js";import"./useDebouncedEffect-ClluEaXj.js";import"./use-deep-compare-effect.esm-EqALDLgs.js";import"./uniq-D2uxdsYI.js";import"./without-BH-2tddu.js";import"./UserBadge-CqwZjHo1.js";import"./useUserBundle-DzFa2F0q.js";import"./SkeletonTable-Dk7rdMrJ.js";import"./MenuItem-DUMDRQOA.js";import"./Card-Dxpi6uBT.js";import"./Chip-B5d3JXK1.js";import"./Select-aab027f3.esm-Dlq9pVOt.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-sgJ036Xk.js";import"./TeamBadge-ChW0ghnZ.js";import"./SkeletonButton-Cx1YwYzw.js";import"./SkeletonInlineBlock-CZWtZtay.js";import"./SkeletonParagraph-Bx2C1bW5.js";import"./IconSvgButton-BTsTXTEQ.js";import"./FormControlLabel-D9xAaYtM.js";import"./Checkbox-Pl8JmO1l.js";import"./SwitchBase-D_8PvPPY.js";import"./useUpdateAcl-DWstYpIX.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
