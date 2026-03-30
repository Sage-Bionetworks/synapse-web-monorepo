import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-BHpb1ner.js";import{A as i}from"./AccessRequirementAclEditor-B1Yf0VPd.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CLnA27mO.js";import"./index-6DuJwvLX.js";import"./_baseOrderBy-B5o4_3PH.js";import"./_baseIteratee-DkA3wBze.js";import"./_baseMap-BrueBaHk.js";import"./_baseEach-B-GHBlQE.js";import"./useInfiniteQuery-zxcnvMhO.js";import"./AclEditor-cGDFO6r5.js";import"./UserSearchBoxV2-CokJAXZx.js";import"./useDebouncedEffect-rzJVbBME.js";import"./use-deep-compare-effect.esm-C_pN1kev.js";import"./uniq-CxS0q-i_.js";import"./without-Bx59phJ8.js";import"./UserBadge-Q7hpWjW2.js";import"./useUserBundle-DSde-19S.js";import"./SkeletonTable-C5MYC27c.js";import"./MenuItem-tefU5X3f.js";import"./Card-BMPVT45X.js";import"./Chip-BwbGtSpr.js";import"./Select-aab027f3.esm-DzUaS9HQ.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-Bk_BT7zS.js";import"./TeamBadge-Bb15Ox2s.js";import"./SkeletonButton-L8FvKIZ9.js";import"./SkeletonInlineBlock-CZB6gyiy.js";import"./SkeletonParagraph-DtQNsEbz.js";import"./IconSvgButton-CVCOkjYq.js";import"./FormControlLabel-tODm-4uQ.js";import"./Checkbox-CKMpfQYH.js";import"./SwitchBase-D-w4aRLo.js";import"./useUpdateAcl-Dle8SC9V.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
