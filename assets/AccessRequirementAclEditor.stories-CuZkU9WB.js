import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-BknA5AKQ.js";import{A as i}from"./AccessRequirementAclEditor-DR4HYP4a.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-XVuBmyF9.js";import"./index-CB5up3MK.js";import"./_baseOrderBy-BwEvPxfi.js";import"./_baseIteratee-CSacSwwJ.js";import"./_baseMap-BlcHWZxP.js";import"./_baseEach-UREiZOpt.js";import"./useInfiniteQuery-IfHRRpU9.js";import"./AclEditor-DfLeyJ7g.js";import"./UserSearchBox-Ci3hyZDL.js";import"./useDebouncedEffect-BSnJpFao.js";import"./UserBadge-CFsuA3am.js";import"./useUserBundle-CpQAXbXo.js";import"./SkeletonTable-DbyGjMNM.js";import"./MenuItem-BQAxjpVg.js";import"./Card-C9qx6pdO.js";import"./Chip-CVnCUFdM.js";import"./UserOrTeamBadge-DbuIpa7W.js";import"./TeamBadge-CQa2HjBv.js";import"./Autocomplete-C7TmKGrZ.js";import"./usePreviousProps-Bfj6pKxe.js";import"./SkeletonButton-DS3-vsq6.js";import"./SkeletonInlineBlock-CJPbZx5E.js";import"./SkeletonParagraph-COPAUoGX.js";import"./IconSvgButton-g3Mdd6hh.js";import"./FormControlLabel-D6qH4hbx.js";import"./Checkbox-X4PIicdY.js";import"./SwitchBase-BdMKy0_S.js";import"./useUpdateAcl-yrznZNP9.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const z=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{s as DevDemo,r as MockDemoExistingAcl,t as MockDemoNoExistingAcl,z as __namedExportsOrder,y as default};
