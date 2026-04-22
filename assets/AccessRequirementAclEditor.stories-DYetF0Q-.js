import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-bna6ux0d.js";import{A as i}from"./AccessRequirementAclEditor-CEytV0f0.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BXov6ZnK.js";import"./index-BPlgQcL-.js";import"./_baseOrderBy-DXDPhcgN.js";import"./_baseIteratee-BTmoqNJP.js";import"./_baseMap-BhRjv0-x.js";import"./_baseEach-Clh7uFEL.js";import"./useInfiniteQuery-BY6Y6iWU.js";import"./AclEditor-ER7yxmx_.js";import"./UserSearchBox-Btj_2T0f.js";import"./useDebouncedEffect-qNl3bRSd.js";import"./UserBadge-CXfpHech.js";import"./useUserBundle-BCDvFxlz.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-l3mzz3bl.js";import"./MenuItem-BE6gGCeL.js";import"./Card-DCXe5QKg.js";import"./Chip-ezXqmltp.js";import"./UserOrTeamBadge-Cg3juENa.js";import"./TeamBadge-1sdo47x1.js";import"./Autocomplete-ykx5fh-k.js";import"./usePreviousProps-K1h_Q3p0.js";import"./SkeletonButton-CvFlnbQG.js";import"./SkeletonInlineBlock-BZMaSP8M.js";import"./SkeletonParagraph-BWjRwEhH.js";import"./IconSvgButton-C6KOKXIO.js";import"./FormControlLabel-CxLJMSC7.js";import"./Checkbox-BBLtg65l.js";import"./SwitchBase-D6zfVctk.js";import"./useUpdateAcl-BPUFK-dW.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
