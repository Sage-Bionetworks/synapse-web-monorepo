import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-B7gyTvXJ.js";import{A as i}from"./AccessRequirementAclEditor-Bpa2rDd_.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-C-hV9llN.js";import"./index-WdAvK5aU.js";import"./_baseOrderBy-hldRTRhc.js";import"./_baseIteratee-XgjUyU1H.js";import"./_baseMap-DOtyuz8m.js";import"./_baseEach-D6h0LkgA.js";import"./useInfiniteQuery-Cp7Cpj3Z.js";import"./AclEditor-DYdvNJzd.js";import"./UserSearchBoxV2-D9o4ONtp.js";import"./useDebouncedEffect-CcTkKR7d.js";import"./use-deep-compare-effect.esm-CaCjzTGw.js";import"./uniq-dO9anJPL.js";import"./without-CVJZHIBe.js";import"./UserBadge-qo_IX7jY.js";import"./useUserBundle-CZajkvxD.js";import"./SkeletonTable-DjMRvgKw.js";import"./MenuItem-Dou85YW3.js";import"./Card-DfwGulL0.js";import"./Chip-CZ04a0tX.js";import"./Select-aab027f3.esm-DM7OAWBa.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-PfJiqkmt.js";import"./TeamBadge-CthxkR9A.js";import"./SkeletonButton-BISD75XD.js";import"./SkeletonInlineBlock-w4q-zSuw.js";import"./SkeletonParagraph-DmG5QWjf.js";import"./IconSvgButton-B-v1hUul.js";import"./FormControlLabel-Bou_0ZQR.js";import"./Checkbox-Bx85pmu-.js";import"./SwitchBase--Gsf_r-d.js";import"./useUpdateAcl-BpSVCYRL.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
