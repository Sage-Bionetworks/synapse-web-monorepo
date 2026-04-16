import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-BJt7q_JV.js";import{A as i}from"./AccessRequirementAclEditor-Du6fTpgd.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BwSgVLqv.js";import"./index-D1KUKnNi.js";import"./_baseOrderBy-CIQ5pYB6.js";import"./_baseIteratee-BPQNR2Jo.js";import"./_baseMap-BzkpFs2l.js";import"./_baseEach-B4timjj-.js";import"./useInfiniteQuery-Ceo7_zT8.js";import"./AclEditor-B_EyOXOR.js";import"./UserSearchBox-lFi7N7kn.js";import"./useDebouncedEffect-DljHfkX5.js";import"./useUserGroupHeader-D1CyPOkN.js";import"./UserOrTeamBadge-CLetIjKX.js";import"./TeamBadge-BJMPS39-.js";import"./UserBadge-Bct9zt1u.js";import"./useUserBundle-DxuM9JQF.js";import"./SkeletonTable-BoHNQ0XH.js";import"./MenuItem-DUuZTALA.js";import"./Card-C9SkN0MX.js";import"./Chip-D4cY5ocF.js";import"./Autocomplete-2yZW5YM0.js";import"./usePreviousProps-_k1Molu3.js";import"./SkeletonButton-CQzFd6lb.js";import"./SkeletonInlineBlock-DWTLId8s.js";import"./SkeletonParagraph-76490YmJ.js";import"./IconSvgButton-BwIatMVa.js";import"./FormControlLabel-BZzQmDal.js";import"./Checkbox-Beiu9b0t.js";import"./SwitchBase-B6wo5qcW.js";import"./useUpdateAcl-ClaQrgxJ.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
