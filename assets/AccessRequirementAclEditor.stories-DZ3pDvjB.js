import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-DMCVtv3C.js";import{A as i}from"./AccessRequirementAclEditor-V01mnwmK.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DW2ctlq7.js";import"./index-dVTjtAYj.js";import"./_baseOrderBy-Bt6OsKEx.js";import"./_baseIteratee-C328X4kO.js";import"./_baseMap-CqR0YY-2.js";import"./_baseEach-L2UrfanQ.js";import"./useInfiniteQuery-BJNbTrM6.js";import"./AclEditor-Dtv5vada.js";import"./UserSearchBoxV2-CFoD4tL0.js";import"./useDebouncedEffect-D01tpaMV.js";import"./use-deep-compare-effect.esm-2eBdksMj.js";import"./uniq-CjSpefvW.js";import"./without-ND3uA18G.js";import"./UserBadge-Da6ct2Rq.js";import"./useUserBundle-zBSwUa6X.js";import"./SkeletonTable-IfcvYixP.js";import"./MenuItem-C6FnBLsu.js";import"./Card-3uIRYSsK.js";import"./Chip-U5DUeNga.js";import"./Select-aab027f3.esm-CZ7vEBrD.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DbQF_63d.js";import"./TeamBadge-uhOpMpqh.js";import"./SkeletonButton-DUnRwbBy.js";import"./SkeletonInlineBlock-BvYhcS6U.js";import"./SkeletonParagraph-DBOvbC1y.js";import"./IconSvgButton-Ct0sKt_K.js";import"./FormControlLabel-lt0TjqJi.js";import"./Checkbox-DcdUAgDt.js";import"./SwitchBase-CZ_AC8D4.js";import"./useUpdateAcl-DN4rW-dw.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
