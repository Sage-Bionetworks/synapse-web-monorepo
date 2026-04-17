import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-Bg-s9pTZ.js";import{A as i}from"./AccessRequirementAclEditor-ggRPAm2g.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-S-5D3Egc.js";import"./index-BjGPL7ol.js";import"./_baseOrderBy-D6jiSVQT.js";import"./_baseIteratee-BAr5j981.js";import"./_baseMap-B33d-4DG.js";import"./_baseEach-BxudFW9Z.js";import"./useInfiniteQuery-Camq04G4.js";import"./AclEditor-NzGViR7G.js";import"./UserSearchBox-C5zjrBDD.js";import"./useDebouncedEffect-tpD84LoS.js";import"./UserBadge-D2x7qBuJ.js";import"./useUserBundle-Dt_B1mhI.js";import"./SkeletonTable-Bbn4NeNZ.js";import"./MenuItem-D2-zdb04.js";import"./Card-B9WiC7Qz.js";import"./Chip-DPIa4PAj.js";import"./UserOrTeamBadge-Y69jUfgD.js";import"./TeamBadge-C67jnyCQ.js";import"./Autocomplete-DItW-jcs.js";import"./usePreviousProps-CqDukbv0.js";import"./SkeletonButton-Dp_QSsYr.js";import"./SkeletonInlineBlock-BF2HGXEd.js";import"./SkeletonParagraph-B9vNapgZ.js";import"./IconSvgButton-D29WzwUQ.js";import"./FormControlLabel-HKnEx2oy.js";import"./Checkbox-D-ymD47b.js";import"./SwitchBase-CW3A8DBo.js";import"./useUpdateAcl-CRf0Vu9b.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
