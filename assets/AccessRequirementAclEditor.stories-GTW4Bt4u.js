import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-k6B4MjXD.js";import{A as i}from"./AccessRequirementAclEditor-CzUpyvv7.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DJadZ6mO.js";import"./index-WOehqnwl.js";import"./_baseOrderBy-Ds31bn-Q.js";import"./_baseIteratee-CAoDB8fy.js";import"./_baseMap-oMJnhGiQ.js";import"./_baseEach-D51EWim7.js";import"./useInfiniteQuery-CFREU8Pv.js";import"./AclEditor-p1cHQ4Vv.js";import"./UserSearchBoxV2-DLWu6Fbw.js";import"./useDebouncedEffect-BHVw51nn.js";import"./use-deep-compare-effect.esm-pGvFVVHS.js";import"./uniq-BKcpMB4F.js";import"./without-DI6PJLT7.js";import"./UserBadge-CTPE8I7e.js";import"./useUserBundle-9_lecAHf.js";import"./SkeletonTable-DolM1Kfd.js";import"./MenuItem-DIdsJc7D.js";import"./Card-BYlpnDBX.js";import"./Chip-ClQuTivw.js";import"./Select-aab027f3.esm-CuM-d5KN.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CILQNINt.js";import"./TeamBadge-Bh3ge5pJ.js";import"./SkeletonButton-DUY-d9ph.js";import"./SkeletonInlineBlock-DCdHLNp-.js";import"./SkeletonParagraph-B7V0f3GA.js";import"./IconSvgButton-BmTJV0Vb.js";import"./FormControlLabel-B-nIKQ4K.js";import"./Checkbox-dZ9U26rf.js";import"./SwitchBase-Ckg5eRY-.js";import"./useUpdateAcl-DY5KsLc5.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
