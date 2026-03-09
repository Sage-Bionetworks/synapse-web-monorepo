import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-yrc_qHyu.js";import{A as i}from"./AccessRequirementAclEditor-ZikIef1o.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BahwTKJ-.js";import"./index-Cza2pBOV.js";import"./_baseOrderBy-ClsXy_tN.js";import"./_baseIteratee-B0J-KDKo.js";import"./_baseMap-CcYtFPTe.js";import"./_baseEach-DwOMPOPt.js";import"./useInfiniteQuery-DvtqKNa0.js";import"./AclEditor-BYa4KXZb.js";import"./UserSearchBoxV2-CB2yyEfG.js";import"./useDebouncedEffect-B3jH62DL.js";import"./use-deep-compare-effect.esm-DUwYhQ3T.js";import"./uniq-CJYl14sy.js";import"./without-IPLqGso_.js";import"./UserBadge-C3OtX4ed.js";import"./useUserBundle-Di1cjl0z.js";import"./SkeletonTable-Cb2oJXC7.js";import"./MenuItem-DdsI2qtG.js";import"./Card-DPtRFUCi.js";import"./Chip-Bjj18pYr.js";import"./Select-aab027f3.esm-CJrNSNeJ.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DhTlMeaZ.js";import"./TeamBadge-amCiZPRK.js";import"./SkeletonButton-qQeUX2b-.js";import"./SkeletonInlineBlock-A6wMEVyL.js";import"./SkeletonParagraph-BFGPUajO.js";import"./IconSvgButton-D87rbBb-.js";import"./FormControlLabel-PA7GUpsR.js";import"./Checkbox-B2FAWXxm.js";import"./SwitchBase-Dr9vpGDU.js";import"./useUpdateAcl-ChwzVvLf.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
