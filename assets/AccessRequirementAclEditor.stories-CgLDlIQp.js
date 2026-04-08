import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-D7cxPiDf.js";import{A as i}from"./AccessRequirementAclEditor-T2U_CfM8.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Z2Fytl5q.js";import"./index-Dfurbkx6.js";import"./_baseOrderBy-CrKH7iu3.js";import"./_baseIteratee-TLvHA3OX.js";import"./_baseMap-lHyQJgq8.js";import"./_baseEach-BqFsp9gH.js";import"./useInfiniteQuery-8o2gAKoR.js";import"./AclEditor-CX_DdK4R.js";import"./UserSearchBox-DLYhe0E8.js";import"./useDebouncedEffect-7E0-czL9.js";import"./UserBadge-fquBPCcK.js";import"./useUserBundle-BfK4pX7T.js";import"./SkeletonTable-CXYD3wmd.js";import"./MenuItem-D-DyuXNw.js";import"./Card-w3ZTOvJG.js";import"./Chip-DysZYHv9.js";import"./UserOrTeamBadge-fPQHcD3V.js";import"./TeamBadge-DS3X4FjG.js";import"./Autocomplete-qIDixVzh.js";import"./usePreviousProps-4c5lPU7n.js";import"./SkeletonButton-C1ogbO9H.js";import"./SkeletonInlineBlock-CPizO8Fa.js";import"./SkeletonParagraph-BqM2-1Ca.js";import"./IconSvgButton-BYdqSBrD.js";import"./FormControlLabel-C2lYTuKb.js";import"./Checkbox-D7IQ0D5W.js";import"./SwitchBase-YNIgnTmA.js";import"./useUpdateAcl-CcUuU4xq.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
