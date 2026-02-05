import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-CmoSAPSB.js";import{A as i}from"./AccessRequirementAclEditor-7YKDsDa8.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B0jypzSE.js";import"./index-C2zeCRkX.js";import"./_baseOrderBy-CzF72RSC.js";import"./_baseIteratee-DrVRnZ10.js";import"./_baseMap-Bv-goPXo.js";import"./_baseEach-BEIVkryU.js";import"./useQueries-BicLalCF.js";import"./useInfiniteQuery-apdbL5yC.js";import"./AclEditor-CpNA2ds9.js";import"./UserSearchBoxV2-PBclEo5v.js";import"./useDebouncedEffect-D5cIdkw7.js";import"./use-deep-compare-effect.esm-DN6zG_QJ.js";import"./uniq-CmBLLPZA.js";import"./without-Bamt9vgf.js";import"./UserBadge-zo9ivwKg.js";import"./useUserBundle-CwnnfMaT.js";import"./useSuspenseQuery-BKY6Qa88.js";import"./SkeletonTable-BfBRnH8d.js";import"./MenuItem-Dt0yDuqb.js";import"./Card-KnQ9tlyZ.js";import"./Chip-B9lbWoVh.js";import"./Select-aab027f3.esm-CJ6noaGq.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-Bm0VfmUj.js";import"./TeamBadge-CVCPAnxp.js";import"./SkeletonButton-BiCcSD_e.js";import"./SkeletonInlineBlock-Cx8PzyyP.js";import"./SkeletonParagraph-JgANzJ5n.js";import"./IconSvgButton-DAzxvgNN.js";import"./FormControlLabel-DiAADwWJ.js";import"./Checkbox-CDdvC1LR.js";import"./SwitchBase-DXooODN3.js";import"./useUpdateAcl-BUz3gEb_.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
