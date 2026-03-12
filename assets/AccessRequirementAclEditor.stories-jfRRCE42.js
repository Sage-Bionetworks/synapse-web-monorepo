import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-Dj9QuIYm.js";import{A as i}from"./AccessRequirementAclEditor-BUB2mc_U.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BZitSFn0.js";import"./index-BLkPSDKJ.js";import"./_baseOrderBy-YfcBlpNZ.js";import"./_baseIteratee-DhNtCOv6.js";import"./_baseMap-D-dsez5o.js";import"./_baseEach-DeWBIhgR.js";import"./useInfiniteQuery-BlRW4UqT.js";import"./AclEditor-CfrpPik7.js";import"./UserSearchBoxV2-C1rywZBK.js";import"./useDebouncedEffect-CgExOeZy.js";import"./use-deep-compare-effect.esm-BBRMHuiL.js";import"./uniq-JQnUvl5O.js";import"./without-CiMSo5Rm.js";import"./UserBadge-DfzXK9k4.js";import"./useUserBundle-Be3ZpYDW.js";import"./SkeletonTable-rcTO73Uk.js";import"./MenuItem-Bpg2cwa6.js";import"./Card-Cb_raR4S.js";import"./Chip-Dc-U4nz3.js";import"./Select-aab027f3.esm-B68ReLdP.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BdPFnvvK.js";import"./TeamBadge-DHNGO4Qd.js";import"./SkeletonButton-iTrOeh7-.js";import"./SkeletonInlineBlock-D2uK1sRl.js";import"./SkeletonParagraph-8dZQFouk.js";import"./IconSvgButton-BvbgJiJC.js";import"./FormControlLabel-CPoAf6VC.js";import"./Checkbox-DGSgr0_P.js";import"./SwitchBase-DytbKUAu.js";import"./useUpdateAcl-CGzeQxl9.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
