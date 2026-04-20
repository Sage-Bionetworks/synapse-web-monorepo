import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-D6P0nkNQ.js";import{A as i}from"./AccessRequirementAclEditor-mtGUZSk_.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements--XIHuGmg.js";import"./index-ClysohDO.js";import"./_baseOrderBy-TCniqArR.js";import"./_baseIteratee-CU8XNsfN.js";import"./_baseMap-c8a03t3y.js";import"./_baseEach-DEfOtqE_.js";import"./useInfiniteQuery-BabK25aM.js";import"./AclEditor-BnAipeGL.js";import"./UserSearchBox-Bo-K_kMI.js";import"./useDebouncedEffect-Bs2LG_Ac.js";import"./UserBadge-BfOkKJj6.js";import"./useUserBundle-Da75ZNju.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-B5s8sRSp.js";import"./MenuItem-BFhkC2rz.js";import"./Card-Km0k0NLl.js";import"./Chip-BsvDvlw9.js";import"./UserOrTeamBadge-4CHYFhob.js";import"./TeamBadge-Cz55Lg_4.js";import"./Autocomplete-DqltHcl4.js";import"./usePreviousProps-Duwj02pS.js";import"./SkeletonButton-CpvcVcC6.js";import"./SkeletonInlineBlock-cwgAS3YS.js";import"./SkeletonParagraph-Dny_21Xp.js";import"./IconSvgButton-DKgqluZ_.js";import"./FormControlLabel-C3dQ3TAO.js";import"./Checkbox-BbO_eIS6.js";import"./SwitchBase-Cxiym2LW.js";import"./useUpdateAcl-CsgEUVsO.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
