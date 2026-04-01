import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-CztmM481.js";import{A as i}from"./AccessRequirementAclEditor-CoOZ_flW.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-W_xsYiyf.js";import"./index-D4zvspUx.js";import"./_baseOrderBy-BwjN5JHA.js";import"./_baseIteratee-C79TkaLa.js";import"./_baseMap-BmOpwIc1.js";import"./_baseEach-CNX5zfrb.js";import"./useInfiniteQuery-CMUwdvwB.js";import"./AclEditor-UILuCiTl.js";import"./UserSearchBoxV2-BpdCdi0P.js";import"./useDebouncedEffect-DeJrfB9Z.js";import"./use-deep-compare-effect.esm-BSBdlWy4.js";import"./uniq-DMlkKil5.js";import"./without-DiF9kdVW.js";import"./UserBadge-Di9rrgvd.js";import"./useUserBundle-BsSVCPoC.js";import"./SkeletonTable-D62IODcw.js";import"./MenuItem-DhY-eVIi.js";import"./Card-DZPeI2yE.js";import"./Chip-CpQHwqZu.js";import"./Select-aab027f3.esm-DGUcMZmW.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-COUfNdD0.js";import"./TeamBadge-D9bObeI8.js";import"./SkeletonButton-BWr_w7rt.js";import"./SkeletonInlineBlock-BafzGMgM.js";import"./SkeletonParagraph-RQGRwxXl.js";import"./IconSvgButton-BvFRXmGn.js";import"./FormControlLabel-qKrq3Bnz.js";import"./Checkbox-BBO2iwio.js";import"./SwitchBase-BegMbA4f.js";import"./useUpdateAcl-D4YnXwrT.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
