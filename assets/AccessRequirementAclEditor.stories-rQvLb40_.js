import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-ClOjSJTq.js";import{A as i}from"./AccessRequirementAclEditor-MTWSwVat.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-lD4_jFjj.js";import"./index-35chbdE6.js";import"./_baseOrderBy-Db020ehJ.js";import"./_baseIteratee-DSUbmYQr.js";import"./_baseMap-CzWHLApD.js";import"./_baseEach-DVm10B22.js";import"./useInfiniteQuery-KGAKspLs.js";import"./AclEditor-CHUhaHbx.js";import"./UserSearchBox-TiAKfxMp.js";import"./useDebouncedEffect-BKM7Wg5j.js";import"./UserBadge-BJCbmXWW.js";import"./useUserBundle-F9LYJoss.js";import"./SkeletonTable-j4z7TzDn.js";import"./MenuItem-DYvQjb0q.js";import"./Card-ChQtRhb_.js";import"./Chip-CnxOiplN.js";import"./UserOrTeamBadge-C23S8KZO.js";import"./TeamBadge-Ce6zs6pC.js";import"./Autocomplete-SfvGNW1s.js";import"./usePreviousProps-D9lcDy2V.js";import"./SkeletonButton-_jksuL_Y.js";import"./SkeletonInlineBlock-BlfzAWSG.js";import"./SkeletonParagraph-C8wM_A5n.js";import"./IconSvgButton-vblARVlo.js";import"./FormControlLabel-CFZjeheO.js";import"./Checkbox-CeKJbUBf.js";import"./SwitchBase-CdsD8oG7.js";import"./useUpdateAcl-Bz40jO5s.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
