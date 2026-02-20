import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-D2314vV7.js";import{A as i}from"./AccessRequirementAclEditor-yfVHsQiL.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-jlR9BA06.js";import"./index-uz0aFGkQ.js";import"./_baseOrderBy-C8mlA2uL.js";import"./_baseIteratee-vNs5qHqV.js";import"./_baseMap-CMdkRV5u.js";import"./_baseEach-lxWvv5jk.js";import"./useQueries-CEbKoZrk.js";import"./useInfiniteQuery-BkYzK-VQ.js";import"./AclEditor-DX8uAG0X.js";import"./useRealmPrincipals-DMb9Ln6W.js";import"./UserSearchBoxV2-DfK9DxzZ.js";import"./useDebouncedEffect-CoGxk0RJ.js";import"./use-deep-compare-effect.esm-NCd8gc-B.js";import"./uniq-ChD1At2f.js";import"./without-_6fQamQg.js";import"./UserBadge-DzB9tiKw.js";import"./useUserBundle-geWM6IMX.js";import"./useSuspenseQuery-Dqm9rcpM.js";import"./SkeletonTable-BKP48mc0.js";import"./MenuItem-Bh76qgcw.js";import"./Card-DZNxgrrg.js";import"./Chip-Dx5TUVtU.js";import"./Select-aab027f3.esm-BYcbwWrF.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DHChlM9r.js";import"./TeamBadge-DTd3-hrn.js";import"./SkeletonButton-B53Z_sb3.js";import"./SkeletonInlineBlock-CV4xFhI_.js";import"./SkeletonParagraph-LgnNm5lB.js";import"./IconSvgButton-BFBvKNwt.js";import"./FormControlLabel-C5kknZuE.js";import"./Checkbox-ClaraH4O.js";import"./SwitchBase-CtNJMxQl.js";import"./useUpdateAcl-D5APDLho.js";const se={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const te=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,te as __namedExportsOrder,se as default};
