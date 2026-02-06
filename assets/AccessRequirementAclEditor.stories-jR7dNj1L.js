import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-CL1UF9wq.js";import{A as i}from"./AccessRequirementAclEditor-BSNJiUkE.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-h24F7TBD.js";import"./index-D_p7qk7E.js";import"./_baseOrderBy-BNZ_rKpc.js";import"./_baseIteratee-DMV55V0L.js";import"./_baseMap-OqYiEbFz.js";import"./_baseEach-Bcjl1bpK.js";import"./useQueries-NvxyI8_9.js";import"./useInfiniteQuery-DWi368jF.js";import"./AclEditor-CwE2Tjy7.js";import"./UserSearchBoxV2-BaM_QAoS.js";import"./useDebouncedEffect-wae5cBnA.js";import"./use-deep-compare-effect.esm-BsYNt22s.js";import"./uniq-BczlDYoN.js";import"./without-BjgmvzHg.js";import"./UserBadge-CnO0Rkgm.js";import"./useUserBundle-BcHOhtU-.js";import"./useSuspenseQuery-LePCNQBH.js";import"./SkeletonTable-DMqnct0i.js";import"./MenuItem-LKo31BtE.js";import"./Card-B9BQCfND.js";import"./Chip-DXWiT4yo.js";import"./Select-aab027f3.esm-ClNr34_w.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-Cz4F3ETX.js";import"./TeamBadge-QzNTY3sF.js";import"./SkeletonButton-CYgioBCP.js";import"./SkeletonInlineBlock-CJQan7gL.js";import"./SkeletonParagraph-D55VBz6b.js";import"./IconSvgButton-BJLO1Lq0.js";import"./FormControlLabel-CYpBZGqx.js";import"./Checkbox-D2ule7FR.js";import"./SwitchBase-CZN2jDS4.js";import"./useUpdateAcl-D_ZrMLfa.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
