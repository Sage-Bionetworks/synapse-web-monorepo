import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-DGtd-eZ6.js";import{A as i}from"./AccessRequirementAclEditor-Dq6lm6A7.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Bq3pO1EH.js";import"./index-DRd13Kob.js";import"./_baseOrderBy-DTcwwgEX.js";import"./_baseIteratee-BgTTVm_D.js";import"./_baseMap-Dxa9HPgV.js";import"./_baseEach--0hMyPgP.js";import"./useInfiniteQuery-XzhrhxiT.js";import"./AclEditor-BNAjyiOc.js";import"./UserSearchBoxV2-CIdja0_5.js";import"./useDebouncedEffect-C8q7VQIr.js";import"./use-deep-compare-effect.esm-B3mW5v7b.js";import"./uniq-C_FJSP72.js";import"./without-5J-PU-jN.js";import"./UserBadge-C0S6rE_-.js";import"./useUserBundle-17T_kydg.js";import"./SkeletonTable-If1Q4Zg-.js";import"./MenuItem-CRv6srlg.js";import"./Card-DHfeIgmt.js";import"./Chip-CNav__8J.js";import"./Select-aab027f3.esm-zSKB6C7Z.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-C_Em0EsJ.js";import"./TeamBadge-wmwHy1Ot.js";import"./SkeletonButton-Dv9p8gRu.js";import"./SkeletonInlineBlock-BeCQqojL.js";import"./SkeletonParagraph-B4bRIlqn.js";import"./IconSvgButton-Dhu36ib_.js";import"./FormControlLabel-B15ZDtUx.js";import"./Checkbox-DApcw3ET.js";import"./SwitchBase-Dn46TZef.js";import"./useUpdateAcl-DucJGAUJ.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
