import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-D5wXuBlT.js";import{A as i}from"./AccessRequirementAclEditor-B_NYNt26.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DWRH5L8-.js";import"./index-2JT8eoUE.js";import"./_baseOrderBy-7pI0o-Mb.js";import"./_baseIteratee-B9EFKTSA.js";import"./_baseMap-BIuedYiU.js";import"./_baseEach-DHRpkkAi.js";import"./useInfiniteQuery-CIna-n7q.js";import"./AclEditor-BKmZIzYu.js";import"./UserSearchBox-D7pwxDyQ.js";import"./useDebouncedEffect-CClt-H-N.js";import"./useUserGroupHeader-YQoyU-aV.js";import"./UserOrTeamBadge-CrDlepT6.js";import"./TeamBadge-DSUeGj_J.js";import"./UserBadge-DCI1SK4W.js";import"./useUserBundle-DXvZDWUx.js";import"./SkeletonTable-DQgfKfH3.js";import"./MenuItem-Cg9aYM9o.js";import"./Card-Ds8mqMQ7.js";import"./Chip-CY4F66V8.js";import"./Autocomplete-DyJ_IcZa.js";import"./usePreviousProps-BROXTcjk.js";import"./SkeletonButton-1p1-0lGV.js";import"./SkeletonInlineBlock-Djh2iYmW.js";import"./SkeletonParagraph-CICWHgmn.js";import"./IconSvgButton-DovBfP2k.js";import"./FormControlLabel-DdIGgxtb.js";import"./Checkbox-etgoUHJj.js";import"./SwitchBase-CF4iIkRZ.js";import"./useUpdateAcl-Sk__QBx_.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
