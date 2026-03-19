import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-BBruIU4b.js";import{A as i}from"./AccessRequirementAclEditor-CO8VYzRE.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DfdGfvIY.js";import"./index-C4S4nEIu.js";import"./_baseOrderBy-D6ixe2Vs.js";import"./_baseIteratee-C5YInLUd.js";import"./_baseMap-DOnUw6Jl.js";import"./_baseEach-BkW8B4fq.js";import"./useInfiniteQuery-CpnSnpxb.js";import"./AclEditor-BcxQYhUu.js";import"./UserSearchBoxV2-BaT7bmAD.js";import"./useDebouncedEffect-C5wKQEdI.js";import"./use-deep-compare-effect.esm-CH543HjI.js";import"./uniq-4NIjQU_P.js";import"./without-DBYeO89j.js";import"./UserBadge-LCaLYAxT.js";import"./useUserBundle-R9FqDICm.js";import"./SkeletonTable-Bpj6qcuq.js";import"./MenuItem-qoVLjmZ_.js";import"./Card-DMjhx-ez.js";import"./Chip-BT9IXi55.js";import"./Select-aab027f3.esm-BlhFUnX4.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-Blj9_Z5d.js";import"./TeamBadge-DLbin4cr.js";import"./SkeletonButton-D4FgXHH-.js";import"./SkeletonInlineBlock-B2nZJXUY.js";import"./SkeletonParagraph-D6h0sWgH.js";import"./IconSvgButton-C3tW9p2r.js";import"./FormControlLabel-DqVSLyDY.js";import"./Checkbox-BNavYnnA.js";import"./SwitchBase-DTrMZwaL.js";import"./useUpdateAcl-pRn2bI2b.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
