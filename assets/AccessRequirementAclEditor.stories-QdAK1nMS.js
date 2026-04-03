import{M as E,g as c,a as o,b as p,c as R,r as m,j as e,B as u,P as A}from"./iframe-DWQ8siyH.js";import{A as i}from"./AccessRequirementAclEditor-CiRSnGKV.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BQ0XOVXE.js";import"./index-Dx8jX-FA.js";import"./_baseOrderBy-BsRgUF4a.js";import"./_baseIteratee-BRGnOUnX.js";import"./_baseMap-D4OvXgY2.js";import"./_baseEach-C_WN81a2.js";import"./useInfiniteQuery-BisHU3cB.js";import"./AclEditor-CoE_P80W.js";import"./UserSearchBoxV2-BWyENg9-.js";import"./useDebouncedEffect-C55SJiWe.js";import"./use-deep-compare-effect.esm-CQ4cJG4K.js";import"./uniq-CholbGe1.js";import"./without-B5WEBOHu.js";import"./UserBadge-DnxnUVWx.js";import"./useUserBundle-C6KLzzS2.js";import"./SkeletonTable-pyMLa-VH.js";import"./MenuItem-B0BEM2XP.js";import"./Card-WCaqP096.js";import"./Chip--ZUBGmuC.js";import"./Select-aab027f3.esm-C-z2SwsW.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-C8ghOn9w.js";import"./TeamBadge-CiS2rmfU.js";import"./SkeletonButton-Drh7CQoD.js";import"./SkeletonInlineBlock-U2SdkY6_.js";import"./SkeletonParagraph-BzFwIbvm.js";import"./IconSvgButton-DKwiqbNz.js";import"./FormControlLabel-BVEDJFnl.js";import"./Checkbox-DB5drz-0.js";import"./SwitchBase-CaB4uxt0.js";import"./useUpdateAcl-BkOPF7x2.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(A,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(R)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
