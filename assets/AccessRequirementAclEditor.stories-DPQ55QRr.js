import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-PaLoqTAY.js";import{A as i}from"./AccessRequirementAclEditor-Qf8OZx6y.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BUGBqPjk.js";import"./index-CNYDnv7t.js";import"./_baseOrderBy-B-90sWET.js";import"./_baseIteratee-DxxZiUq1.js";import"./_baseMap-CS_8_rhf.js";import"./_baseEach-Dz90dg28.js";import"./useInfiniteQuery-tSWCMdH0.js";import"./AclEditor-B_InX6EN.js";import"./UserSearchBoxV2-b_bGyPaU.js";import"./useDebouncedEffect-1lC_bowX.js";import"./use-deep-compare-effect.esm-4TMuC-2s.js";import"./uniq-CSJiZhD9.js";import"./without-ByLzUNUf.js";import"./UserBadge-CVbBcasz.js";import"./useUserBundle-8xaYISQq.js";import"./SkeletonTable-zz4k46jG.js";import"./MenuItem-HGElYqD5.js";import"./Card-v0j-xphS.js";import"./Chip-CsQ7Z6OV.js";import"./Select-aab027f3.esm-RMistHs_.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-D-vtmvlK.js";import"./TeamBadge-CM2sug7A.js";import"./SkeletonButton-BnWhyhDQ.js";import"./SkeletonInlineBlock-Cw72BSZP.js";import"./SkeletonParagraph-BUTvJRRd.js";import"./IconSvgButton-CP2l3mmr.js";import"./FormControlLabel-B5WbGe-J.js";import"./Checkbox-D2fc_nRQ.js";import"./SwitchBase-8QTSdqSf.js";import"./useUpdateAcl-DxNHFRMm.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
