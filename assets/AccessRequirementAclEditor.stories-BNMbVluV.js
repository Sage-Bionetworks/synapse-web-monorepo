import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-Pdm4gHko.js";import{A as i}from"./AccessRequirementAclEditor-D_6_Pvpk.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DQCeO1Vk.js";import"./index-DFJ7Q3Tb.js";import"./_baseOrderBy-B7lLgH_2.js";import"./_baseIteratee-CHs1BNVw.js";import"./_baseMap-q97RKbZV.js";import"./_baseEach-Br-2w81B.js";import"./useQueries-CgvL72Zk.js";import"./useInfiniteQuery-B29qh585.js";import"./AclEditor-B23J41Xj.js";import"./UserSearchBoxV2-Dql8wmhI.js";import"./useDebouncedEffect-ALzozL4j.js";import"./use-deep-compare-effect.esm-Dxp9kEaT.js";import"./uniq-D1wwJhoZ.js";import"./without-DeZ9_D_G.js";import"./UserBadge-wxpXkL3B.js";import"./useUserBundle-Bz1L6r6d.js";import"./useSuspenseQuery-2zOEkQmi.js";import"./SkeletonTable-C47tnEUn.js";import"./MenuItem-D1_ZdkN0.js";import"./Card-C6gQHDcr.js";import"./Chip-D7Y4i0b0.js";import"./Select-aab027f3.esm-C6zoKCc-.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BmPep3Uj.js";import"./TeamBadge-DnCwEZjc.js";import"./SkeletonButton-KgZa_W_5.js";import"./SkeletonInlineBlock-DSI3AO38.js";import"./SkeletonParagraph-DMN2Qcp6.js";import"./IconSvgButton-CHzpXH5K.js";import"./FormControlLabel-HPR0Le7Z.js";import"./Checkbox-sjZ3Zt0Q.js";import"./SwitchBase-D80GrcEk.js";import"./useUpdateAcl-CHQBJxRH.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
