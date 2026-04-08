import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-DcOQ9qHF.js";import{A as i}from"./AccessRequirementAclEditor-BG4Lr4ob.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B-ySsNsD.js";import"./index-Qd4VnuKv.js";import"./_baseOrderBy-NXSRpOSN.js";import"./_baseIteratee-DnNaE3ya.js";import"./_baseMap-vH1D4gpk.js";import"./_baseEach-DqnZX-4V.js";import"./useInfiniteQuery-ghiUseCs.js";import"./AclEditor-DRzWPGE4.js";import"./UserSearchBox-DeTpTQ-7.js";import"./useDebouncedEffect-DWH0kvM8.js";import"./UserBadge-Ckbrjynj.js";import"./useUserBundle-DhVVN5hx.js";import"./SkeletonTable-DMmO1dBv.js";import"./MenuItem-BnSVsxfU.js";import"./Card-Ba2QyRDi.js";import"./Chip-CelqGmC0.js";import"./UserOrTeamBadge-SKKE-jjR.js";import"./TeamBadge-BmqGm9o-.js";import"./Autocomplete-DXi90Z3V.js";import"./usePreviousProps-BCJjj9Wa.js";import"./SkeletonButton-BlWvLvXj.js";import"./SkeletonInlineBlock-YBvARA_9.js";import"./SkeletonParagraph-agQpiA4S.js";import"./IconSvgButton-DiD0Chqx.js";import"./FormControlLabel-CEo4Kpwe.js";import"./Checkbox-D3mQlatZ.js";import"./SwitchBase-DOuuVSF8.js";import"./useUpdateAcl-BXLNQ0s2.js";const y={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
