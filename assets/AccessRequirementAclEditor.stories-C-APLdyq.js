import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-BqdsSWZd.js";import{A as i}from"./AccessRequirementAclEditor-Dj92YKsc.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-I-kVvhtC.js";import"./index-BGf55DBP.js";import"./_baseOrderBy-Dmv0IoPS.js";import"./_baseIteratee-BKxCLCkQ.js";import"./_baseMap-DAe4OjTy.js";import"./_baseEach-MY-m3ebR.js";import"./useInfiniteQuery-B8rjpe3i.js";import"./AclEditor-DfgIncBP.js";import"./UserSearchBox-BgN-JR1h.js";import"./useDebouncedEffect-CLjkSd3w.js";import"./UserBadge-CBefG1yG.js";import"./useUserBundle-D7Oq3eOX.js";import"./SkeletonTable-BNCsFwsu.js";import"./MenuItem-BDOSlvEx.js";import"./Card-rcxhgfJE.js";import"./Chip-QNpY_KS_.js";import"./UserOrTeamBadge-DmHt8I9q.js";import"./TeamBadge-Cd3bGV8c.js";import"./Autocomplete-D2L8I004.js";import"./usePreviousProps-BGc4kDSn.js";import"./SkeletonButton-DQlCUFlj.js";import"./SkeletonInlineBlock-BTiJ2BO_.js";import"./SkeletonParagraph-CITKHxXA.js";import"./IconSvgButton-ADltHFQM.js";import"./FormControlLabel-0ry4_IyI.js";import"./Checkbox-ZoMln06J.js";import"./SwitchBase-D249JllU.js";import"./useUpdateAcl-SVfrfBGA.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
