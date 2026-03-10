import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-DJOT8ubk.js";import{A as i}from"./AccessRequirementAclEditor-D9UBUt08.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CkBXklLr.js";import"./index-C3UiH5jH.js";import"./_baseOrderBy-LZ7a3IHt.js";import"./_baseIteratee-CSLaR471.js";import"./_baseMap-ffY1WrHn.js";import"./_baseEach-C7K8H9C3.js";import"./useInfiniteQuery-D5oLhJn7.js";import"./AclEditor-m9sXnT9B.js";import"./UserSearchBoxV2-BVQeXXNu.js";import"./useDebouncedEffect-CPUN2jgM.js";import"./use-deep-compare-effect.esm-CUhLaRS3.js";import"./uniq-zh-G_n8z.js";import"./without-C6w_ww88.js";import"./UserBadge-BlJ5RAMM.js";import"./useUserBundle-B3bDvO5I.js";import"./SkeletonTable-DlP5X3HC.js";import"./MenuItem-D1_UwcJ_.js";import"./Card-CGE0J5vP.js";import"./Chip-OZ5AEEU1.js";import"./Select-aab027f3.esm-CZLoHAX2.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-Fg1g__9l.js";import"./TeamBadge-CY2y4Z_w.js";import"./SkeletonButton-AJ5Zwmr0.js";import"./SkeletonInlineBlock-x0qIf0wc.js";import"./SkeletonParagraph-COpY1z9l.js";import"./IconSvgButton-C1EJPQ7T.js";import"./FormControlLabel--J53tQKK.js";import"./Checkbox-DIxTHw96.js";import"./SwitchBase-Dh2EEgQv.js";import"./useUpdateAcl-DHaXKUSV.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
