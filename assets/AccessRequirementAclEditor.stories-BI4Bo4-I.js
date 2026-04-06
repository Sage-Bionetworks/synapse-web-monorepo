import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-Dh1-Bj9i.js";import{A as i}from"./AccessRequirementAclEditor-XHeW-ErM.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DucLZ6v-.js";import"./index-DA_VxtNU.js";import"./_baseOrderBy-BCuRUHAk.js";import"./_baseIteratee-CuoQlIYx.js";import"./_baseMap-GDF1xtgf.js";import"./_baseEach-OMUz4HGL.js";import"./useInfiniteQuery-CKi0ZKKC.js";import"./AclEditor-DshprRaE.js";import"./UserSearchBox-XN_9fZn7.js";import"./useDebouncedEffect-DAVceLl-.js";import"./UserBadge-awlVBRBe.js";import"./useUserBundle-BOEHsSlJ.js";import"./SkeletonTable-nkHHAelC.js";import"./MenuItem-DcI11cWZ.js";import"./Card-C6ntjiwM.js";import"./Chip-D6-vR_S7.js";import"./UserOrTeamBadge-BVyaEq4-.js";import"./TeamBadge-B9E97fk-.js";import"./Autocomplete-DO5n1YAS.js";import"./usePreviousProps-jW-nUEeZ.js";import"./SkeletonButton-C-IErnIc.js";import"./SkeletonInlineBlock-D9o-fuxy.js";import"./SkeletonParagraph-Cbgp8OCT.js";import"./IconSvgButton-DvelCxeI.js";import"./FormControlLabel-CYMNTndx.js";import"./Checkbox-dmGiqlJj.js";import"./SwitchBase-C1MmJwCG.js";import"./useUpdateAcl-C_k_I7m1.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
