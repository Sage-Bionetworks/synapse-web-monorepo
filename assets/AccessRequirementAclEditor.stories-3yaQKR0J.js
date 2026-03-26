import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-BVIZDvjc.js";import{A as i}from"./AccessRequirementAclEditor-CY1l3Zyo.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BPE-2Pul.js";import"./index-DNB6jgYr.js";import"./_baseOrderBy-DkKW-f5Q.js";import"./_baseIteratee-D9EuEOo0.js";import"./_baseMap-Bi6B3sHX.js";import"./_baseEach-IrID1Gdl.js";import"./useInfiniteQuery-BSt_-lE2.js";import"./AclEditor-CivQ4tIe.js";import"./UserSearchBoxV2-BwzKOHhv.js";import"./useDebouncedEffect-Fnh_7F32.js";import"./use-deep-compare-effect.esm-B8nksVgc.js";import"./uniq-NUrNodLE.js";import"./without-rpomXa5o.js";import"./UserBadge-BloHpBvi.js";import"./useUserBundle-BViq3gOv.js";import"./SkeletonTable-CtaVYpmw.js";import"./MenuItem-CO-Q0A-K.js";import"./Card-BGbetZvK.js";import"./Chip-Bzu_y-sk.js";import"./Select-aab027f3.esm-BMBgQj1Y.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-xKlr88Va.js";import"./TeamBadge-om4wrZOC.js";import"./SkeletonButton-D1SYxzVe.js";import"./SkeletonInlineBlock-CEdkX1JK.js";import"./SkeletonParagraph-BSFvRjJJ.js";import"./IconSvgButton-FGw39Rv6.js";import"./FormControlLabel-C7grxvps.js";import"./Checkbox-BIzsyZ1H.js";import"./SwitchBase-uF1flSX8.js";import"./useUpdateAcl-CMvUOXQV.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
