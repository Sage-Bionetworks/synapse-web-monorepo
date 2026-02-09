import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-C1Apx41K.js";import{A as i}from"./AccessRequirementAclEditor-DFe_DOeX.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CjVWhuJJ.js";import"./index-BNzSHHEP.js";import"./_baseOrderBy-BIgAoXIE.js";import"./_baseIteratee-8Sc6B18w.js";import"./_baseMap-B8Y4JFJ6.js";import"./_baseEach-Ckpa6zJd.js";import"./useQueries-BXoScF_u.js";import"./useInfiniteQuery-Bd6Dhm29.js";import"./AclEditor-BC0212DL.js";import"./UserSearchBoxV2-CnOibRXb.js";import"./useDebouncedEffect-BuKPrPh0.js";import"./use-deep-compare-effect.esm-50Q-ut1H.js";import"./uniq-BwQMH0eL.js";import"./without-DI2mOxZP.js";import"./UserBadge-DdMNTKS3.js";import"./useUserBundle-nFsfxXQU.js";import"./useSuspenseQuery-CWXsXeM-.js";import"./SkeletonTable-4nPmJRNn.js";import"./MenuItem-CghTk7HR.js";import"./Card-DOc9Ytr4.js";import"./Chip-S_uffPL4.js";import"./Select-aab027f3.esm-DxgB7wsa.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DJ7T_Y2Y.js";import"./TeamBadge-JcjM5zn7.js";import"./SkeletonButton-D8PmJqDh.js";import"./SkeletonInlineBlock-CfPdCjit.js";import"./SkeletonParagraph-D2VtG1zT.js";import"./IconSvgButton-CX08L06S.js";import"./FormControlLabel-CDOc7gaP.js";import"./Checkbox-BbsUDmmn.js";import"./SwitchBase-D0GTh9ez.js";import"./useUpdateAcl-hB12WFgQ.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
