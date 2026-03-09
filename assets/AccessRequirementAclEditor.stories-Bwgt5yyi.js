import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-BVhGOjHR.js";import{A as i}from"./AccessRequirementAclEditor-BssRIVEg.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Q8h5xGM7.js";import"./index-B8gzQCaZ.js";import"./_baseOrderBy-CVvrlgtk.js";import"./_baseIteratee-Ck-dt1hT.js";import"./_baseMap-C3_dlTWv.js";import"./_baseEach-DdsX8oqy.js";import"./useInfiniteQuery-DBGOhcL0.js";import"./AclEditor-YUpXB1Ym.js";import"./UserSearchBoxV2-BI9Bxnj0.js";import"./useDebouncedEffect-DBspAfrD.js";import"./use-deep-compare-effect.esm-6jG1hbRQ.js";import"./uniq-CigljoQU.js";import"./without-BALSkZZA.js";import"./UserBadge-CDmVMUNv.js";import"./useUserBundle-dXzxNskR.js";import"./SkeletonTable-DsxcrpLy.js";import"./MenuItem-CXPtROXT.js";import"./Card-DxFsJWCw.js";import"./Chip-DZiNGCO2.js";import"./Select-aab027f3.esm-C-jX2mGm.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DjHTXwwq.js";import"./TeamBadge-Ch7SIx9a.js";import"./SkeletonButton-u72hHay5.js";import"./SkeletonInlineBlock-BxY577KC.js";import"./SkeletonParagraph-mwYfRmjy.js";import"./IconSvgButton-BNeuqtBb.js";import"./FormControlLabel-37G6IIQa.js";import"./Checkbox-DfTEr6Wc.js";import"./SwitchBase-D5USTId4.js";import"./useUpdateAcl-BoeT9-Lx.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
