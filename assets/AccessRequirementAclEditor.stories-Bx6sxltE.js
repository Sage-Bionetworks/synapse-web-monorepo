import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-DlbWcGN2.js";import{A as i}from"./AccessRequirementAclEditor-CCuNotp7.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements--8-f_ezM.js";import"./index-CPDGSnl2.js";import"./_baseOrderBy-yjHgEbXY.js";import"./_baseIteratee-zBmYV8lZ.js";import"./_baseMap-CPbOR7vb.js";import"./_baseEach-DR9OfBR9.js";import"./useInfiniteQuery-EmSFUzRL.js";import"./AclEditor-BJW8Y9y7.js";import"./UserSearchBoxV2-9WTOHrLp.js";import"./useDebouncedEffect-3thH1FAa.js";import"./use-deep-compare-effect.esm-Dh6CqU-e.js";import"./uniq-DKgJpKyz.js";import"./without-XYVfU2wd.js";import"./UserBadge-BMihFK0S.js";import"./useUserBundle-fmpBDiU5.js";import"./SkeletonTable-CLjRwafm.js";import"./MenuItem-y9tFSlzR.js";import"./Card-CX5B1fkb.js";import"./Chip-B6dYwJrn.js";import"./Select-aab027f3.esm-DbS8cvLk.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-Bb1zL9zv.js";import"./TeamBadge-DHed2zT5.js";import"./SkeletonButton-dCMet_AC.js";import"./SkeletonInlineBlock-Zv-gdja3.js";import"./SkeletonParagraph-CTcAcvxB.js";import"./IconSvgButton-Cw4g4kVE.js";import"./FormControlLabel-CdDhVpIz.js";import"./Checkbox-CcAZ2GlS.js";import"./SwitchBase-CK2q1rGh.js";import"./useUpdateAcl-DudHY1K_.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
