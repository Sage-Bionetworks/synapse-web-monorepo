import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-CKkRwo5v.js";import{A as i}from"./AccessRequirementAclEditor-BRK6ypRv.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DRtemz2c.js";import"./index-T5CXHaiH.js";import"./_baseOrderBy-Bx7CQqGV.js";import"./_baseIteratee-COPrDePY.js";import"./_baseMap-B36GknGl.js";import"./_baseEach-BM2npHyS.js";import"./useQueries-DAr7Xmz3.js";import"./useInfiniteQuery-D91Hmxok.js";import"./AclEditor-CPZgy0fl.js";import"./UserSearchBoxV2-DHQoqBnU.js";import"./useDebouncedEffect-CAGoM_2X.js";import"./use-deep-compare-effect.esm-DgxJF9xG.js";import"./uniq-DTweKclO.js";import"./without-DxRhbpmN.js";import"./UserBadge-B7iJoUd3.js";import"./useUserBundle-Biq_JT-q.js";import"./useSuspenseQuery-vP5ehhR0.js";import"./SkeletonTable-bRkZRSb0.js";import"./MenuItem-CL505aRp.js";import"./Card-Dl_jNj30.js";import"./Chip-Dbbmbwqm.js";import"./Select-aab027f3.esm-DGHcyJGi.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BnU7Tnmz.js";import"./TeamBadge-DzxoZvE5.js";import"./SkeletonButton-DLboZNuU.js";import"./SkeletonInlineBlock-DfpGMDXv.js";import"./SkeletonParagraph-DGFhmrY6.js";import"./IconSvgButton-CSH02ijh.js";import"./FormControlLabel-RfEoG-bp.js";import"./Checkbox-CrdVE499.js";import"./SwitchBase-BmMmO8FL.js";import"./useUpdateAcl-CKCk3McA.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
