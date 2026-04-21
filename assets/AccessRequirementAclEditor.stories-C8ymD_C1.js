import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-BDH9K3aQ.js";import{A as i}from"./AccessRequirementAclEditor-0GTdulun.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DABEgAy5.js";import"./index-BEXoIJDe.js";import"./_baseOrderBy-Dgg6c-Or.js";import"./_baseIteratee-gLwaiEgY.js";import"./_baseMap-CoKNYOGS.js";import"./_baseEach-C6kEqMCn.js";import"./useInfiniteQuery-CsOZNg3u.js";import"./AclEditor-CAh3J0eO.js";import"./UserSearchBox-CJ-fBakk.js";import"./useDebouncedEffect-B44LhlfG.js";import"./UserBadge-B2zVNa36.js";import"./useUserBundle-BHTJB607.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-DpnDnZ6A.js";import"./MenuItem-x7e5wLEf.js";import"./Card-BL3I6Ntg.js";import"./Chip-DozeHiZL.js";import"./UserOrTeamBadge-BtOsH5S_.js";import"./TeamBadge-DAPD5zpQ.js";import"./Autocomplete-CwnIKOhs.js";import"./usePreviousProps-DxAgpis0.js";import"./SkeletonButton-8Qglx0Lx.js";import"./SkeletonInlineBlock-C7j3Fduy.js";import"./SkeletonParagraph-4XI-GQEQ.js";import"./IconSvgButton-Bz39mJqZ.js";import"./FormControlLabel-hO8hM_0u.js";import"./Checkbox-Bh-etNab.js";import"./SwitchBase-DtmVnPYE.js";import"./useUpdateAcl-OCtZDA37.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
