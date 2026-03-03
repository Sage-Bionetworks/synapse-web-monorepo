import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-BXOaFC93.js";import{A as i}from"./AccessRequirementAclEditor-CrO7DguY.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-C1oiBpLa.js";import"./index-MNp32NR_.js";import"./_baseOrderBy-BVLiNwYK.js";import"./_baseIteratee-BNwFHJhH.js";import"./_baseMap-DCppEN5q.js";import"./_baseEach-zBNXABpw.js";import"./useInfiniteQuery-CMyAeBvQ.js";import"./AclEditor-CtuFf36j.js";import"./UserSearchBoxV2-B5S3nhP-.js";import"./useDebouncedEffect-DZwp19LD.js";import"./use-deep-compare-effect.esm-BP-X_lnI.js";import"./uniq-Jrb7SEaY.js";import"./without-DoDVYMXe.js";import"./UserBadge-XxMl2-q6.js";import"./useUserBundle-GtjAuzC1.js";import"./SkeletonTable-CeAdm2qt.js";import"./MenuItem-Dtwb3tI6.js";import"./Card-myTQBzog.js";import"./Chip-DABoi-5O.js";import"./Select-aab027f3.esm-JMIvy_Qu.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DyIgOzWL.js";import"./TeamBadge-DHsiQMLq.js";import"./SkeletonButton-Bqwyl1dP.js";import"./SkeletonInlineBlock-Cl-hsdeu.js";import"./SkeletonParagraph-DymEZI1w.js";import"./IconSvgButton-CbpbflVu.js";import"./FormControlLabel-C6Gvndii.js";import"./Checkbox-D3B6ddTd.js";import"./SwitchBase-wPFSCN8t.js";import"./useUpdateAcl-DigjHewd.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const ee=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,ee as __namedExportsOrder,$ as default};
