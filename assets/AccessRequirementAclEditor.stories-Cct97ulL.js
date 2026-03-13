import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-SpTPUL8m.js";import{A as i}from"./AccessRequirementAclEditor-5Wx1FA_j.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DSZI34h1.js";import"./index-BPOVYvhU.js";import"./_baseOrderBy-lQS-Mv4J.js";import"./_baseIteratee-CaM8Iugn.js";import"./_baseMap-BruZldJj.js";import"./_baseEach-Dahxdq_T.js";import"./useInfiniteQuery-BpbmMIh3.js";import"./AclEditor-Ctd5pYib.js";import"./UserSearchBoxV2-CGs7qNay.js";import"./useDebouncedEffect-Ce8QLVvt.js";import"./use-deep-compare-effect.esm-DwJuLYjs.js";import"./uniq-DWZFezQD.js";import"./without-BY-TcUMx.js";import"./UserBadge-WsW3e6pV.js";import"./useUserBundle-CMEzZcsf.js";import"./SkeletonTable-BuAR6CBE.js";import"./MenuItem-DMW1-yIZ.js";import"./Card-DnzMTA9B.js";import"./Chip-BbzLJe0J.js";import"./Select-aab027f3.esm-qdn_iXa6.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BeQg6j1V.js";import"./TeamBadge-DGAs2FEA.js";import"./SkeletonButton-BZ4aKRQm.js";import"./SkeletonInlineBlock-QplUKVpF.js";import"./SkeletonParagraph-CB5oiNEg.js";import"./IconSvgButton-BAPF_umL.js";import"./FormControlLabel-DqLQJsL_.js";import"./Checkbox-BJ4YMl8f.js";import"./SwitchBase-BbkaKoSO.js";import"./useUpdateAcl-C_TR05L9.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
