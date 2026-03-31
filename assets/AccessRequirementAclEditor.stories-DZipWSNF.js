import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-DhpKet55.js";import{A as i}from"./AccessRequirementAclEditor-DxbhH5Uu.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BS_i6ikn.js";import"./index-CpJ472Wk.js";import"./_baseOrderBy-CR9CeohK.js";import"./_baseIteratee-IrfZTN6K.js";import"./_baseMap-5raP30rN.js";import"./_baseEach-DYMGRgHQ.js";import"./useInfiniteQuery-BThf8L3S.js";import"./AclEditor-C3s129_6.js";import"./UserSearchBoxV2-CKxkPF5E.js";import"./useDebouncedEffect-BgCDm99B.js";import"./use-deep-compare-effect.esm-Bqj6i4A8.js";import"./uniq-DynFiIDi.js";import"./without-CEf-35Jl.js";import"./UserBadge-BXdGqvgB.js";import"./useUserBundle-MoKPhqqG.js";import"./SkeletonTable-CDPXZ6i1.js";import"./MenuItem-DFY-M91_.js";import"./Card-bvHfdi3z.js";import"./Chip-9P7ZQoxZ.js";import"./Select-aab027f3.esm-B5lysqVT.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CW42h3e1.js";import"./TeamBadge-9cwNBYnH.js";import"./SkeletonButton-DB6VnDRU.js";import"./SkeletonInlineBlock-BpymSWGX.js";import"./SkeletonParagraph-CQn9tuId.js";import"./IconSvgButton-CVx6JMek.js";import"./FormControlLabel-BmYM2_bg.js";import"./Checkbox-Cyn-RvsF.js";import"./SwitchBase-CwwNy5Jt.js";import"./useUpdateAcl-BVOU65WN.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
