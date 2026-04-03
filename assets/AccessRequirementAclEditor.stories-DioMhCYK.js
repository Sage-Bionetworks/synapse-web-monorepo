import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-DnxOmzjq.js";import{A as i}from"./AccessRequirementAclEditor-CvuVvodq.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Dd_a-IF6.js";import"./index-CXjrgaVo.js";import"./_baseOrderBy-x4-CC6Wy.js";import"./_baseIteratee-C_T2x48z.js";import"./_baseMap-DlgqdAJU.js";import"./_baseEach-MCwZYOPx.js";import"./useInfiniteQuery-BiSYghaZ.js";import"./AclEditor-YO9sVE1W.js";import"./UserSearchBox-D1_xXPdQ.js";import"./useDebouncedEffect-CRvtYT14.js";import"./UserBadge-C7ZoT0us.js";import"./useUserBundle-ecNJunIY.js";import"./SkeletonTable-CwpgexC9.js";import"./MenuItem-CSaQiiYA.js";import"./Card-CWfitOUI.js";import"./Chip-IfgFn8uB.js";import"./UserOrTeamBadge-DGoyMStx.js";import"./TeamBadge-Dyvy-Kew.js";import"./Autocomplete-DapLW15v.js";import"./usePreviousProps-DDp_4LnU.js";import"./SkeletonButton-BsjS3fr7.js";import"./SkeletonInlineBlock-Df91B-1t.js";import"./SkeletonParagraph-gynKm0um.js";import"./IconSvgButton-C5Kl2jMg.js";import"./FormControlLabel-DRARADOY.js";import"./Checkbox-z9I2CIKw.js";import"./SwitchBase-D18-gFmO.js";import"./useUpdateAcl-BCHcq5nh.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
