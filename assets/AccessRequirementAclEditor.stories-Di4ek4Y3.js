import{M as E,g as c,a as o,b as p,c as R,r as m,j as e,B as u,P as A}from"./iframe-DPduZJWc.js";import{A as i}from"./AccessRequirementAclEditor-CNMDP_yk.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BASpsQ9K.js";import"./index-B0RvRGln.js";import"./_baseOrderBy-36WQqxTb.js";import"./_baseIteratee-BLVygEfb.js";import"./_baseMap-14uFFhMQ.js";import"./_baseEach-1m_fayOA.js";import"./useInfiniteQuery-B39iFfDz.js";import"./AclEditor-DCNfkPt4.js";import"./UserSearchBoxV2-CdF2LXRM.js";import"./useDebouncedEffect-nRzyOxJ7.js";import"./use-deep-compare-effect.esm-B4WO_muK.js";import"./uniq-DV-Xgi6k.js";import"./without-tX-9QcUq.js";import"./UserBadge-CNWRLDr6.js";import"./useUserBundle-B2AE4q5G.js";import"./SkeletonTable-BeG2UwMn.js";import"./MenuItem-1gOTYJyP.js";import"./Card-BKd7BOj_.js";import"./Chip-CpsfZ-DY.js";import"./Select-aab027f3.esm-BrWon-Qw.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-Boi2h605.js";import"./TeamBadge-C_lNBz9e.js";import"./SkeletonButton-CKk23r94.js";import"./SkeletonInlineBlock-DbjHmb1S.js";import"./SkeletonParagraph-D5PcDpGR.js";import"./IconSvgButton-pcP5sbUT.js";import"./FormControlLabel-BpkEw7nL.js";import"./Checkbox-Ds1rV2cF.js";import"./SwitchBase-Fu9-MOwD.js";import"./useUpdateAcl-CmIrdR97.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(A,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(R)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
