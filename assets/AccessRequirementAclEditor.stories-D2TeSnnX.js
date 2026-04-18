import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-ggb9BT7g.js";import{A as i}from"./AccessRequirementAclEditor--SWy6KJF.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DsK5rV9c.js";import"./index-BsBFOmKs.js";import"./_baseOrderBy-CfUmSi1e.js";import"./_baseIteratee-CI8yA5In.js";import"./_baseMap-Cn5NpepV.js";import"./_baseEach-CoSYQq5s.js";import"./useInfiniteQuery-Dmqb6E3U.js";import"./AclEditor-UPuALM0G.js";import"./UserSearchBox-ACWjhcna.js";import"./useDebouncedEffect-DvMOZyrV.js";import"./UserBadge-DEEeycwe.js";import"./useUserBundle-t5nTyqdV.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-ByepoAwi.js";import"./MenuItem-Dz7N7FME.js";import"./Card-BrUEDoBm.js";import"./Chip-CisBGjg3.js";import"./UserOrTeamBadge-BkrIDI6W.js";import"./TeamBadge-DTiexQIO.js";import"./Autocomplete-YprHJKih.js";import"./usePreviousProps-CuVqs5w7.js";import"./SkeletonButton-CUOVs3Oy.js";import"./SkeletonInlineBlock-C6q-RqyQ.js";import"./SkeletonParagraph-CEmjW8Ho.js";import"./IconSvgButton-CAgubBa_.js";import"./FormControlLabel-CAUCzVir.js";import"./Checkbox-Dsv8Lvn8.js";import"./SwitchBase-Cb1YcC8J.js";import"./useUpdateAcl-BWknMaW9.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
