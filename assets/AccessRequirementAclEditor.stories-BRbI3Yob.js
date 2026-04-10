import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-FsOg9uwU.js";import{A as i}from"./AccessRequirementAclEditor-z33MBJSw.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-E4wX1h6m.js";import"./index-BE4_cl56.js";import"./_baseOrderBy-CnEKSfr8.js";import"./_baseIteratee-CPfpbnLi.js";import"./_baseMap-CKj7t-u-.js";import"./_baseEach-BFISFCE3.js";import"./useInfiniteQuery-rDeNbqp3.js";import"./AclEditor-GZjYqlfw.js";import"./UserSearchBox-PBqxDBJQ.js";import"./useDebouncedEffect-BzQrwVMU.js";import"./useUserGroupHeader-CLfJ9kmo.js";import"./UserOrTeamBadge-D0NT5qeZ.js";import"./TeamBadge-CFTbV6P9.js";import"./UserBadge-BgWUpTwS.js";import"./useUserBundle-DlEfeCz8.js";import"./SkeletonTable-D70G5IuO.js";import"./MenuItem-Cj71RViP.js";import"./Card-Bl03myfA.js";import"./Chip-CwjHvWgT.js";import"./Autocomplete-BJva2ObM.js";import"./usePreviousProps-ryOaqf0v.js";import"./SkeletonButton-o5wIbKa8.js";import"./SkeletonInlineBlock-C-VJXZCx.js";import"./SkeletonParagraph-CbUekLjy.js";import"./IconSvgButton-Bb9yFuEF.js";import"./FormControlLabel-CVGFhKb1.js";import"./Checkbox-oTkKgI0N.js";import"./SwitchBase-B6R5JrIN.js";import"./useUpdateAcl-ZY51DJd3.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
