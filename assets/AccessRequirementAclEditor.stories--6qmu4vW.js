import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-BwdMKcfW.js";import{A as i}from"./AccessRequirementAclEditor-Ds4ahJJB.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DswR_YxC.js";import"./index-DPZa-GBy.js";import"./_baseOrderBy-DLgIa6mW.js";import"./_baseIteratee-VD_UmMwY.js";import"./_baseMap-CCHmg080.js";import"./_baseEach-e-P7ukc6.js";import"./useInfiniteQuery-BjFBPSmE.js";import"./AclEditor-BxoxxpkV.js";import"./UserSearchBox-WoOcNYMS.js";import"./useDebouncedEffect-Cb_h3h8D.js";import"./UserBadge-CA7iopPx.js";import"./useUserBundle-BXxupc5B.js";import"./SkeletonTable-O-mI3Ojq.js";import"./MenuItem-DnEBuXas.js";import"./Card-Bl3eAq5k.js";import"./Chip-CdEMn9W3.js";import"./UserOrTeamBadge-DRaw0ZTS.js";import"./TeamBadge-BqHxeZf0.js";import"./Autocomplete-Cj8_Qp3g.js";import"./usePreviousProps-Bo7rFF-f.js";import"./SkeletonButton-DUX7R0sB.js";import"./SkeletonInlineBlock-CGQ5Gfg-.js";import"./SkeletonParagraph-CepsPnNp.js";import"./IconSvgButton-m9BOWpvh.js";import"./FormControlLabel-BnBiSy9D.js";import"./Checkbox-CzvQeSJ4.js";import"./SwitchBase-B1boux3R.js";import"./useUpdateAcl-0cbI4sSE.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
