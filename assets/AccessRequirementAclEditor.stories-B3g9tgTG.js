import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-iaFph9yc.js";import{A as i}from"./AccessRequirementAclEditor-D3rEPrhE.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-GgK6J5DE.js";import"./index-D1SN15cL.js";import"./_baseOrderBy-C6LPUMiM.js";import"./_baseIteratee-Bur-meKq.js";import"./_baseMap-DhThEwhz.js";import"./_baseEach-BaFTTzmm.js";import"./useQueries-CBX8q7F2.js";import"./useInfiniteQuery-B8r8qZIF.js";import"./AclEditor-CNL7h4wh.js";import"./UserSearchBoxV2-DJe_f8Yj.js";import"./useDebouncedEffect-C8D4lOK0.js";import"./use-deep-compare-effect.esm-e71_7G6x.js";import"./uniq-BEl88TRR.js";import"./without-DeolgOsl.js";import"./UserBadge-DSA5D5_6.js";import"./useUserBundle-PLLHiZJr.js";import"./useSuspenseQuery-C563HQMf.js";import"./SkeletonTable-B2Y-Wv49.js";import"./MenuItem-CecQK7Ew.js";import"./Card-BM6tXyVk.js";import"./Chip-BBLqCKej.js";import"./Select-aab027f3.esm-CqxnU4Ee.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BprTyHoO.js";import"./TeamBadge-COeawU5T.js";import"./SkeletonButton-B6vkGKKc.js";import"./SkeletonInlineBlock-t24_wtaY.js";import"./SkeletonParagraph-BYLtoQSS.js";import"./IconSvgButton-8ukdEPGP.js";import"./FormControlLabel-DQ86lw9L.js";import"./Checkbox-C2zRGAX9.js";import"./SwitchBase-B4RLmS9t.js";import"./useUpdateAcl-CcBnqTNg.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const se=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,se as __namedExportsOrder,re as default};
