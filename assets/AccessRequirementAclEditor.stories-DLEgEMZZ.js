import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-BSxjDfu3.js";import{A as i}from"./AccessRequirementAclEditor-DRPBZp7X.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CMI7HBD0.js";import"./index-yQ4gO9kt.js";import"./_baseOrderBy-BqQz3J1A.js";import"./_baseIteratee-B8HVuStq.js";import"./_baseMap-cqYdZT4m.js";import"./_baseEach-CdWoyuXb.js";import"./useQueries-D2o2etJf.js";import"./useInfiniteQuery-C94oUW7N.js";import"./AclEditor-DvdMPYnh.js";import"./UserSearchBoxV2-B-bMBan7.js";import"./useDebouncedEffect-DspxW6NL.js";import"./use-deep-compare-effect.esm-DnLaWVar.js";import"./uniq-DnnhAaXm.js";import"./without-D6_IH4Oy.js";import"./UserBadge-GA8Aaaz5.js";import"./useUserBundle-CJruWbUT.js";import"./useSuspenseQuery-B5B_wZvU.js";import"./SkeletonTable-Bd6B-VEF.js";import"./MenuItem-DlHsRU9I.js";import"./Card-Ch_3DhEC.js";import"./Chip-DILx9paE.js";import"./Select-aab027f3.esm-iFB6L2qP.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BP4SHFbU.js";import"./TeamBadge-B-VLPGW-.js";import"./SkeletonButton-Bu5XGQ_G.js";import"./SkeletonInlineBlock-B21sfNKh.js";import"./SkeletonParagraph-ssYRCcJC.js";import"./IconSvgButton-D6pUjBjP.js";import"./FormControlLabel-B8jQ_ctF.js";import"./Checkbox-C2LcxS2l.js";import"./SwitchBase-CWG7NOcH.js";import"./useUpdateAcl-DmudfqxY.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const se=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,se as __namedExportsOrder,re as default};
