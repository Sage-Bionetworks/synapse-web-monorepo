import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-BbbR7k03.js";import{A as i}from"./AccessRequirementAclEditor-BeQwekgG.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BZEn40zP.js";import"./index-BW5_rLqK.js";import"./_baseOrderBy-_nMHtKnN.js";import"./_baseIteratee-Cbj7J9fj.js";import"./_baseMap-DJBIFUcC.js";import"./_baseEach-GUUJEZ5y.js";import"./useInfiniteQuery-l0M08Fky.js";import"./AclEditor-CT27dI3L.js";import"./UserSearchBox-8VWE9mUZ.js";import"./useDebouncedEffect-DpR-P4I8.js";import"./UserBadge-DWO5wDPo.js";import"./useUserBundle-DbQDA0bX.js";import"./SkeletonTable-Dx60MFYV.js";import"./MenuItem-DDa15_zq.js";import"./Card-DrotIdtr.js";import"./Chip-Diq7UYnO.js";import"./UserOrTeamBadge-DzIisObA.js";import"./TeamBadge-1_wWVv75.js";import"./Autocomplete-BuSqBldn.js";import"./usePreviousProps-QHb4mi79.js";import"./SkeletonButton-DffrNQo6.js";import"./SkeletonInlineBlock-BbM-xsbl.js";import"./SkeletonParagraph-NMWzktwn.js";import"./IconSvgButton-BK7amixg.js";import"./FormControlLabel-UF_IHyRO.js";import"./Checkbox-UPXW_iIu.js";import"./SwitchBase-qa0TESIz.js";import"./useUpdateAcl-B4R8THSJ.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
