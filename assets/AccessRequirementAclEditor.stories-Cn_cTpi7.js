import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-DOA--ypP.js";import{A as i}from"./AccessRequirementAclEditor-CrRKgKRy.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BDvRpZ_H.js";import"./index-gKWz_61H.js";import"./_baseOrderBy-Bdpj--zw.js";import"./_baseIteratee-DP1eEInn.js";import"./_baseMap-CMMBPE8F.js";import"./_baseEach-JG6bUIyt.js";import"./useQueries-ms_hA1-B.js";import"./useInfiniteQuery-TrFnHSG6.js";import"./AclEditor-DZwXZExU.js";import"./UserSearchBoxV2-DdQdhllg.js";import"./useDebouncedEffect-JBIkOOLE.js";import"./use-deep-compare-effect.esm-Dy9g7tgW.js";import"./uniq-CZc5lcrU.js";import"./without-BhKwemxP.js";import"./UserBadge-B-bcdv8r.js";import"./useUserBundle-CMLYFODb.js";import"./useSuspenseQuery-CH8JGQoS.js";import"./SkeletonTable-BN8TQIoy.js";import"./MenuItem-BXWiBucH.js";import"./Card-Cb051pi6.js";import"./Chip-B3zCMCcx.js";import"./Select-aab027f3.esm-BRxx8-co.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DcHJpLF_.js";import"./TeamBadge-DoIL39Pq.js";import"./SkeletonButton-SLwBY3oR.js";import"./SkeletonInlineBlock-BSyES9P5.js";import"./SkeletonParagraph-CKHoRTTC.js";import"./IconSvgButton-BUWDiZDT.js";import"./FormControlLabel-Be7cb8-z.js";import"./Checkbox-yVjGcUBI.js";import"./SwitchBase-Bv3lYZre.js";import"./useUpdateAcl-DSBJNwX2.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
