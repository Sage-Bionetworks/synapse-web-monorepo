import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-BnslxpU_.js";import{A as i}from"./AccessRequirementAclEditor-B70Nrg4S.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-rp0b6PN1.js";import"./index-BBnrFY0q.js";import"./_baseOrderBy-BbY_UuU_.js";import"./_baseIteratee-DKszTi1G.js";import"./_baseMap-CyJy1Bu9.js";import"./_baseEach-DWYlC-Oi.js";import"./useInfiniteQuery-CUtRjsVX.js";import"./AclEditor-DTnsTsWi.js";import"./UserSearchBox-CSH2Vyqw.js";import"./useDebouncedEffect-BhaQy9He.js";import"./UserBadge-BgBEo1dQ.js";import"./useUserBundle-C1FSIxUt.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-CoVehSLQ.js";import"./MenuItem-DtwhjM27.js";import"./Card-CRK3-fg-.js";import"./Chip-Bn_oC1Yj.js";import"./UserOrTeamBadge-COJBl0J0.js";import"./TeamBadge-DnTWR1P1.js";import"./Autocomplete-DnGR1Ih4.js";import"./usePreviousProps-DI4-AD8Z.js";import"./SkeletonButton-5fVnmkER.js";import"./SkeletonInlineBlock-DPXtIPY8.js";import"./SkeletonParagraph-B0oRHwOu.js";import"./IconSvgButton-gydFodVL.js";import"./FormControlLabel-DFnjR6do.js";import"./Checkbox-LdJOabl-.js";import"./SwitchBase-D8Y_Jyat.js";import"./useUpdateAcl-Bfcm20eP.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
