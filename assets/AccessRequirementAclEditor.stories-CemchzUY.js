import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-HR5efO_6.js";import{A as i}from"./AccessRequirementAclEditor-B-RHmoiS.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DKEoMt3i.js";import"./index-BuKVPeEG.js";import"./_baseOrderBy-BXdQUi3q.js";import"./_baseIteratee-CTXbCQzb.js";import"./_baseMap-d573cvgi.js";import"./_baseEach-DeceRv-z.js";import"./useInfiniteQuery-BffcSkFX.js";import"./AclEditor-7WOemjtc.js";import"./UserSearchBoxV2-BdJ2UPZ2.js";import"./useDebouncedEffect-BIxOsN4W.js";import"./use-deep-compare-effect.esm-BfvhFq7j.js";import"./uniq-BkxzrQ3D.js";import"./without-Ce9LEVAz.js";import"./UserBadge-CJyxtbNI.js";import"./useUserBundle-B64ZgZGa.js";import"./SkeletonTable-Bm63jMKW.js";import"./MenuItem-BBTtHw-Z.js";import"./Card-EBnxndHl.js";import"./Chip-CBQKgw7F.js";import"./Select-aab027f3.esm-j1d62oNz.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-aC7olRyf.js";import"./TeamBadge-0p_pywjr.js";import"./SkeletonButton-CpPX_nit.js";import"./SkeletonInlineBlock-pMLRfvW-.js";import"./SkeletonParagraph-BGy70kQG.js";import"./IconSvgButton-Kg8bz96l.js";import"./FormControlLabel-B64hA87S.js";import"./Checkbox-CZhCtDAe.js";import"./SwitchBase-Bx2dA3EB.js";import"./useUpdateAcl-B18acu-T.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
