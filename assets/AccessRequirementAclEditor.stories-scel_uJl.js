import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-Byg5KEO3.js";import{A as i}from"./AccessRequirementAclEditor-nZrTs43o.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BFltvEm-.js";import"./index-ChYi0wId.js";import"./_baseOrderBy-CMNMWfl4.js";import"./_baseIteratee-BBeohnql.js";import"./_baseMap-Dh1UxD53.js";import"./_baseEach-DKjp9Dcv.js";import"./useQueries-C6NKqSzQ.js";import"./useInfiniteQuery-CZPJsNj1.js";import"./AclEditor-DkN2_Rd8.js";import"./UserSearchBoxV2-YQMP7Lcc.js";import"./useDebouncedEffect-CaZVZTCW.js";import"./use-deep-compare-effect.esm-BWSGc1tK.js";import"./uniq-gdhuEJJ5.js";import"./without-D1ykyPhw.js";import"./UserBadge-BLjnlATj.js";import"./useUserBundle-CIHk5rZS.js";import"./useSuspenseQuery-BsTrDnpu.js";import"./SkeletonTable-DoPPIijf.js";import"./MenuItem-CHAd-f9u.js";import"./Card-BiYdDpof.js";import"./Chip-S8C0h81Q.js";import"./Select-aab027f3.esm-DDKpUJuh.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-B3Usl9zj.js";import"./TeamBadge-Gt4klzbq.js";import"./SkeletonButton-4jGLqIPK.js";import"./SkeletonInlineBlock-BMXq3IDQ.js";import"./SkeletonParagraph-Bg9PA-th.js";import"./IconSvgButton-C4USZ-kp.js";import"./FormControlLabel-Dqq0s6IM.js";import"./Checkbox-T60t_rf9.js";import"./SwitchBase-C8XdKuoM.js";import"./useUpdateAcl-UR605eil.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
