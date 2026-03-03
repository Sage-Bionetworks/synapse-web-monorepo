import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-Dbbh8EoS.js";import{A as i}from"./AccessRequirementAclEditor-Dxjoxohf.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-C2qVnv1S.js";import"./index-C5FBv2d-.js";import"./_baseOrderBy-BqQw7fHP.js";import"./_baseIteratee-Cv68UzAc.js";import"./_baseMap-uGS4ydDB.js";import"./_baseEach-B2oUF5fZ.js";import"./useInfiniteQuery-DwX98EP2.js";import"./AclEditor-CGmNYY1P.js";import"./UserSearchBoxV2-Bkon8712.js";import"./useDebouncedEffect-CHzn7SW6.js";import"./use-deep-compare-effect.esm-DpPyWBYt.js";import"./uniq-C2nxWVi4.js";import"./without-CCHEkGxF.js";import"./UserBadge-ckycABX-.js";import"./useUserBundle-CZY1dyhP.js";import"./SkeletonTable-Cpo7iVUX.js";import"./MenuItem-DT6oAegc.js";import"./Card-DZlEFsDn.js";import"./Chip-D58Qw1vN.js";import"./Select-aab027f3.esm-Cp_aXnVH.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CE87R9fa.js";import"./TeamBadge-Do94J_Rs.js";import"./SkeletonButton-BznCZj-O.js";import"./SkeletonInlineBlock-BfsUoAAw.js";import"./SkeletonParagraph-DMnuMidF.js";import"./IconSvgButton-C_Ue9WlK.js";import"./FormControlLabel-jfsl2tBz.js";import"./Checkbox-CL29762Y.js";import"./SwitchBase-z6kwMqP-.js";import"./useUpdateAcl-DKIOEFa3.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
