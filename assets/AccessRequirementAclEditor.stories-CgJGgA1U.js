import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-DIHgldxa.js";import{A as i}from"./AccessRequirementAclEditor-Cs0ppHdy.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BXImRjuM.js";import"./index-DnH41gKI.js";import"./_baseOrderBy-ASpvx6Fd.js";import"./_baseIteratee-Co0Mhj_4.js";import"./_baseMap-DOg7hwfO.js";import"./_baseEach-BM-VXKp0.js";import"./useInfiniteQuery-C7SfxOXc.js";import"./AclEditor-BHqZudt_.js";import"./UserSearchBoxV2-Bn-E5-fg.js";import"./useDebouncedEffect-6ML1Mvmn.js";import"./use-deep-compare-effect.esm-DS48TQUp.js";import"./uniq-BY1boyVs.js";import"./without-tBnXhLhx.js";import"./UserBadge-wF921RXQ.js";import"./useUserBundle-DlpivQb3.js";import"./SkeletonTable-kyH1U49B.js";import"./MenuItem-CAWhO3PR.js";import"./Card-CXOm8pHh.js";import"./Chip-RTYTkfR-.js";import"./Select-aab027f3.esm-CzA7hAL4.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-D-hzGlWk.js";import"./TeamBadge-g3mHkV8L.js";import"./SkeletonButton-CflRIFGp.js";import"./SkeletonInlineBlock-eDwQJ6BQ.js";import"./SkeletonParagraph-Bj2Sqp59.js";import"./IconSvgButton-J05qQvwh.js";import"./FormControlLabel-BU8VsySU.js";import"./Checkbox-B53VCuVQ.js";import"./SwitchBase-DMcEJh9k.js";import"./useUpdateAcl-DgjEiXDi.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
