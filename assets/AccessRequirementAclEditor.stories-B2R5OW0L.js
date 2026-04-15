import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-ufwdWoqd.js";import{A as i}from"./AccessRequirementAclEditor-Bg3OnIRu.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BIB6y9Bx.js";import"./index-BjTsD0iq.js";import"./_baseOrderBy-BwxbpWc5.js";import"./_baseIteratee-DWHKXE_x.js";import"./_baseMap-Ak-9sm64.js";import"./_baseEach-DQLBE3q4.js";import"./useInfiniteQuery-DfHsBcwS.js";import"./AclEditor-DAZVKh1e.js";import"./UserSearchBox-BSLMHNc4.js";import"./useDebouncedEffect-DuiH_3zr.js";import"./useUserGroupHeader-BOzrLmfs.js";import"./UserOrTeamBadge-DEwhJcoT.js";import"./TeamBadge-B3cY-xDX.js";import"./UserBadge-sHUnGDAj.js";import"./useUserBundle-D634yYlN.js";import"./SkeletonTable-Dud8tXGA.js";import"./MenuItem-W_wmPF7v.js";import"./Card-CFTn_BNL.js";import"./Chip-CSBIn4pT.js";import"./Autocomplete-B2Qa4Boo.js";import"./usePreviousProps-Cv8lAokz.js";import"./SkeletonButton-LGNxHtYx.js";import"./SkeletonInlineBlock-DJWeJEjH.js";import"./SkeletonParagraph-Br9-4-N8.js";import"./IconSvgButton-pnEhrz9E.js";import"./FormControlLabel-evRqPcVo.js";import"./Checkbox-BW97U62k.js";import"./SwitchBase-7Y4vQbXh.js";import"./useUpdateAcl-BSwDjj1B.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
