import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-ClE2Hy4B.js";import{A as i}from"./AccessRequirementAclEditor-lkprfNHQ.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BNiAadvi.js";import"./index-C7fdTBbx.js";import"./_baseOrderBy-BoH1BSDD.js";import"./_baseIteratee-CgCh-4yA.js";import"./_baseMap-B8ZbbJGp.js";import"./_baseEach-DuBrkErz.js";import"./useInfiniteQuery-JunBPFxO.js";import"./AclEditor-D3OuFGtw.js";import"./UserSearchBoxV2-CqyZcIiX.js";import"./useDebouncedEffect-D_mBy6yB.js";import"./use-deep-compare-effect.esm-DW0gLXFO.js";import"./uniq-BNyN2DCs.js";import"./without-BodogP-M.js";import"./UserBadge-CYUXPM6m.js";import"./useUserBundle-0g-k7q7C.js";import"./SkeletonTable-D7N707Oc.js";import"./MenuItem-BLx0eK9Y.js";import"./Card-C6ZtLTcC.js";import"./Chip-BpTWRkwH.js";import"./Select-aab027f3.esm-DXEOxMK1.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CNv7NjJC.js";import"./TeamBadge-Dx4q3YAA.js";import"./SkeletonButton-DSmPjAvU.js";import"./SkeletonInlineBlock-DYja8lR7.js";import"./SkeletonParagraph-Br74pmuK.js";import"./IconSvgButton-Ctuuxwsn.js";import"./FormControlLabel-SUMnMu_R.js";import"./Checkbox-MnArzcXf.js";import"./SwitchBase-8Qf5k-j0.js";import"./useUpdateAcl-Cy9PUses.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
