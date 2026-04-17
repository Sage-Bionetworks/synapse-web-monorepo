import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-xQMv0B7c.js";import{A as i}from"./AccessRequirementAclEditor-BaB8tWT_.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CS4PK7gM.js";import"./index-CXBvLS03.js";import"./_baseOrderBy-CoiZOdYB.js";import"./_baseIteratee-CSd0qoWC.js";import"./_baseMap-B4rPe6R-.js";import"./_baseEach-BGb-mPrr.js";import"./useInfiniteQuery-B0ejREUV.js";import"./AclEditor-MDQfnN76.js";import"./UserSearchBox-35hob7Gf.js";import"./useDebouncedEffect-BEyucQ_z.js";import"./UserBadge-Dy2rNvc3.js";import"./useUserBundle-CwvRZ8ZR.js";import"./SkeletonTable-C8xyrBR9.js";import"./MenuItem-CFXGxp9X.js";import"./Card-Djer30mf.js";import"./Chip-T-Cvxbkm.js";import"./UserOrTeamBadge-BDeoBNcA.js";import"./TeamBadge-D5j9eOzO.js";import"./Autocomplete-BIwzOm9_.js";import"./usePreviousProps-vfY-8rpx.js";import"./SkeletonButton-BO78PNXN.js";import"./SkeletonInlineBlock-DTwWIKu1.js";import"./SkeletonParagraph-B_dMNDrm.js";import"./IconSvgButton-D6D0KDkI.js";import"./FormControlLabel-GDbx5q6Y.js";import"./Checkbox-BTp39wUH.js";import"./SwitchBase-BC6L5hXz.js";import"./useUpdateAcl-D52r5c4h.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
