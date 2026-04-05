import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-b13k1F7I.js";import{A as i}from"./AccessRequirementAclEditor-BaP8pn7A.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-C_2FPiVV.js";import"./index-BnGRXv6y.js";import"./_baseOrderBy-GD0DasP4.js";import"./_baseIteratee-23LNJ6-w.js";import"./_baseMap-DxEPckuz.js";import"./_baseEach-CnMRyE2M.js";import"./useInfiniteQuery-BuA9b8--.js";import"./AclEditor-Dj6WAM5D.js";import"./UserSearchBox-CXUMS53t.js";import"./useDebouncedEffect-2rm6Hem2.js";import"./UserBadge-CsnCA53P.js";import"./useUserBundle-earXxlZb.js";import"./SkeletonTable-DL4vBEzw.js";import"./MenuItem-DH1v1_Sf.js";import"./Card-Ctn6KCGb.js";import"./Chip-DjWJ18GV.js";import"./UserOrTeamBadge-BccMONXY.js";import"./TeamBadge-BDdzFKaF.js";import"./Autocomplete-DG-a6nC4.js";import"./usePreviousProps-CbDsT3dl.js";import"./SkeletonButton-DVR5pv_e.js";import"./SkeletonInlineBlock-DRQHTWc8.js";import"./SkeletonParagraph-fVALJo5f.js";import"./IconSvgButton-Bzv7zpJG.js";import"./FormControlLabel-CCbquEuR.js";import"./Checkbox-QC8XFCZJ.js";import"./SwitchBase-C4-cm1yw.js";import"./useUpdateAcl-CW6Sx5U1.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
