import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-BfB6FrYj.js";import{A as i}from"./AccessRequirementAclEditor-DoY0puKz.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BN_xhWWt.js";import"./index-DcdQR_Vf.js";import"./_baseOrderBy-BOfaX7OM.js";import"./_baseIteratee-BXfMppB5.js";import"./_baseMap-D5GGKe2u.js";import"./_baseEach-C_OwUKu_.js";import"./useInfiniteQuery-DyZ1e7rN.js";import"./AclEditor-0JGJ6mg_.js";import"./UserSearchBox-Cdgoz0VP.js";import"./useDebouncedEffect-Cfo8SjOi.js";import"./UserBadge-Db9DswDw.js";import"./useUserBundle-3O_Oxfpc.js";import"./SkeletonTable-KlaWzsOV.js";import"./MenuItem-CG4XGW7R.js";import"./Card-CnH2dOyE.js";import"./Chip-H1nC51OX.js";import"./UserOrTeamBadge-BTEDKi44.js";import"./TeamBadge-CJtT7GTs.js";import"./Autocomplete-Debb-qQe.js";import"./usePreviousProps-Dh5fkFTb.js";import"./SkeletonButton-CyKkbiIk.js";import"./SkeletonInlineBlock-CtmRc0d4.js";import"./SkeletonParagraph-CD0x-Nfw.js";import"./IconSvgButton-Cy_5KqDf.js";import"./FormControlLabel-jJq3AgOA.js";import"./Checkbox-CZIHvRti.js";import"./SwitchBase-CpXG8q-V.js";import"./useUpdateAcl-B22Vjegk.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
