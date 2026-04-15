import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-C4gfjmJw.js";import{A as i}from"./AccessRequirementAclEditor-CvbU7o_I.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CjFFVIfw.js";import"./index-XCAB_K8P.js";import"./_baseOrderBy-BKLqs-oK.js";import"./_baseIteratee-Dz35VWMi.js";import"./_baseMap-DkFsmMNY.js";import"./_baseEach-kgydWJu2.js";import"./useInfiniteQuery-R-HWjYUM.js";import"./AclEditor-FpFUAbGE.js";import"./UserSearchBox-DvUPfe4s.js";import"./useDebouncedEffect-BNGAUXV0.js";import"./useUserGroupHeader-CjLGfw2Z.js";import"./UserOrTeamBadge-CIStvqoI.js";import"./TeamBadge-CYUxDLZ8.js";import"./UserBadge-dOsih4M-.js";import"./useUserBundle-DCmht4A_.js";import"./SkeletonTable-BpAtksSS.js";import"./MenuItem-cS-lgy5x.js";import"./Card-E7BKmfZX.js";import"./Chip-DjisOeCN.js";import"./Autocomplete-Bm2VOkjp.js";import"./usePreviousProps-DMi3XmsN.js";import"./SkeletonButton-BIeEptZL.js";import"./SkeletonInlineBlock-BRt0lIXt.js";import"./SkeletonParagraph-C0oOWbiy.js";import"./IconSvgButton-B_O52337.js";import"./FormControlLabel-xBN1RuLV.js";import"./Checkbox-Bg5y91Je.js";import"./SwitchBase-BsLUiaA3.js";import"./useUpdateAcl-CZVPocaC.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
