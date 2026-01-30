import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-DuFc9wy7.js";import{A as i}from"./AccessRequirementAclEditor-B7NrGPet.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CvmgBl8a.js";import"./index-CH5M0AIg.js";import"./_baseOrderBy-DE_-pFzz.js";import"./_baseIteratee-qsGxLCcA.js";import"./_baseMap-CQziI25s.js";import"./_baseEach-BR_mWg9y.js";import"./useQueries-DQWP9YtM.js";import"./useInfiniteQuery-DzgY0_q9.js";import"./AclEditor-Cty_qqNs.js";import"./UserSearchBoxV2-DAPeifG9.js";import"./useDebouncedEffect-_d4wlOVi.js";import"./use-deep-compare-effect.esm-Bdc5x1y7.js";import"./uniq-DF_zmgwE.js";import"./without-DRrBpKd8.js";import"./UserBadge-B3eZrs9B.js";import"./useUserBundle-Dse17CN3.js";import"./useSuspenseQuery-DxSHSM8_.js";import"./SkeletonTable-9HY8re28.js";import"./MenuItem-BaPxBIGw.js";import"./Card-DG5CjRLq.js";import"./Chip-Bhz-2AzF.js";import"./Select-aab027f3.esm-BN-pE_5t.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-C3zOagyf.js";import"./TeamBadge-C6-IDH2J.js";import"./SkeletonButton-p5NHVcC3.js";import"./SkeletonInlineBlock-DWi7tVQO.js";import"./SkeletonParagraph-DXhZKBI2.js";import"./IconSvgButton-BBq60U-3.js";import"./FormControlLabel-Dadrkpu7.js";import"./Checkbox-Dx3FyEFW.js";import"./SwitchBase-XjUV0H1u.js";import"./useUpdateAcl-BsiLURmK.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
