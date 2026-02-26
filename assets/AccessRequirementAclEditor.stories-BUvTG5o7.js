import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-CZFJJ8mF.js";import{A as i}from"./AccessRequirementAclEditor-BtO34HWR.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Cj1szXFO.js";import"./index-DHCSsY1o.js";import"./_baseOrderBy-DJNOF7pH.js";import"./_baseIteratee-rX9r8SJC.js";import"./_baseMap-CqAkTHGS.js";import"./_baseEach-m_YP-tTO.js";import"./useInfiniteQuery-kARObAi9.js";import"./AclEditor--m3baRwH.js";import"./UserSearchBoxV2-BChYP0Re.js";import"./useDebouncedEffect-CtoeOd3a.js";import"./use-deep-compare-effect.esm-fzmHI-m-.js";import"./uniq-DmKKWqRk.js";import"./without-DxE4YRMh.js";import"./UserBadge-CErUOSm-.js";import"./useUserBundle-d_Y8_V2h.js";import"./SkeletonTable-Q3nUli7s.js";import"./MenuItem-DISZCm2g.js";import"./Card-ak_L_vjx.js";import"./Chip-BSOTX2SF.js";import"./Select-aab027f3.esm-DpVZwbkN.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-D5ZGc1qy.js";import"./TeamBadge-CmUccRd6.js";import"./SkeletonButton-1FI8gwoL.js";import"./SkeletonInlineBlock-CK8FFc-3.js";import"./SkeletonParagraph-DvXQwRCq.js";import"./IconSvgButton-BnS8S-VN.js";import"./FormControlLabel-BNgfCzjp.js";import"./Checkbox-DFX9Y3-H.js";import"./SwitchBase-BoCiOYwh.js";import"./useUpdateAcl-CUAKdhhy.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
