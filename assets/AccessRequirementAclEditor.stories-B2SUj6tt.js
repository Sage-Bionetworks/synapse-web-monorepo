import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-CDo31VQT.js";import{A as i}from"./AccessRequirementAclEditor-CDTuBoKc.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-De0YyHGF.js";import"./index-n3RJ91jU.js";import"./_baseOrderBy-CzmabnCx.js";import"./_baseIteratee-22si1V97.js";import"./_baseMap-DRCaeSez.js";import"./_baseEach-D9qbLuld.js";import"./useInfiniteQuery-zNzDu-Ai.js";import"./AclEditor-DPHJZm_R.js";import"./UserSearchBox-DQVrJBwk.js";import"./useDebouncedEffect-pm5O216d.js";import"./useUserGroupHeader-Cf-nNW5u.js";import"./UserOrTeamBadge-BrTBi1bT.js";import"./TeamBadge-BKkuj7BD.js";import"./UserBadge-CglgAQ0Y.js";import"./useUserBundle-BO5FAfwo.js";import"./SkeletonTable-DUiAsn0J.js";import"./MenuItem-CM8kbxyL.js";import"./Card-BmXOSgoq.js";import"./Chip-B6hxaUER.js";import"./Autocomplete-TnARubMI.js";import"./usePreviousProps-CMRxk_ZT.js";import"./SkeletonButton-5CdV1WvK.js";import"./SkeletonInlineBlock-DWU8rLPE.js";import"./SkeletonParagraph-KDbQ1Dqi.js";import"./IconSvgButton-DISaJiDN.js";import"./FormControlLabel-D6JSzQu3.js";import"./Checkbox-BRd7sRay.js";import"./SwitchBase-UfViqCLi.js";import"./useUpdateAcl-DzznMuwR.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
