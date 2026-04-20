import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-CyTUL3rw.js";import{A as i}from"./AccessRequirementAclEditor-B1j7WVIb.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Ch7WIXPD.js";import"./index-BOhc23wR.js";import"./_baseOrderBy-DgA0gRox.js";import"./_baseIteratee-MK8aYcv5.js";import"./_baseMap-B7oG-iip.js";import"./_baseEach-CY-oKdBS.js";import"./useInfiniteQuery-8XDsvgry.js";import"./AclEditor-BMdLUlnT.js";import"./UserSearchBox-jhMMmCY0.js";import"./useDebouncedEffect-CJ3Trl_T.js";import"./UserBadge-De5Xgm0G.js";import"./useUserBundle-B9ypisaf.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-BzEL_yMf.js";import"./MenuItem-48CaJz-o.js";import"./Card-8ssPkC44.js";import"./Chip-RUiUFPKg.js";import"./UserOrTeamBadge-DjzQzQEu.js";import"./TeamBadge-DBOUyVft.js";import"./Autocomplete-CXkWE5V9.js";import"./usePreviousProps-Bk4ZH_gp.js";import"./SkeletonButton-DChDzo9i.js";import"./SkeletonInlineBlock-B96TZts7.js";import"./SkeletonParagraph-D3EKUoCV.js";import"./IconSvgButton-CwolTWcA.js";import"./FormControlLabel-BoYvZo-l.js";import"./Checkbox-mGc4RGP0.js";import"./SwitchBase-BAQlXzL4.js";import"./useUpdateAcl-CqW6yXoW.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
  },
  parameters: {
    stack: 'mock'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID)
  },
  parameters: {
    stack: 'mock'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602671'
  },
  parameters: {
    stack: 'development'
  }
}`,...s.parameters?.docs?.source}}};const J=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{s as DevDemo,r as MockDemoExistingAcl,t as MockDemoNoExistingAcl,J as __namedExportsOrder,z as default};
