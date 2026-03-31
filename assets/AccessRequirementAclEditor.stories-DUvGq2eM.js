import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-Du6HmmeA.js";import{A as i}from"./AccessRequirementAclEditor-CrZo2SIi.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DZYtBqti.js";import"./index-IUqGcT1d.js";import"./_baseOrderBy-DmLN6kHS.js";import"./_baseIteratee-BjGF9gaT.js";import"./_baseMap-D7z7svm5.js";import"./_baseEach-BFnmKIH3.js";import"./useInfiniteQuery-C6JA7Ilj.js";import"./AclEditor-DTKfdfMz.js";import"./UserSearchBoxV2-moPo-tOV.js";import"./useDebouncedEffect-DGplUOkX.js";import"./use-deep-compare-effect.esm-Kl208o3Z.js";import"./uniq-D6BLVwq-.js";import"./without-B8kG1aZ7.js";import"./UserBadge-BCnNbvVE.js";import"./useUserBundle-Bri-n8ny.js";import"./SkeletonTable-DFkOLILK.js";import"./MenuItem-CKx8ssIT.js";import"./Card--Uz_bnlD.js";import"./Chip-CcMLA9LH.js";import"./Select-aab027f3.esm-CZdVROQc.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-Xqx_-Ab7.js";import"./TeamBadge-CxHm0VzH.js";import"./SkeletonButton-B7NYOcGY.js";import"./SkeletonInlineBlock-hXkytNVp.js";import"./SkeletonParagraph-xJMe6-dP.js";import"./IconSvgButton-_4Modq3a.js";import"./FormControlLabel-M309XaQU.js";import"./Checkbox-DZjIxL5f.js";import"./SwitchBase-oOV7dY8w.js";import"./useUpdateAcl-AYpItMZT.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
