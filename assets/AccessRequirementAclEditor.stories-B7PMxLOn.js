import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-BfPCYB0E.js";import{A as i}from"./AccessRequirementAclEditor-Dx1mqwzD.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-XmiC3EAc.js";import"./index-LtIvAFo0.js";import"./_baseOrderBy-BomYH4Yz.js";import"./_baseIteratee-Nxg2-rLG.js";import"./_baseMap-DMrCzabq.js";import"./_baseEach-BAX3P3MS.js";import"./useInfiniteQuery-DBxaVkr7.js";import"./AclEditor-DhIfV_qP.js";import"./UserSearchBox-CYSK9dCp.js";import"./useDebouncedEffect-CSWLI9x1.js";import"./UserBadge-BeeY2orO.js";import"./useUserBundle-CKxh-kvY.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-O-QCdGWt.js";import"./MenuItem-Clc-tiPV.js";import"./Card-BxqLwHVm.js";import"./Chip-CozfZRmm.js";import"./UserOrTeamBadge-Mi6P2iba.js";import"./TeamBadge-DW4bpwfm.js";import"./Autocomplete-D4zfTzAQ.js";import"./usePreviousProps-ClStBmCy.js";import"./SkeletonButton-Cp9NnTu7.js";import"./SkeletonInlineBlock-D4QJhjaO.js";import"./SkeletonParagraph-KYHFxt8I.js";import"./IconSvgButton-D1C856SD.js";import"./FormControlLabel-CGx1NWxI.js";import"./Checkbox-BMpqBgV6.js";import"./SwitchBase-VO4fuz7d.js";import"./useUpdateAcl-Dr8AXfz5.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
