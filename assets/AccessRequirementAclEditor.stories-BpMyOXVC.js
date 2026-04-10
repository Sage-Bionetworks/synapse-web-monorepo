import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-BCS2zFLE.js";import{A as i}from"./AccessRequirementAclEditor-jUHoFauv.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-88mOTYbo.js";import"./index-BEuukshQ.js";import"./_baseOrderBy-0suuNoPn.js";import"./_baseIteratee-CNNmt5Ou.js";import"./_baseMap-D6Z2KTJp.js";import"./_baseEach-DR-ZM-OT.js";import"./useInfiniteQuery-C7RDpDyE.js";import"./AclEditor-CVdQJkAW.js";import"./UserSearchBox-CogtUD1-.js";import"./useDebouncedEffect-DRiczT2r.js";import"./useUserGroupHeader-rqOoqMM6.js";import"./UserOrTeamBadge-p1O2I4ES.js";import"./TeamBadge-00pFqE-a.js";import"./UserBadge-C35_-Ssp.js";import"./useUserBundle-CeR9IeV9.js";import"./SkeletonTable-D-hZBWBR.js";import"./MenuItem-p1NQf3Mg.js";import"./Card-DPmweuYt.js";import"./Chip-BWwS-E8w.js";import"./Autocomplete-CGtpzGiq.js";import"./usePreviousProps-Dzc1i5J4.js";import"./SkeletonButton-BlPG-SPD.js";import"./SkeletonInlineBlock-9a6I1Gvz.js";import"./SkeletonParagraph-Ch_An-pk.js";import"./IconSvgButton-DZj9rJTM.js";import"./FormControlLabel-CuWbK74X.js";import"./Checkbox-CRlsiFLX.js";import"./SwitchBase-BktFrpMy.js";import"./useUpdateAcl-DdMcfZA3.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
