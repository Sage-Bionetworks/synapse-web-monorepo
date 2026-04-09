import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-I9EoyWQf.js";import{A as i}from"./AccessRequirementAclEditor-DcWsWd6Z.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CBjoxYBs.js";import"./index-BR8vhpyy.js";import"./_baseOrderBy-DnLUej7u.js";import"./_baseIteratee-DhR4h-9n.js";import"./_baseMap-C2ThkLcN.js";import"./_baseEach-BVz6q7ID.js";import"./useInfiniteQuery-ybg8uaKh.js";import"./AclEditor-cKidHLcT.js";import"./UserSearchBox-BgYDlc1N.js";import"./useDebouncedEffect-DRUnOLf-.js";import"./useUserGroupHeader-2ZjU8d_Z.js";import"./UserOrTeamBadge-B970kYrj.js";import"./TeamBadge-C2CWKcU_.js";import"./UserBadge-DfnAepuT.js";import"./useUserBundle-B0BzK8VS.js";import"./SkeletonTable-Daoy3Wk1.js";import"./MenuItem-DLjd3Exv.js";import"./Card-xjD4swog.js";import"./Chip-qFrw06qV.js";import"./Autocomplete-DjJ8XXAP.js";import"./usePreviousProps-D8JQgpCi.js";import"./SkeletonButton-BZ4IW0NV.js";import"./SkeletonInlineBlock-CnFxuHgE.js";import"./SkeletonParagraph-C2Jym8Lt.js";import"./IconSvgButton-DpR3Ifw5.js";import"./FormControlLabel-C49ko43X.js";import"./Checkbox-BsQp1kE6.js";import"./SwitchBase-BW1Maf3V.js";import"./useUpdateAcl-CuofSz0I.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
