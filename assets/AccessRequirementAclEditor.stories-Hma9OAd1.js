import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-zB-jZjF1.js";import{A as i}from"./AccessRequirementAclEditor-DDHnxcni.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-N-mQs8gZ.js";import"./index-CpNo1svs.js";import"./_baseOrderBy-8C8_6s3v.js";import"./_baseIteratee-D_pQoQ0U.js";import"./_baseMap-3faxojLo.js";import"./_baseEach-BxbuAt9h.js";import"./useInfiniteQuery--NK2xn9-.js";import"./AclEditor-Bt4dcm-4.js";import"./UserSearchBox-CvWkNX_h.js";import"./useDebouncedEffect-BgMfo1QX.js";import"./useUserGroupHeader-aV7k__0H.js";import"./UserOrTeamBadge-BiOTE_VT.js";import"./TeamBadge-Dey48b7e.js";import"./UserBadge-t9MoYrmb.js";import"./useUserBundle-DmoRhqzX.js";import"./SkeletonTable-Xio-92ZC.js";import"./MenuItem-BWX0VE3I.js";import"./Card-Den_1IvA.js";import"./Chip-C8ZEijAb.js";import"./Autocomplete-DdeAb70f.js";import"./usePreviousProps-Bo09v6Gt.js";import"./SkeletonButton-DitOEAxO.js";import"./SkeletonInlineBlock-CeW9qPuC.js";import"./SkeletonParagraph-D0noDT_a.js";import"./IconSvgButton-jh-HHXNb.js";import"./FormControlLabel-XYuCSYJu.js";import"./Checkbox-Du6iielx.js";import"./SwitchBase-BJlTVCbW.js";import"./useUpdateAcl-BidUM_eM.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
