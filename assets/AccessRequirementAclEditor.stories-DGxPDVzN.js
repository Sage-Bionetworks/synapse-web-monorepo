import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-B_O9kSix.js";import{A as i}from"./AccessRequirementAclEditor-z7PVsOM2.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-C48nzhrP.js";import"./index-CIA9_xQz.js";import"./_baseOrderBy-DW79tZ4P.js";import"./_baseIteratee-yjnrhNzg.js";import"./_baseMap-DN0Mni7r.js";import"./_baseEach-CfBB6sdk.js";import"./useInfiniteQuery-BhNmSgI4.js";import"./AclEditor-BrW0Xv53.js";import"./UserSearchBoxV2-B3nPo0zB.js";import"./useDebouncedEffect-BPILdPo4.js";import"./use-deep-compare-effect.esm-BXI7_gf7.js";import"./uniq-CkScBwqE.js";import"./without-CCFk_7Et.js";import"./UserBadge-DxRMin_1.js";import"./useUserBundle-BrtD0xy9.js";import"./SkeletonTable-DPjCujA-.js";import"./MenuItem-BcwwJPC9.js";import"./Card-DeLay9_m.js";import"./Chip-DJkWIvUs.js";import"./Select-aab027f3.esm-C0FY3x0P.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BfQs934r.js";import"./TeamBadge-BmxBGDC-.js";import"./SkeletonButton-BM1gzNpw.js";import"./SkeletonInlineBlock-B4Ftzl0H.js";import"./SkeletonParagraph-CyxH5Rsx.js";import"./IconSvgButton-CTduWyyt.js";import"./FormControlLabel-BIGrXLA0.js";import"./Checkbox-S3ZkMNUz.js";import"./SwitchBase-BTC1pAKz.js";import"./useUpdateAcl-DCT-gyzp.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
