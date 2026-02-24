import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-BQS6qtw3.js";import{A as i}from"./AccessRequirementAclEditor-Dyx451WI.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DnjV3O4T.js";import"./index-DIRtHi4A.js";import"./_baseOrderBy-DyNgBBWz.js";import"./_baseIteratee-tzEKu30x.js";import"./_baseMap-D1_qqhz5.js";import"./_baseEach-DGXnFwjl.js";import"./useQueries-CUWRB_Du.js";import"./useInfiniteQuery-CbIRomxB.js";import"./AclEditor-CHwyYMoU.js";import"./useRealmPrincipals-DoOSeMkE.js";import"./UserSearchBoxV2-C4R5MmV_.js";import"./useDebouncedEffect-C89lN_Iq.js";import"./use-deep-compare-effect.esm-Ds654Svp.js";import"./uniq-jIB07xbu.js";import"./without-Bds49jaK.js";import"./UserBadge-CNqK9ajB.js";import"./useUserBundle-BrF0shF6.js";import"./useSuspenseQuery-z742AnhG.js";import"./SkeletonTable-EcKAjw5h.js";import"./MenuItem-C3kzUxKu.js";import"./Card-OQD5P-Gx.js";import"./Chip-ecDlwPeu.js";import"./Select-aab027f3.esm-DI64KuHh.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-Hatx19Wf.js";import"./TeamBadge-DU6tj7a_.js";import"./SkeletonButton-Cq3ID3gv.js";import"./SkeletonInlineBlock-D36uEl4g.js";import"./SkeletonParagraph-C3oZhxG8.js";import"./IconSvgButton-DX2s0YvB.js";import"./FormControlLabel-C7djf5vw.js";import"./Checkbox-DGUKfIt9.js";import"./SwitchBase-mlDnfciu.js";import"./useUpdateAcl-YRLXAdR_.js";const se={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const te=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,te as __namedExportsOrder,se as default};
