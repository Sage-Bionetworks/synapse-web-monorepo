import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-DvDRa5Q6.js";import{A as i}from"./AccessRequirementAclEditor-CNMhxYhk.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-43ONejHS.js";import"./index-DCaH_YMW.js";import"./_baseOrderBy-B5hExVXf.js";import"./_baseIteratee-CmNCC7oz.js";import"./_baseMap-BG4Szxcl.js";import"./_baseEach-CMAF8SZ0.js";import"./useInfiniteQuery-zp3UrFFS.js";import"./AclEditor-DB_oo1kI.js";import"./UserSearchBox-Dt5Xw7MC.js";import"./useDebouncedEffect-BtDyulUe.js";import"./useUserGroupHeader-Di1qf-9O.js";import"./UserOrTeamBadge-DvGSFVbO.js";import"./TeamBadge-CvVZSTwn.js";import"./UserBadge-DSzzvC5n.js";import"./useUserBundle-BPf8B545.js";import"./SkeletonTable-BUXMgZAX.js";import"./MenuItem-CBuG7QWi.js";import"./Card-C4dlgrEE.js";import"./Chip-dgVEWiiO.js";import"./Autocomplete-Duafx-n8.js";import"./usePreviousProps-2pyxAmjn.js";import"./SkeletonButton-DldMG8YD.js";import"./SkeletonInlineBlock-CqjLFWuf.js";import"./SkeletonParagraph-DNQOFkBl.js";import"./IconSvgButton-BlaOFog2.js";import"./FormControlLabel-CKHXVKum.js";import"./Checkbox-Cn1-qDlO.js";import"./SwitchBase-CRLg36Mp.js";import"./useUpdateAcl-C_jqCkFR.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
