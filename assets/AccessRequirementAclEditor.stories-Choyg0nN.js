import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-CbfOQY0w.js";import{A as i}from"./AccessRequirementAclEditor-CDlSX9JB.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BjCvcjrD.js";import"./index-BehqIFbh.js";import"./_baseOrderBy-Bq84jisV.js";import"./_baseIteratee-BUemcoB_.js";import"./_baseMap-t8X6kGPE.js";import"./_baseEach-CXb1C926.js";import"./useInfiniteQuery-DwAokM_o.js";import"./AclEditor-RzgYGKzN.js";import"./UserSearchBox-DIhvnESP.js";import"./useDebouncedEffect-BNCd82Cz.js";import"./useUserGroupHeader-CuG0-k8L.js";import"./UserOrTeamBadge-Buq1lQsw.js";import"./TeamBadge-DxgMFROE.js";import"./UserBadge-w-7xW1gI.js";import"./useUserBundle-CVhFQva8.js";import"./SkeletonTable-CE4I0355.js";import"./MenuItem-DYj3mh1g.js";import"./Card-_ZXijILc.js";import"./Chip-CeFdaJc8.js";import"./Autocomplete-CpnoKtna.js";import"./usePreviousProps-DKlj7xCm.js";import"./SkeletonButton-DqLe50tO.js";import"./SkeletonInlineBlock-be42gePS.js";import"./SkeletonParagraph-CCe-_wHo.js";import"./IconSvgButton-BfSVpvsG.js";import"./FormControlLabel-DIqi8v8L.js";import"./Checkbox-DBu6z0UA.js";import"./SwitchBase-Bx_c6nyi.js";import"./useUpdateAcl-D8aa6GWF.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
