import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-BfspjTcY.js";import{A as i}from"./AccessRequirementAclEditor-Uh_Xu9EA.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Dguv-S1B.js";import"./index-C387dLAZ.js";import"./_baseOrderBy-CpKZf7AP.js";import"./_baseIteratee-BDr_3Jg_.js";import"./_baseMap-ZHm_eqdn.js";import"./_baseEach-CKxKqa6S.js";import"./useInfiniteQuery-FUajPpu4.js";import"./AclEditor-U388ySb4.js";import"./UserSearchBoxV2-D66T3EAX.js";import"./useDebouncedEffect-D7r8Fhfs.js";import"./use-deep-compare-effect.esm-BWbxHWJ2.js";import"./uniq-Yrv0fQYR.js";import"./without-XkeIV0oQ.js";import"./UserBadge-DtX7R756.js";import"./useUserBundle-BGI9EtOn.js";import"./SkeletonTable-BM0lpKNC.js";import"./MenuItem-CJRlDMpO.js";import"./Card-Jgx718_A.js";import"./Chip-BneT6US4.js";import"./Select-aab027f3.esm-BJbkthJD.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-Dvyff-lW.js";import"./TeamBadge-BHn2sow7.js";import"./SkeletonButton-CkY0YDZ2.js";import"./SkeletonInlineBlock-PuABnjtw.js";import"./SkeletonParagraph-Snv-dM4k.js";import"./IconSvgButton-BodE32lb.js";import"./FormControlLabel-Genaqmo5.js";import"./Checkbox-B0O3bzZ6.js";import"./SwitchBase-TiYknOKh.js";import"./useUpdateAcl-KNqz35gA.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
