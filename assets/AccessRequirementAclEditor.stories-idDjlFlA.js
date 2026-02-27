import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-CxpGQRBF.js";import{A as i}from"./AccessRequirementAclEditor-CEFw8dtp.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-C2c4lUWp.js";import"./index-Bxpms_sx.js";import"./_baseOrderBy-D27SCrme.js";import"./_baseIteratee-CEqYEKXQ.js";import"./_baseMap-Oh885vco.js";import"./_baseEach-B4851qud.js";import"./useInfiniteQuery-5mr2kSpt.js";import"./AclEditor-B0SQhF8_.js";import"./UserSearchBoxV2-LrwLBFLP.js";import"./useDebouncedEffect-ChAo9rES.js";import"./use-deep-compare-effect.esm-DVQApDDI.js";import"./uniq-C1mF3GF0.js";import"./without-BC1_WuZi.js";import"./UserBadge-CQ7vqXnO.js";import"./useUserBundle-CnIXmd2O.js";import"./SkeletonTable-B9WKv7bd.js";import"./MenuItem-B0A_VAcM.js";import"./Card-DNCBPWYU.js";import"./Chip-CAv6xn2G.js";import"./Select-aab027f3.esm-B9J-eAEQ.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-akR24yVj.js";import"./TeamBadge-F08nc5L0.js";import"./SkeletonButton-8uBDlMQq.js";import"./SkeletonInlineBlock-DzPT_dbg.js";import"./SkeletonParagraph-BVjbv9Tg.js";import"./IconSvgButton-DQ5N18el.js";import"./FormControlLabel-DOKrTtT6.js";import"./Checkbox-BrGglNIe.js";import"./SwitchBase-Czm70tKI.js";import"./useUpdateAcl-Irc1etgl.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
