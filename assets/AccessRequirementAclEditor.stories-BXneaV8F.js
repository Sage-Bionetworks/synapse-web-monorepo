import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-DlAeJyvm.js";import{A as i}from"./AccessRequirementAclEditor-CLssBjCL.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BSc0_wnd.js";import"./index-CRBkYYcS.js";import"./_baseOrderBy-DSro5dmW.js";import"./_baseIteratee-BeJgVukd.js";import"./_baseMap-CH41Ntgo.js";import"./_baseEach-B3PWukHy.js";import"./useInfiniteQuery-DNMsj4KR.js";import"./AclEditor-9QTBSE2T.js";import"./UserSearchBoxV2-Z7JOPXSo.js";import"./useDebouncedEffect-DQYyEgn9.js";import"./use-deep-compare-effect.esm-B-RqfxgB.js";import"./uniq-B3YPAm3j.js";import"./without--fuQY8Kw.js";import"./UserBadge-CsA0oRzK.js";import"./useUserBundle-BDeD3kk8.js";import"./SkeletonTable-DPSdTVk3.js";import"./MenuItem-Bx5CSZWI.js";import"./Card-CJMqK3BG.js";import"./Chip-CopACKXK.js";import"./Select-aab027f3.esm-Brd8yHVC.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CyhG1qDf.js";import"./TeamBadge-B424jgK5.js";import"./SkeletonButton-BcA4f8OA.js";import"./SkeletonInlineBlock-NsF75vHh.js";import"./SkeletonParagraph-B7DNR62K.js";import"./IconSvgButton-Cd9-RlEM.js";import"./FormControlLabel-BXRXUZd8.js";import"./Checkbox-BWImtRE8.js";import"./SwitchBase-dZ1Go2iy.js";import"./useUpdateAcl-BlGmTXjF.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID)
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602671'
  },
  parameters: {
    stack: 'development'
  }
}`,...t.parameters?.docs?.source}}};const ee=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,ee as __namedExportsOrder,$ as default};
