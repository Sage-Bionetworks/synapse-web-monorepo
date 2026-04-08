import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-FEhVLLlO.js";import{A as i}from"./AccessRequirementAclEditor-B2KT6cnh.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DLPzpr6N.js";import"./index-D-512QAu.js";import"./_baseOrderBy-CrdayDuJ.js";import"./_baseIteratee-mWx-HW66.js";import"./_baseMap-rV8-36rj.js";import"./_baseEach-CSLszIvx.js";import"./useInfiniteQuery-BAQMxQ9Q.js";import"./AclEditor-B7eni7zI.js";import"./UserSearchBox-BNRLD114.js";import"./useDebouncedEffect-LNF6l_XO.js";import"./useUserGroupHeader-CFFdJM92.js";import"./UserOrTeamBadge-C6sHGAPI.js";import"./TeamBadge-C8u27I6r.js";import"./UserBadge-MRmSzjU6.js";import"./useUserBundle-pC4-2Gey.js";import"./SkeletonTable-B83fe7X5.js";import"./MenuItem-CP-QVevM.js";import"./Card-BONVzKOo.js";import"./Chip-CX6tLmAn.js";import"./Autocomplete-BXXvM_Tf.js";import"./usePreviousProps-CfQV1P60.js";import"./SkeletonButton-Co5le0HJ.js";import"./SkeletonInlineBlock-DfOva5mF.js";import"./SkeletonParagraph-u_Ry22JM.js";import"./IconSvgButton-BULkJR2Q.js";import"./FormControlLabel-C3drqlKP.js";import"./Checkbox-BfiTC_Z_.js";import"./SwitchBase-DxajR-py.js";import"./useUpdateAcl-Cl8gWcU5.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
