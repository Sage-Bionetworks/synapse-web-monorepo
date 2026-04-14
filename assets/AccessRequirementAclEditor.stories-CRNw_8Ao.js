import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-xuGDYskk.js";import{A as i}from"./AccessRequirementAclEditor-d9Oz5L3c.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Cxp6U1vK.js";import"./index-D8fOn0Se.js";import"./_baseOrderBy-DUIukmXU.js";import"./_baseIteratee-DoirJgef.js";import"./_baseMap-DnYKem1g.js";import"./_baseEach-DVo5fh0p.js";import"./useInfiniteQuery-DjTbIVFH.js";import"./AclEditor-Bqe4UFmS.js";import"./UserSearchBox-DIunYbET.js";import"./useDebouncedEffect-DnAR-4CK.js";import"./useUserGroupHeader-CzZ91UGJ.js";import"./UserOrTeamBadge-Bg36yccR.js";import"./TeamBadge-D8VFlvej.js";import"./UserBadge-BorFtQsG.js";import"./useUserBundle-DtSERE0H.js";import"./SkeletonTable-Bn51DOnQ.js";import"./MenuItem-D1rBKZNi.js";import"./Card-B4NJfnf-.js";import"./Chip-Ckkk-5JS.js";import"./Autocomplete-DuOgffOl.js";import"./usePreviousProps-CRWTbO4u.js";import"./SkeletonButton-Ba2syrHs.js";import"./SkeletonInlineBlock-CuJjaS51.js";import"./SkeletonParagraph-BP-szXpV.js";import"./IconSvgButton-DN76qpY2.js";import"./FormControlLabel-7w8AtTFx.js";import"./Checkbox-C5w0MlgT.js";import"./SwitchBase-BP58HNZ_.js";import"./useUpdateAcl-BE27JcDh.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
