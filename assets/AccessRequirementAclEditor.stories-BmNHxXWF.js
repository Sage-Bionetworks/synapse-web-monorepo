import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-CseC-baw.js";import{A as i}from"./AccessRequirementAclEditor-DyrFV1v5.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-LlRVvucj.js";import"./index-Cs-oxnB7.js";import"./_baseOrderBy-BI2WWhcD.js";import"./_baseIteratee-FkIOi2kZ.js";import"./_baseMap-ChkSHv-Q.js";import"./_baseEach-I5MBxf0i.js";import"./useInfiniteQuery-BZ_GGw6g.js";import"./AclEditor-BGPfrtNn.js";import"./UserSearchBox-C0b380xg.js";import"./useDebouncedEffect-D1NvQUWq.js";import"./UserBadge-CsME2JGa.js";import"./useUserBundle-DcGFbwia.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-BSCFUHCb.js";import"./MenuItem-JA9eMCvt.js";import"./Card-CkAhX4H-.js";import"./Chip-8D96B7uR.js";import"./UserOrTeamBadge-CpddX1LK.js";import"./TeamBadge-BZduf3Tn.js";import"./Autocomplete-B0cmA3-q.js";import"./usePreviousProps-DrR79Lb9.js";import"./SkeletonButton-CcHwUw1K.js";import"./SkeletonInlineBlock-dgjaDxOx.js";import"./SkeletonParagraph-BnipCtVU.js";import"./IconSvgButton-DPqN66uG.js";import"./FormControlLabel-yR_OFq_k.js";import"./Checkbox-cR5eTvXg.js";import"./SwitchBase-viy3IhPp.js";import"./useUpdateAcl-ClpDady4.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
