import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-BjUpq5xd.js";import{A as i}from"./AccessRequirementAclEditor-B_oiFHLm.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Bx9h85Ai.js";import"./index-DbW4RfeC.js";import"./_baseOrderBy-DorvlhIH.js";import"./_baseIteratee-CH7JnBeO.js";import"./_baseMap-C1Geoiqh.js";import"./_baseEach-CpXFuCDm.js";import"./useQueries-Cqwk_xQ6.js";import"./useInfiniteQuery-BQLrsI8-.js";import"./AclEditor-DWDLa4Rp.js";import"./UserSearchBoxV2-BW_84TSm.js";import"./useDebouncedEffect-mFtE3sXH.js";import"./use-deep-compare-effect.esm-DkS9_zp9.js";import"./uniq-C8TjA6Un.js";import"./without-Bl5_wLKD.js";import"./UserBadge-DSJf_GP4.js";import"./useUserBundle-CjiLCz0M.js";import"./useSuspenseQuery-DbgujXvY.js";import"./SkeletonTable-B-Y_KPUW.js";import"./MenuItem-CC-RPPM2.js";import"./Card-CJg664IM.js";import"./Chip-iDCojdQO.js";import"./Select-aab027f3.esm-VpRjCNLw.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CDa7brDZ.js";import"./TeamBadge-D_XBOhEc.js";import"./SkeletonButton-CV3RH36o.js";import"./SkeletonInlineBlock-ANrbFXbS.js";import"./SkeletonParagraph-C60Mi91l.js";import"./IconSvgButton--2f7MFgh.js";import"./FormControlLabel-DmdTSbMj.js";import"./Checkbox-CS3hOzCE.js";import"./SwitchBase-Bo9gKiR2.js";import"./useUpdateAcl-DxQfRnKa.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
