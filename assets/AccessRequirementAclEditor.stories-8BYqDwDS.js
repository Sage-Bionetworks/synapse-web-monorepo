import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-DrCEazsW.js";import{A as i}from"./AccessRequirementAclEditor-C0Qlrcxa.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-vxNOeDz5.js";import"./index-Bxv-iQH3.js";import"./_baseOrderBy-DFkEE16g.js";import"./_baseIteratee-s9gtzg3G.js";import"./_baseMap-DjbTSRZA.js";import"./_baseEach-BI8KWHZ6.js";import"./useQueries-DvWk4uuh.js";import"./useInfiniteQuery-Bi9tYdtQ.js";import"./AclEditor-CD4zTwww.js";import"./UserSearchBoxV2-Q3p-Fp-O.js";import"./useDebouncedEffect-BJDiPjps.js";import"./use-deep-compare-effect.esm-CItx8MYD.js";import"./uniq-CEHj_8vv.js";import"./without-DuQ8RBs4.js";import"./UserBadge-y9zJuYcg.js";import"./useUserBundle-CYm_bsjI.js";import"./useSuspenseQuery-DQ6p8VKt.js";import"./SkeletonTable-BtmY8UyV.js";import"./MenuItem-C2nlmzrP.js";import"./Card-CTrSj87E.js";import"./Chip-DN_sqkiV.js";import"./Select-aab027f3.esm-q7BuRwHX.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DG_kAHOs.js";import"./TeamBadge-ZUmCfIwr.js";import"./SkeletonButton-C4mWmh8D.js";import"./SkeletonInlineBlock-DNr-Di6Y.js";import"./SkeletonParagraph-DxARbxEV.js";import"./IconSvgButton-DlRjwzI4.js";import"./FormControlLabel-0BDDjvMM.js";import"./Checkbox-C7I_4mUy.js";import"./SwitchBase-DmV_-0J4.js";import"./useUpdateAcl-B1WVu2sL.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
