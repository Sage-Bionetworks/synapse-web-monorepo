import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-BdS9-wdc.js";import{A as i}from"./AccessRequirementAclEditor-TaHFUNSw.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CYXIEknU.js";import"./index-BmEGML5A.js";import"./_baseOrderBy-DwefgT-I.js";import"./_baseIteratee-D3oGQqia.js";import"./_baseMap-sufoZ6nL.js";import"./_baseEach-C3R-Q7qo.js";import"./useInfiniteQuery-B54oxMok.js";import"./AclEditor-BRUl89gI.js";import"./UserSearchBox-DHR87Hop.js";import"./useDebouncedEffect-Dbqf_fkL.js";import"./useUserGroupHeader-DhQzbsNW.js";import"./UserOrTeamBadge-Bo7QMREQ.js";import"./TeamBadge-DyH0b7pK.js";import"./UserBadge-DiTjYkKT.js";import"./useUserBundle-CW56QhDS.js";import"./SkeletonTable-E-xscDs6.js";import"./MenuItem-BSB47y6Q.js";import"./Card-CQz4BqJK.js";import"./Chip-B8w46sev.js";import"./Autocomplete-jeJ3UT8Z.js";import"./usePreviousProps-CRbVQsCb.js";import"./SkeletonButton-BtChI9G1.js";import"./SkeletonInlineBlock-B1VKeUrN.js";import"./SkeletonParagraph-BQttfzOt.js";import"./IconSvgButton-DxsDU774.js";import"./FormControlLabel-Db0CgiSH.js";import"./Checkbox-1TaYBXaY.js";import"./SwitchBase-DOv3IdKL.js";import"./useUpdateAcl-DYVmPR1L.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
