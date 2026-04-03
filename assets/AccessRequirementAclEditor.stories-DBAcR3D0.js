import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-DYswlUGP.js";import{A as i}from"./AccessRequirementAclEditor-CIQQcJWk.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DplbVuLW.js";import"./index-BMR4-6mU.js";import"./_baseOrderBy-eTLvEUfR.js";import"./_baseIteratee-DHYAHbZz.js";import"./_baseMap-DNdo1oCm.js";import"./_baseEach-COdfZHMJ.js";import"./useInfiniteQuery-C6sjWaRu.js";import"./AclEditor-BBhKJf4G.js";import"./UserSearchBox-CXXWYlxV.js";import"./useDebouncedEffect-C1sHbCvU.js";import"./UserBadge-DUmGtykH.js";import"./useUserBundle-DOc2ZPa9.js";import"./SkeletonTable-D2i5wmbG.js";import"./MenuItem-_kEtlbZc.js";import"./Card-CwPDBa8H.js";import"./Chip-DAxgxn8_.js";import"./UserOrTeamBadge-B9AR19GT.js";import"./TeamBadge-DU43LRAC.js";import"./Autocomplete-CAKxcECi.js";import"./usePreviousProps-8XNsrnMc.js";import"./SkeletonButton-DEMQuh9j.js";import"./SkeletonInlineBlock-CUdvST4e.js";import"./SkeletonParagraph-DYuPzAGZ.js";import"./IconSvgButton-BdBTGzef.js";import"./FormControlLabel-D5Zyhonu.js";import"./Checkbox-BJOMAjKn.js";import"./SwitchBase-Dw5npIqo.js";import"./useUpdateAcl-DDACIJWI.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
