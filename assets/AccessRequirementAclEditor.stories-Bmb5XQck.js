import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-CsSu4aY1.js";import{A as i}from"./AccessRequirementAclEditor-BOG_xExX.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BZAV3FFg.js";import"./index-JJ0tKNJq.js";import"./_baseOrderBy-BaS0z3jX.js";import"./_baseIteratee-gsTZcny-.js";import"./_baseMap-WrXwzA6l.js";import"./_baseEach-D0zvbrXD.js";import"./useInfiniteQuery-BqCjpHyD.js";import"./AclEditor-BSGPT4d5.js";import"./UserSearchBoxV2-CTiTbNHt.js";import"./useDebouncedEffect-BIpys10d.js";import"./use-deep-compare-effect.esm-DuqOxvpH.js";import"./uniq-BI-2V_2U.js";import"./without-usgq4tYB.js";import"./UserBadge-5GUAU772.js";import"./useUserBundle-D-Kuh57s.js";import"./SkeletonTable-B-kH2kE9.js";import"./MenuItem-DMX9IaUe.js";import"./Card-B-B7LyLP.js";import"./Chip-Dd_YPni3.js";import"./Select-aab027f3.esm-UKa79Lh7.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-D6l6Lhn0.js";import"./TeamBadge-95yXYI4r.js";import"./SkeletonButton-CJUI3Sjx.js";import"./SkeletonInlineBlock-Bq8lQ2xh.js";import"./SkeletonParagraph-Cpkk7Gw6.js";import"./IconSvgButton-RT_A0wjS.js";import"./FormControlLabel-ChObL5OX.js";import"./Checkbox-CDofp03P.js";import"./SwitchBase-CM4LuFoi.js";import"./useUpdateAcl-wpoMGp-z.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
