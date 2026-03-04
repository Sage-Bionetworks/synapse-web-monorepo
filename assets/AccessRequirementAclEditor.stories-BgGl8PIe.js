import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-BoxuKy9E.js";import{A as i}from"./AccessRequirementAclEditor-CABWK_UG.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DTI3EWsr.js";import"./index-Log0dJvg.js";import"./_baseOrderBy-a7LEQnpv.js";import"./_baseIteratee-DjnxVzYp.js";import"./_baseMap-n6KAJL3v.js";import"./_baseEach-D_05QTIw.js";import"./useInfiniteQuery-BcQtjXyf.js";import"./AclEditor-JWYKbYLT.js";import"./UserSearchBoxV2-BNYueu9x.js";import"./useDebouncedEffect-Di3GQSjY.js";import"./use-deep-compare-effect.esm-BUxnnlx1.js";import"./uniq-8qCqnpBT.js";import"./without-BZtIYbuf.js";import"./UserBadge-BiME232n.js";import"./useUserBundle-xbyPhtej.js";import"./SkeletonTable-BDD50YXU.js";import"./MenuItem-BGU-QKhy.js";import"./Card-BkInqMDB.js";import"./Chip-BVijHoac.js";import"./Select-aab027f3.esm-DMjouvR_.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-C1irOvZi.js";import"./TeamBadge-CO1y4b8W.js";import"./SkeletonButton-BIE6flyK.js";import"./SkeletonInlineBlock-BI06okMA.js";import"./SkeletonParagraph-Cla7VaV-.js";import"./IconSvgButton-wuTRUDJy.js";import"./FormControlLabel-Ba5VS2KY.js";import"./Checkbox-Crz05bF2.js";import"./SwitchBase-DQ2FRVZS.js";import"./useUpdateAcl-COWxzhdg.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
