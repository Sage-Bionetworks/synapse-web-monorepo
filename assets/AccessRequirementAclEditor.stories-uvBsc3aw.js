import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-CDA0-aTC.js";import{A as i}from"./AccessRequirementAclEditor-BbYGmAIG.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DDQsBaEZ.js";import"./index-Dm5gKV9A.js";import"./_baseOrderBy-BTSbGHSk.js";import"./_baseIteratee-CvzF7y63.js";import"./_baseMap-DXdLzEMj.js";import"./_baseEach-M6TsrMn8.js";import"./useInfiniteQuery-DxqH_ygE.js";import"./AclEditor-B0UnP7qo.js";import"./UserSearchBoxV2-Cv9zVEbb.js";import"./useDebouncedEffect-BVP3V7ge.js";import"./use-deep-compare-effect.esm-CdqlNPw4.js";import"./uniq-BwP3as-X.js";import"./without-CjA7TAIG.js";import"./UserBadge-CeyI1m7V.js";import"./useUserBundle-h3_N8fPQ.js";import"./SkeletonTable-CTSMcV9b.js";import"./MenuItem-D14RUsdm.js";import"./Card-CNpk9I0N.js";import"./Chip-iqmVqxV9.js";import"./Select-aab027f3.esm-lUYbg3gW.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BvRwu4Gs.js";import"./TeamBadge-QVyNcFNM.js";import"./SkeletonButton-CyZvMjY_.js";import"./SkeletonInlineBlock-CP8CpyNB.js";import"./SkeletonParagraph-BVmBcN9J.js";import"./IconSvgButton-DaI2wIRr.js";import"./FormControlLabel-Bnc2UF74.js";import"./Checkbox-BuF5DqZv.js";import"./SwitchBase-CzJWdvEs.js";import"./useUpdateAcl-CQwedROR.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
