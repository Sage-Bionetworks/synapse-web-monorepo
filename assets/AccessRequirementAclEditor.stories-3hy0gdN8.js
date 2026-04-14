import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-C5G3mSsR.js";import{A as i}from"./AccessRequirementAclEditor-D8fxIXet.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DUGTLQvp.js";import"./index-ZLaaxmrv.js";import"./_baseOrderBy-DzTN0t1b.js";import"./_baseIteratee-BJFOXZpA.js";import"./_baseMap-KZgyx6ES.js";import"./_baseEach-xqhXeHjp.js";import"./useInfiniteQuery-DjR-9fP5.js";import"./AclEditor-GqM-LJSd.js";import"./UserSearchBox-CjGP-vtF.js";import"./useDebouncedEffect-CE8T3ull.js";import"./useUserGroupHeader-9PNLN8Yb.js";import"./UserOrTeamBadge-BLU7eoyA.js";import"./TeamBadge-DEXjEt4D.js";import"./UserBadge-CvgJynwa.js";import"./useUserBundle-b7Uv0-A-.js";import"./SkeletonTable-q_wTrDuF.js";import"./MenuItem-DBKy37Hp.js";import"./Card-cZbkiVcl.js";import"./Chip-j4Xp3f_v.js";import"./Autocomplete-BXFPR9ju.js";import"./usePreviousProps-CGWoFtrf.js";import"./SkeletonButton-_Eu_07NL.js";import"./SkeletonInlineBlock-BpaxCT_H.js";import"./SkeletonParagraph-B8DwnroK.js";import"./IconSvgButton-CEDpx3ef.js";import"./FormControlLabel-k-SWrQ8f.js";import"./Checkbox-CB1vuwHn.js";import"./SwitchBase-CO_2vZSB.js";import"./useUpdateAcl-DzwP6ydh.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
