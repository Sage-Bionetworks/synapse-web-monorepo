import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-KW3Ki4s5.js";import{A as i}from"./AccessRequirementAclEditor-D4Z5It6w.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CpHsZk-y.js";import"./index-CBVoQ7Md.js";import"./_baseOrderBy-nJrzT3qc.js";import"./_baseIteratee-Cq4s9rvn.js";import"./_baseMap-BQL-gxEZ.js";import"./_baseEach-fBObMu14.js";import"./useInfiniteQuery-B3Zfqdzl.js";import"./AclEditor-ChFuMCXP.js";import"./UserSearchBox-ycH3wZtb.js";import"./useDebouncedEffect-DI29ADIv.js";import"./UserBadge-CKE8L02R.js";import"./useUserBundle-DcHRF-pN.js";import"./queryOptions-C9woPjwX.js";import"./SkeletonTable-DKXzhoLj.js";import"./MenuItem-Cxj9mVkl.js";import"./Card-BJGUbHlx.js";import"./Chip-M2qGtBYy.js";import"./UserOrTeamBadge-DaBJZHjy.js";import"./TeamBadge-3V3sElnX.js";import"./Autocomplete-BW2G6CrW.js";import"./usePreviousProps-pcPmgYqd.js";import"./SkeletonButton-Bn8xeqTi.js";import"./SkeletonInlineBlock-Cx7fF-gW.js";import"./SkeletonParagraph-iKwtI13n.js";import"./IconSvgButton-A4mh2NOT.js";import"./FormControlLabel-DD0DDA_y.js";import"./Checkbox-D-msWVBX.js";import"./SwitchBase-Bk1kmRTR.js";import"./useUpdateAcl-DTbAP_qx.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
