import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-vUTu6M8D.js";import{A as i}from"./AccessRequirementAclEditor-CG8lscji.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Oj0TN5gc.js";import"./index-DwgiIHef.js";import"./_baseOrderBy-TErK5KDZ.js";import"./_baseIteratee-BvpquvUu.js";import"./_baseMap-DTuWLxma.js";import"./_baseEach-DYOJ9REo.js";import"./useQueries-Bv2f7GHO.js";import"./useInfiniteQuery-i4mklQoJ.js";import"./AclEditor-BfrglL-Q.js";import"./UserSearchBoxV2-BRbuOOtr.js";import"./useDebouncedEffect-CfDWS-jS.js";import"./use-deep-compare-effect.esm-C6KiqeQ4.js";import"./uniq-DWYdI45G.js";import"./without-CilDNi99.js";import"./UserBadge-DThzTs_4.js";import"./useUserBundle-Bg0iomTg.js";import"./useSuspenseQuery-p_6e0XOX.js";import"./SkeletonTable-CYuF7-ZU.js";import"./MenuItem-BXKyPNc4.js";import"./Card-B4xCTS0I.js";import"./Chip-Cogs__Re.js";import"./Select-aab027f3.esm-BPCT0NNh.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-n4rY9vFx.js";import"./TeamBadge-D8GTQRXx.js";import"./SkeletonButton-BfImOAlj.js";import"./SkeletonInlineBlock-Dw1qUrgT.js";import"./SkeletonParagraph-DI0oUi2H.js";import"./IconSvgButton-CjbFzTA2.js";import"./FormControlLabel-h8bmr6Y_.js";import"./Checkbox-Db2xzulm.js";import"./SwitchBase-CB13ZOLZ.js";import"./useUpdateAcl-CZixmFbW.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
