import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-QSWh_nl6.js";import{A as i}from"./AccessRequirementAclEditor-DAJbS7GI.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BOSef9kn.js";import"./index-D_eAvhKF.js";import"./_baseOrderBy-CRclIjEo.js";import"./_baseIteratee-CFwgFnBf.js";import"./_baseMap-Bmwx28tM.js";import"./_baseEach-C5TZrtK0.js";import"./useInfiniteQuery-B5lzZVtS.js";import"./AclEditor-B4HXuAG7.js";import"./UserSearchBox-DF1Xsyn1.js";import"./useDebouncedEffect-aeI6dmOh.js";import"./useUserGroupHeader-Bv8jkTw1.js";import"./UserOrTeamBadge-BDYwJpGM.js";import"./TeamBadge-UW9RvGOB.js";import"./UserBadge-B7mCgiDb.js";import"./useUserBundle-Dx6kjAkx.js";import"./SkeletonTable-D0oXxerW.js";import"./MenuItem-DfWOa7RV.js";import"./Card-Dsubg--P.js";import"./Chip-BVgBfsjl.js";import"./Autocomplete-DzJi86KT.js";import"./usePreviousProps-B1yfhd_h.js";import"./SkeletonButton-Ca6I-8rV.js";import"./SkeletonInlineBlock-rFa2WtsV.js";import"./SkeletonParagraph-C2ql9lI3.js";import"./IconSvgButton-BsfcZNmi.js";import"./FormControlLabel-C2B2UHHo.js";import"./Checkbox-CqoChSP_.js";import"./SwitchBase-o_ZrMHWt.js";import"./useUpdateAcl-Dn0l4GEN.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
