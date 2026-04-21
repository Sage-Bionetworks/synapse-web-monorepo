import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-DeCZWsOw.js";import{A as i}from"./AccessRequirementAclEditor-BIIkLFph.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BRAxiTze.js";import"./index-C-sY2UDa.js";import"./_baseOrderBy-CQyk44FF.js";import"./_baseIteratee-CIfFj-z5.js";import"./_baseMap-DC3gc6Nz.js";import"./_baseEach-Dz2eYAP2.js";import"./useInfiniteQuery-U4Po-hj0.js";import"./AclEditor-mc4q72_j.js";import"./UserSearchBox-DiXQAbe7.js";import"./useDebouncedEffect-Bb91ovzl.js";import"./UserBadge-Bzk1CSGa.js";import"./useUserBundle-x45H33EG.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-wLNyC9qX.js";import"./MenuItem-BwXWDpmH.js";import"./Card-B6034kBB.js";import"./Chip-Zt9ByBCz.js";import"./UserOrTeamBadge-CexbrvGK.js";import"./TeamBadge-fxG6dfPZ.js";import"./Autocomplete-BMy6RmqV.js";import"./usePreviousProps-Dy-mp2ym.js";import"./SkeletonButton-KOOFtLVu.js";import"./SkeletonInlineBlock-Dvt7Y2hl.js";import"./SkeletonParagraph-Bh8QkB1r.js";import"./IconSvgButton-FyB5125h.js";import"./FormControlLabel-CDGc6Svz.js";import"./Checkbox-BTel-voD.js";import"./SwitchBase-D0NKihTE.js";import"./useUpdateAcl-CEqFfos9.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
