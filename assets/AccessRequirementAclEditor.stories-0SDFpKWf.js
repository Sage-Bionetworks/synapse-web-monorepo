import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-CkqKht9A.js";import{A as i}from"./AccessRequirementAclEditor-r1sd4kgb.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BGecfaTc.js";import"./index-HFPXFcrl.js";import"./_baseOrderBy-D5qdCMjS.js";import"./_baseIteratee-DkkmHvlR.js";import"./_baseMap-CXPVSq4N.js";import"./_baseEach-BtLnyfgf.js";import"./useInfiniteQuery-BEEFWGUG.js";import"./AclEditor-KJGHxR0b.js";import"./UserSearchBox-BVT0I0uL.js";import"./useDebouncedEffect-DUj_Oz7P.js";import"./useUserGroupHeader-C0iuMqVQ.js";import"./UserOrTeamBadge--_OWpZFM.js";import"./TeamBadge-DM5rax7j.js";import"./UserBadge-BSfWwbq9.js";import"./useUserBundle-BsneMIeI.js";import"./SkeletonTable-CWHVzuOA.js";import"./MenuItem-Dmh5bflc.js";import"./Card-Z3IbB4xH.js";import"./Chip-BmVL4eVd.js";import"./Autocomplete-CVxL4Aj8.js";import"./usePreviousProps-Dg3neEkv.js";import"./SkeletonButton-Di865Zvp.js";import"./SkeletonInlineBlock-Du1ZrXhF.js";import"./SkeletonParagraph-BjhKqE1J.js";import"./IconSvgButton-CKMVqSyJ.js";import"./FormControlLabel-SU0MesBd.js";import"./Checkbox-D91AhJdm.js";import"./SwitchBase-DXM-qXId.js";import"./useUpdateAcl-aFAq3-OV.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
