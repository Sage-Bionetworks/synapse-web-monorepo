import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-CFYObmv2.js";import{A as i}from"./AccessRequirementAclEditor-DgeCwtNX.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-WsNzyT70.js";import"./index-DTq8PnfG.js";import"./_baseOrderBy-lQa05oOf.js";import"./_baseIteratee-BYzSMaDv.js";import"./_baseMap-YiQ3K5X2.js";import"./_baseEach-CNVYPDDa.js";import"./useInfiniteQuery-DrJ287ay.js";import"./AclEditor-DFf2Hm5j.js";import"./UserSearchBox-CI2NvH21.js";import"./useDebouncedEffect-DfSpjuz8.js";import"./UserBadge-CqWrPdDF.js";import"./useUserBundle-CFoU7ptg.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-D1Oc41tF.js";import"./MenuItem-1x19aVl7.js";import"./Card-CVTuX8UO.js";import"./Chip-DVyYNIMf.js";import"./UserOrTeamBadge-B7vwJt4S.js";import"./TeamBadge-BZRH4Ikn.js";import"./Autocomplete-B0dqw6JS.js";import"./usePreviousProps-BAn1aaJG.js";import"./SkeletonButton-BAoT4yfs.js";import"./SkeletonInlineBlock-B8gtORn3.js";import"./SkeletonParagraph-2BG-wyQ2.js";import"./IconSvgButton-DzAAZ4RK.js";import"./FormControlLabel-X6sNt4uF.js";import"./Checkbox-DqoMzdfH.js";import"./SwitchBase-CeR8qk8o.js";import"./useUpdateAcl-MaHFF3ON.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
