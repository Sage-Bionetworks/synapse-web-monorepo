import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-DI_DW6I7.js";import{A as i}from"./AccessRequirementAclEditor-DVeUiY7F.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-D-YpzNsU.js";import"./index-CEkoI5OI.js";import"./_baseOrderBy-BahF1Hke.js";import"./_baseIteratee-Knl8sh69.js";import"./_baseMap-j0m5X6QJ.js";import"./_baseEach-Bgov8v5P.js";import"./useInfiniteQuery-CYDJs5Ir.js";import"./AclEditor-DUJLbw6D.js";import"./UserSearchBox-CMfr07Cz.js";import"./useDebouncedEffect-DBLZTGBm.js";import"./UserBadge-Dcp1qyfD.js";import"./useUserBundle-sgovs3e8.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-B1K8a5wm.js";import"./MenuItem-D7FiHfrS.js";import"./Card-DSTJfyTC.js";import"./Chip-BtT8gxc3.js";import"./UserOrTeamBadge-DgJ6dgGE.js";import"./TeamBadge-NcL1MgIe.js";import"./Autocomplete-wzFdhmOr.js";import"./usePreviousProps-CRw8wBaq.js";import"./SkeletonButton-VuyYmUxo.js";import"./SkeletonInlineBlock-2jyq21QW.js";import"./SkeletonParagraph-iVrUoPVl.js";import"./IconSvgButton-Bkp2y_Ny.js";import"./FormControlLabel-DJ3CxxVI.js";import"./Checkbox-CN4UXvGM.js";import"./SwitchBase-CgMZiCSG.js";import"./useUpdateAcl-BCCZ4CyG.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
