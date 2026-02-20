import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-r7gAu2bc.js";import{A as i}from"./AccessRequirementAclEditor-VqQFkyLa.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CcZpityR.js";import"./index-abBLt8Ff.js";import"./_baseOrderBy-DOd0_89h.js";import"./_baseIteratee-DVLYk22D.js";import"./_baseMap-C01ANpbm.js";import"./_baseEach-BnwaDblR.js";import"./useQueries-9m2Bezy_.js";import"./useInfiniteQuery-B8z8XTlO.js";import"./AclEditor-C6TpjID-.js";import"./useRealmPrincipals-5JkyyYLZ.js";import"./UserSearchBoxV2-CRRsEVwp.js";import"./useDebouncedEffect-N71ZfqaT.js";import"./use-deep-compare-effect.esm-DeW_apDf.js";import"./uniq-CK8qiDB8.js";import"./without-vL_c9HQB.js";import"./UserBadge-0YnAM4bN.js";import"./useUserBundle-CoSjfhMR.js";import"./useSuspenseQuery-DnY7oDDS.js";import"./SkeletonTable-ChI727yy.js";import"./MenuItem-B0LSwwXU.js";import"./Card-B8EN43Pe.js";import"./Chip-Da8UDvbq.js";import"./Select-aab027f3.esm-DlgEGlXP.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CghfTVgS.js";import"./TeamBadge-Bhj0tYjx.js";import"./SkeletonButton-BM35HBbr.js";import"./SkeletonInlineBlock-CnfDTonB.js";import"./SkeletonParagraph-ENW1FsOv.js";import"./IconSvgButton-CYGyPJMK.js";import"./FormControlLabel--q0TnODD.js";import"./Checkbox-DEDTHBsJ.js";import"./SwitchBase-BSufJQUk.js";import"./useUpdateAcl-DCvZFu9d.js";const se={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
