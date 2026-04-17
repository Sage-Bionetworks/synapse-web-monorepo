import{M as p,a as d,r as m,j as e,B as u,P as E}from"./iframe-C6yCTbiI.js";import{A as i}from"./AccessRequirementAclEditor-hDDK9bHS.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CCqxr0YG.js";import"./index-B3SxQMwi.js";import"./_baseOrderBy-GdORY4lT.js";import"./_baseIteratee-PNjmm_hH.js";import"./_baseMap-Bc4yxRDs.js";import"./_baseEach-qqIK4uJJ.js";import"./useInfiniteQuery-87POMCNY.js";import"./AclEditor-DKbai53k.js";import"./UserSearchBox-C6uo6-Wd.js";import"./useDebouncedEffect-8bCRJRcE.js";import"./useUserGroupHeader-5j2MpiwC.js";import"./UserOrTeamBadge-h5u6cOGp.js";import"./TeamBadge-DjzEAR1Q.js";import"./UserBadge-CJBcuBDD.js";import"./useUserBundle-BUCs7RFl.js";import"./SkeletonTable-BTe-OCwr.js";import"./MenuItem-CKNKfHkT.js";import"./Card-CwMidbhG.js";import"./Chip-DN5j6xVl.js";import"./Autocomplete-BsHfqsAU.js";import"./usePreviousProps-BlssNkvg.js";import"./SkeletonButton-BSw7ANLA.js";import"./SkeletonInlineBlock-kzXVwRpV.js";import"./SkeletonParagraph-CZqj6TP0.js";import"./IconSvgButton-CO_XdxA5.js";import"./FormControlLabel-blAWuUdq.js";import"./Checkbox-BvslvcYh.js";import"./SwitchBase-C0tFzd3x.js";import"./useUpdateAcl-D8IHr5xe.js";const z={title:"Governance/AccessRequirementAclEditor",component:i,render:function(n){const[c,o]=m.useState(!1),a=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{o(!0),a.current?.save()},variant:"contained",disabled:c,children:"Save ACL"}),e.jsx(E,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...n,ref:a,onSaveComplete:()=>o(!1)})})]})}},r={args:{accessRequirementId:p.id},parameters:{stack:"mock"}},t={args:{accessRequirementId:String(d)},parameters:{stack:"mock"}},s={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
