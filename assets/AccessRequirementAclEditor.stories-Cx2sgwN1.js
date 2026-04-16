import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-Dwm9QZ_I.js";import{A as i}from"./AccessRequirementAclEditor-Cw9EmyG1.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-VXF8jzzv.js";import"./index-unwEzT-4.js";import"./_baseOrderBy-BCLGTMTg.js";import"./_baseIteratee-Cmga9963.js";import"./_baseMap-BQV7qzGd.js";import"./_baseEach-CyVnp5d9.js";import"./useInfiniteQuery-uvWeC_ze.js";import"./AclEditor-C_botMmi.js";import"./UserSearchBox-DVmRzfX1.js";import"./useDebouncedEffect-3VrHthCV.js";import"./useUserGroupHeader-Dv2pYMDV.js";import"./UserOrTeamBadge-Bq5CRrzQ.js";import"./TeamBadge-Cy3ZBH1G.js";import"./UserBadge-DxpQhJxS.js";import"./useUserBundle-rJLvBIVN.js";import"./SkeletonTable-CYNdtRWy.js";import"./MenuItem-BeAkG7fl.js";import"./Card-Dt1qjp5D.js";import"./Chip-DSK9YH7S.js";import"./Autocomplete-DT3e_ej1.js";import"./usePreviousProps-DCGKHicZ.js";import"./SkeletonButton-DgRSBFJp.js";import"./SkeletonInlineBlock-Oe83SNYG.js";import"./SkeletonParagraph-BN0GLaey.js";import"./IconSvgButton-D6yY30O3.js";import"./FormControlLabel-COrRVd_P.js";import"./Checkbox-uIztiP3l.js";import"./SwitchBase-BCQMfLTx.js";import"./useUpdateAcl-CeZnTYEN.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
