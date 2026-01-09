import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-BCo6xRtR.js";import{A as i}from"./AccessRequirementAclEditor-BiGyijXQ.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-sEp-Kbc4.js";import"./index-BIDqU31Y.js";import"./_baseOrderBy-gBgr0Ly3.js";import"./_baseIteratee-TfZ3SFX4.js";import"./_baseMap-BjvZOnjw.js";import"./_baseEach-BZ-7nqlo.js";import"./useQueries-DIyvlilN.js";import"./useInfiniteQuery-DNwGIq_T.js";import"./AclEditor-BnL1u0PJ.js";import"./UserSearchBoxV2-DdVd9-7T.js";import"./useDebouncedEffect-CdFhkZKm.js";import"./use-deep-compare-effect.esm-BzNt_zAg.js";import"./uniq-BgtH7xA4.js";import"./without-Bw7BnVO3.js";import"./UserBadge-DQ61RU3p.js";import"./useUserBundle-CtTpGbMF.js";import"./useSuspenseQuery-DtqIfE1u.js";import"./SkeletonTable-CE_fO4U2.js";import"./MenuItem-Dt5CKkV1.js";import"./Card-DIT33oKt.js";import"./Chip-_-7K_QD-.js";import"./Select-aab027f3.esm-BVBh86Oq.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-C7M-A27m.js";import"./TeamBadge-CiyLGNRD.js";import"./SkeletonButton-Di7WZDoT.js";import"./SkeletonInlineBlock-Oo_uHdtx.js";import"./SkeletonParagraph-BBZfUnUj.js";import"./IconSvgButton-BHaJbVdT.js";import"./FormControlLabel-BQqHqMeR.js";import"./Checkbox-CtnxVUZk.js";import"./SwitchBase-ClCTg-Cz.js";import"./useUpdateAcl-DwQE3bf_.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
