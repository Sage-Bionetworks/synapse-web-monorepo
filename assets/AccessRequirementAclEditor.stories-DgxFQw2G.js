import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-DCS9ymbE.js";import{A as i}from"./AccessRequirementAclEditor-B9LXjIir.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CFNwm_cr.js";import"./index-BGH17Atw.js";import"./_baseOrderBy-W-KymVih.js";import"./_baseIteratee-3beHZvMb.js";import"./_baseMap-DFIEFFTP.js";import"./_baseEach-Bjn0m_k4.js";import"./useQueries-DqiFrR4N.js";import"./useInfiniteQuery-JlDeuLpM.js";import"./AclEditor-CBPopVgN.js";import"./UserSearchBoxV2-tiU_-Nzz.js";import"./useDebouncedEffect-B6eVLILS.js";import"./use-deep-compare-effect.esm-Cc5dY3LP.js";import"./uniq-m_ra2s96.js";import"./without-vdyg91Pr.js";import"./UserBadge-BFUo9T0u.js";import"./useUserBundle-Cgt8UTAe.js";import"./useSuspenseQuery-CJw-BZwU.js";import"./SkeletonTable-Mr15HLUy.js";import"./MenuItem-CXS0feUF.js";import"./Card-C0p0NRKA.js";import"./Chip-DizRxpNc.js";import"./Select-aab027f3.esm-Do0pg9SH.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-Cia2NSl2.js";import"./TeamBadge-CTroROau.js";import"./SkeletonButton-D3cSL18R.js";import"./SkeletonInlineBlock-BqZQuSX9.js";import"./SkeletonParagraph-CpW8pclE.js";import"./IconSvgButton-ze3V9LJR.js";import"./FormControlLabel-CCWzOTTa.js";import"./Checkbox-LIg6B-fT.js";import"./SwitchBase-C1rXlQwU.js";import"./useUpdateAcl-BopN3Dy9.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
