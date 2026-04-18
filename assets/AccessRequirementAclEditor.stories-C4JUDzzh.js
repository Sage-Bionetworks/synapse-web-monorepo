import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-vLBQZPS1.js";import{A as i}from"./AccessRequirementAclEditor-CE8wr6y3.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-C7_nf46j.js";import"./index-huQsABd9.js";import"./_baseOrderBy-BC97-PTG.js";import"./_baseIteratee-BmZJlmI5.js";import"./_baseMap-BExDUO8C.js";import"./_baseEach-D90opGFA.js";import"./useInfiniteQuery-CjBQlBHx.js";import"./AclEditor-BSk2jt86.js";import"./UserSearchBox-D5sremVT.js";import"./useDebouncedEffect-BW4_TbpK.js";import"./UserBadge-PCszth9B.js";import"./useUserBundle-BzYdunjk.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-vLDxttH1.js";import"./MenuItem-B9IS4RBy.js";import"./Card-vpuDZNT5.js";import"./Chip-BwFdox-s.js";import"./UserOrTeamBadge-BrN8Qpje.js";import"./TeamBadge-B0XMle2i.js";import"./Autocomplete-BxsEBMw_.js";import"./usePreviousProps-ChDDB4-s.js";import"./SkeletonButton-Bpq0DUhs.js";import"./SkeletonInlineBlock-Ck9MEOcu.js";import"./SkeletonParagraph-BdLk36IL.js";import"./IconSvgButton-BZQkEXPU.js";import"./FormControlLabel-ChegGM40.js";import"./Checkbox-C06X4GkF.js";import"./SwitchBase-BpROeQ6w.js";import"./useUpdateAcl-CChDWABQ.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
