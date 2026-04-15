import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-tHCTQw-h.js";import{A as i}from"./AccessRequirementAclEditor-DL2NfPXj.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DRPJCxVD.js";import"./index-BusyTjH4.js";import"./_baseOrderBy-5kb_ywfr.js";import"./_baseIteratee-DN7s7tH5.js";import"./_baseMap-DGvgkari.js";import"./_baseEach-DAAMDDtE.js";import"./useInfiniteQuery-Cgi0zhhX.js";import"./AclEditor-B7Ndz-PD.js";import"./UserSearchBox-ByfTn2K1.js";import"./useDebouncedEffect-D48MhQNv.js";import"./useUserGroupHeader-DDShxnvZ.js";import"./UserOrTeamBadge-BMQ8Y3hH.js";import"./TeamBadge-CeLHtqZZ.js";import"./UserBadge-Bmg1fZEL.js";import"./useUserBundle-CFNqkFnY.js";import"./SkeletonTable-DF9YBfOn.js";import"./MenuItem-EF7hTZ7c.js";import"./Card-DmjFo3eO.js";import"./Chip-BPZys9eM.js";import"./Autocomplete-CvYO56jl.js";import"./usePreviousProps-DdRbQRXC.js";import"./SkeletonButton-COGIamRT.js";import"./SkeletonInlineBlock-BcgTDPGl.js";import"./SkeletonParagraph-ltGtfGmy.js";import"./IconSvgButton-gR0SBfhX.js";import"./FormControlLabel-CsLV9TPO.js";import"./Checkbox-DrqmkyJE.js";import"./SwitchBase-D0KX-hor.js";import"./useUpdateAcl-0AzcCJXo.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
