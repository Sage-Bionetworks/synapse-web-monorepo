import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-Ya-g_qay.js";import{A as i}from"./AccessRequirementAclEditor-DJEp866D.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CCGCKFDe.js";import"./index-xVTfjyPx.js";import"./_baseOrderBy-DtAlKGoE.js";import"./_baseIteratee-NNKH08m9.js";import"./_baseMap-D_QMnoLZ.js";import"./_baseEach-ub4T8Ncm.js";import"./useQueries-BAvG0eo3.js";import"./useInfiniteQuery-DO90_A9I.js";import"./AclEditor-f4bYNpmJ.js";import"./UserSearchBoxV2-DvibNAE2.js";import"./useDebouncedEffect-CN-niWjm.js";import"./use-deep-compare-effect.esm-MAGuoYEF.js";import"./uniq-06ZLqp-Y.js";import"./without-BAVy4GBx.js";import"./UserBadge-BKdC7vtq.js";import"./useUserBundle-CPxLoWOx.js";import"./useSuspenseQuery-ajSSmE51.js";import"./SkeletonTable-gSh9dXdS.js";import"./MenuItem-BuXikWov.js";import"./Card-ZIbsqxVQ.js";import"./Chip-CWV3Xi6n.js";import"./Select-aab027f3.esm-CAzAUSfc.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BpgjzD55.js";import"./TeamBadge-H-bZaQzx.js";import"./SkeletonButton-WGw1QxaV.js";import"./SkeletonInlineBlock-BhpPIW12.js";import"./SkeletonParagraph-B7nhBI0o.js";import"./IconSvgButton-C2pSjmnN.js";import"./FormControlLabel-D1Z2Cjqs.js";import"./Checkbox-iublSEO5.js";import"./SwitchBase-CIlRr3Ri.js";import"./useUpdateAcl-DURp-dDJ.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
