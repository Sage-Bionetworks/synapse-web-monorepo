import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-DRnLZq4W.js";import{A as i}from"./AccessRequirementAclEditor-C2Gow4ea.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DBlX9XRA.js";import"./index-C6Fl73J9.js";import"./_baseOrderBy-DKzGPwCj.js";import"./_baseIteratee-CGgYpGW3.js";import"./_baseMap-UYxvI7CQ.js";import"./_baseEach-ZawQhoV0.js";import"./useInfiniteQuery-CEfwzGx4.js";import"./AclEditor-T6BZjovU.js";import"./UserSearchBoxV2-bnTz6V1Y.js";import"./useDebouncedEffect-x6hId2ka.js";import"./use-deep-compare-effect.esm-ADfqYNtl.js";import"./uniq-sxyr_hIR.js";import"./without-BXHdBnG0.js";import"./UserBadge-CuN2K17l.js";import"./useUserBundle-CVIljxhV.js";import"./SkeletonTable-BRvwRKgI.js";import"./MenuItem-FdihTtHL.js";import"./Card-Boln_G58.js";import"./Chip-X2PFaiz1.js";import"./Select-aab027f3.esm-CbsAjXq_.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-UZaSX5LJ.js";import"./TeamBadge-BtoBhTM4.js";import"./SkeletonButton-DKOFMwSN.js";import"./SkeletonInlineBlock-qphYniCB.js";import"./SkeletonParagraph-gWuTxaCe.js";import"./IconSvgButton-BW0RqwbE.js";import"./FormControlLabel-ChAxAa_4.js";import"./Checkbox-CkzF06aO.js";import"./SwitchBase-D8YwYWem.js";import"./useUpdateAcl-D7qUVv9v.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
