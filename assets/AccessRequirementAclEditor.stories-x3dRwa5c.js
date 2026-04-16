import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-DUQkn8iF.js";import{A as i}from"./AccessRequirementAclEditor-99ol30ie.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CSsGXom7.js";import"./index-B-0M8h1t.js";import"./_baseOrderBy-9whb860v.js";import"./_baseIteratee-Cqjf8tEo.js";import"./_baseMap-xCllNzhN.js";import"./_baseEach-yRpYmG1y.js";import"./useInfiniteQuery-CSxua8m4.js";import"./AclEditor-C4_zMuBk.js";import"./UserSearchBox-CNBvSKhj.js";import"./useDebouncedEffect-B4Mi4eVy.js";import"./useUserGroupHeader-DjnwW-1A.js";import"./UserOrTeamBadge-Dufn934O.js";import"./TeamBadge-CEv_m0Gc.js";import"./UserBadge-BLdSt8lg.js";import"./useUserBundle-2e6WFDdI.js";import"./SkeletonTable-Dx_jF5OF.js";import"./MenuItem-BPgUr9lg.js";import"./Card-CxsQey3A.js";import"./Chip-DTXJglpB.js";import"./Autocomplete-DLb05X2b.js";import"./usePreviousProps-Dv-jr2T7.js";import"./SkeletonButton-COaCvHBG.js";import"./SkeletonInlineBlock-S0DMpc3c.js";import"./SkeletonParagraph-BzReNLH2.js";import"./IconSvgButton-CUdqbKIp.js";import"./FormControlLabel-ULAaK-Wz.js";import"./Checkbox-C83dxoX4.js";import"./SwitchBase-DmNt2wvQ.js";import"./useUpdateAcl-9P1mazf_.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
