import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-DvdBRTAM.js";import{A as i}from"./AccessRequirementAclEditor-Dbv9HCIV.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Byh4VCNF.js";import"./index-Bj0_rJzU.js";import"./_baseOrderBy-jb9vneOI.js";import"./_baseIteratee-Dv0BX8Lk.js";import"./_baseMap-ClSQlnUC.js";import"./_baseEach-Bn6A16a5.js";import"./useQueries-Cz9ppJHT.js";import"./useInfiniteQuery-B2hHHZp9.js";import"./AclEditor-yhVAVtU4.js";import"./UserSearchBoxV2-BEM2rr3K.js";import"./useDebouncedEffect-yN3HRkJq.js";import"./use-deep-compare-effect.esm-B6PlCZFQ.js";import"./uniq-D71_5P4-.js";import"./without-CrGtW8k7.js";import"./UserBadge-b2NCXEqP.js";import"./useUserBundle-DBtVzZkD.js";import"./useSuspenseQuery-0rL7Zkrv.js";import"./SkeletonTable-ChN7ZUgX.js";import"./MenuItem-wnk0lrZ5.js";import"./Card-zdgtOjjY.js";import"./Chip-BH2X6cI_.js";import"./Select-aab027f3.esm-Dt3eZKCk.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DUs7yKiM.js";import"./TeamBadge-8O74UNE-.js";import"./SkeletonButton-Bf60llvE.js";import"./SkeletonInlineBlock-DETlLR5h.js";import"./SkeletonParagraph-CljYlKAw.js";import"./IconSvgButton-CsHTK0tJ.js";import"./FormControlLabel-CRRHoKVa.js";import"./Checkbox-DEQvbQfH.js";import"./SwitchBase-DwY80y2S.js";import"./useUpdateAcl-BWtcRRRm.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
