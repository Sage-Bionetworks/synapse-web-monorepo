import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-BPNyJNxm.js";import{A as i}from"./AccessRequirementAclEditor-H7r03pF7.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CPn0ZvtY.js";import"./index-Br3ickc1.js";import"./_baseOrderBy-roILrO3o.js";import"./_baseIteratee-j2vHxdg-.js";import"./_baseMap-vlPjx_9F.js";import"./_baseEach-CZ4hYEvj.js";import"./useInfiniteQuery-XrkzDwnB.js";import"./AclEditor-DXIti7td.js";import"./UserSearchBox-B0co5a5L.js";import"./useDebouncedEffect-CpYTiak8.js";import"./UserBadge-BPa7l308.js";import"./useUserBundle-D2j_CZi9.js";import"./SkeletonTable-DBeYWS70.js";import"./MenuItem-CEXBRyzq.js";import"./Card-B4zIQ-hG.js";import"./Chip-Hk6f0McD.js";import"./UserOrTeamBadge-37LRL7Gh.js";import"./TeamBadge-DEYlikwi.js";import"./Autocomplete-BP7i1wvE.js";import"./usePreviousProps--x0xYk9p.js";import"./SkeletonButton-DKmXtnFb.js";import"./SkeletonInlineBlock-YVxGd7KG.js";import"./SkeletonParagraph-BxBZJF2o.js";import"./IconSvgButton-BHDlEBD2.js";import"./FormControlLabel-DMh_lHXX.js";import"./Checkbox-G1oNYZiA.js";import"./SwitchBase-BHyxwE7g.js";import"./useUpdateAcl-DEdvzpyF.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
