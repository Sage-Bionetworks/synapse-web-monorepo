import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-CkF2RhKN.js";import{A as i}from"./AccessRequirementAclEditor-nW4obJN-.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BLD7zE6A.js";import"./index-Ci6ZMoUD.js";import"./_baseOrderBy-DPTo7phS.js";import"./_baseIteratee-BEB7CkmA.js";import"./_baseMap-DTKDCLFE.js";import"./_baseEach-CNkAXNOm.js";import"./useInfiniteQuery-B7jSsWM4.js";import"./AclEditor-DiL7aXBJ.js";import"./UserSearchBox-Bo06dWcK.js";import"./useDebouncedEffect-BbJaYsWC.js";import"./UserBadge-Yb-L8AxF.js";import"./useUserBundle-DQZHVi7_.js";import"./SkeletonTable-_Ae5KVb-.js";import"./MenuItem-Bn_zQ0BD.js";import"./Card-BR9tyc2m.js";import"./Chip-BzTGJFEB.js";import"./UserOrTeamBadge-Captg1T4.js";import"./TeamBadge-CP0KEZeR.js";import"./Autocomplete-BYnMiYQ2.js";import"./usePreviousProps-DoqDJIYb.js";import"./SkeletonButton-szKajW48.js";import"./SkeletonInlineBlock-BHo_rHpz.js";import"./SkeletonParagraph-D5pjFcDJ.js";import"./IconSvgButton-CuJMpUCK.js";import"./FormControlLabel-CvAqaT5C.js";import"./Checkbox-BYhyDoP4.js";import"./SwitchBase-Cfp9yLa-.js";import"./useUpdateAcl-CdFPjwDZ.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
