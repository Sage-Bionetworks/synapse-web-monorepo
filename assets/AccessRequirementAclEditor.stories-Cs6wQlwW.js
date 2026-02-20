import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-BoCRNbsR.js";import{A as i}from"./AccessRequirementAclEditor-BaWj6XsG.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DkQ0N4uD.js";import"./index-DSH6M_f8.js";import"./_baseOrderBy-B-jABIUm.js";import"./_baseIteratee-CTfPkNe8.js";import"./_baseMap-m90rBXOw.js";import"./_baseEach-CrkqBzm4.js";import"./useQueries-DDvkrzrG.js";import"./useInfiniteQuery-C7o_Dqt1.js";import"./AclEditor-n-YHTSaj.js";import"./useRealmPrincipals-CsoK2Czf.js";import"./UserSearchBoxV2-CaveAnuw.js";import"./useDebouncedEffect-ZAyscT8J.js";import"./use-deep-compare-effect.esm-B8nkfzTc.js";import"./uniq-DRjkbO_K.js";import"./without-DHqdmtmG.js";import"./UserBadge-jrgoiBJ0.js";import"./useUserBundle-CSKimz6W.js";import"./useSuspenseQuery-BPlGfXJb.js";import"./SkeletonTable-COyqVKjD.js";import"./MenuItem-jUPn2SHm.js";import"./Card-Bt5_s5Bl.js";import"./Chip-BpnG7Xon.js";import"./Select-aab027f3.esm-Cg2rbb1H.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-Ct7WDy2d.js";import"./TeamBadge-C5tfyvyH.js";import"./SkeletonButton-DmCSxkyJ.js";import"./SkeletonInlineBlock-C7NJLvZR.js";import"./SkeletonParagraph-DoTSC7_a.js";import"./IconSvgButton-BZwHeKYQ.js";import"./FormControlLabel-BKE42yhb.js";import"./Checkbox-DV0KOIC_.js";import"./SwitchBase-DMiiRzXA.js";import"./useUpdateAcl-BcLimx6Z.js";const se={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
