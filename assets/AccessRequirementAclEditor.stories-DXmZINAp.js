import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-AuqRm6Xj.js";import{A as i}from"./AccessRequirementAclEditor-B06oCnQj.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CAqgXTxN.js";import"./index-D5YJAeH4.js";import"./_baseOrderBy-QA6TCxfl.js";import"./_baseIteratee-VmDtVic5.js";import"./_baseMap-B9GZp46S.js";import"./_baseEach-CbR7Csp5.js";import"./useInfiniteQuery-CwU4w13D.js";import"./AclEditor-7o2tbFAu.js";import"./UserSearchBox-DGIHJwIi.js";import"./useDebouncedEffect-Dl0caD6t.js";import"./UserBadge-94-bM4a7.js";import"./useUserBundle-B1FabnzQ.js";import"./SkeletonTable-C0VRg4xn.js";import"./MenuItem-e1skeM_z.js";import"./Card-D38Rt5-Y.js";import"./Chip-DC7pM5qx.js";import"./UserOrTeamBadge-Cdcrt_cw.js";import"./TeamBadge-OO8nhNc2.js";import"./Autocomplete-C2p2_ZC-.js";import"./usePreviousProps-CeiRwp8W.js";import"./SkeletonButton-De9SiVJE.js";import"./SkeletonInlineBlock-CL4j-wc-.js";import"./SkeletonParagraph-B6IfoMOd.js";import"./IconSvgButton-Cq6PtPVt.js";import"./FormControlLabel-hQp6mAf4.js";import"./Checkbox-MxfcR8V3.js";import"./SwitchBase-DkN8Vn3a.js";import"./useUpdateAcl-C42d0ugk.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
