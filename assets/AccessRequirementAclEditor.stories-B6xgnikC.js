import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-Caumy8OG.js";import{A as i}from"./AccessRequirementAclEditor-F70aBJLK.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-cfNKhQnY.js";import"./index-CS5uaYEv.js";import"./_baseOrderBy-BvVyt_uN.js";import"./_baseIteratee-DzjmW7wv.js";import"./_baseMap-B8jvX8FY.js";import"./_baseEach-BhkAZ48F.js";import"./useInfiniteQuery-BettF6mH.js";import"./AclEditor-Duwqlekv.js";import"./UserSearchBoxV2-CVqmuKlx.js";import"./useDebouncedEffect-Dxp3O6Ms.js";import"./use-deep-compare-effect.esm-w94gK5Iv.js";import"./uniq-8GX06W3w.js";import"./without-DzQSpwit.js";import"./UserBadge-D_bg6T3T.js";import"./useUserBundle-YBqMkgNg.js";import"./SkeletonTable-Cy3CPYvw.js";import"./MenuItem-C3S0i9k3.js";import"./Card-CcHhVuhh.js";import"./Chip-BD4K8GZ0.js";import"./Select-aab027f3.esm-lemzqpZg.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-uz5_kFYs.js";import"./TeamBadge-BRbRw6fE.js";import"./SkeletonButton-CJd-6_Rb.js";import"./SkeletonInlineBlock-Mrzyi1ZX.js";import"./SkeletonParagraph-tEoCsyXm.js";import"./IconSvgButton-B1WoDw1s.js";import"./FormControlLabel-D5JHQXeU.js";import"./Checkbox-MkkB8eUh.js";import"./SwitchBase-C6I4ypvl.js";import"./useUpdateAcl-M-xufBd-.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
