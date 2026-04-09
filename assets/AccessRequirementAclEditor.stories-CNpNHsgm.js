import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-CtlQt718.js";import{A as i}from"./AccessRequirementAclEditor-Ca7T0NWb.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BU8cqQkl.js";import"./index-BsLL2bsx.js";import"./_baseOrderBy-D43qNHlx.js";import"./_baseIteratee-5SXEVFtE.js";import"./_baseMap-C_NrU3Xc.js";import"./_baseEach-bdqG_XRQ.js";import"./useInfiniteQuery-DXgfUMVI.js";import"./AclEditor-D9tcWqgZ.js";import"./UserSearchBox-DjaMua0n.js";import"./useDebouncedEffect-C2ajLuGx.js";import"./useUserGroupHeader-WUxLdYmZ.js";import"./UserOrTeamBadge-D2JHJ8rD.js";import"./TeamBadge-9WR-V1XA.js";import"./UserBadge-ymB3hH6I.js";import"./useUserBundle-DrrIAhkW.js";import"./SkeletonTable-DCMQwvPd.js";import"./MenuItem-C_5zSBh4.js";import"./Card-DRwr6nyE.js";import"./Chip-DpB8aqC-.js";import"./Autocomplete-Cv4xJ-eN.js";import"./usePreviousProps-Bsuk01gy.js";import"./SkeletonButton-i4oTWqaB.js";import"./SkeletonInlineBlock-BaHv_pCV.js";import"./SkeletonParagraph-CUgZcOgo.js";import"./IconSvgButton-P7qpEK4m.js";import"./FormControlLabel-TNPBDvq0.js";import"./Checkbox-BdJ4Kw1X.js";import"./SwitchBase-5wWbJqUY.js";import"./useUpdateAcl-9i7RpeVc.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
