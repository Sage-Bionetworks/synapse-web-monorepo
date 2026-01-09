import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-DCJ7skCF.js";import{A as i}from"./AccessRequirementAclEditor-Cw2gY_hH.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-40VLCRft.js";import"./index-BmNsh1D_.js";import"./_baseOrderBy-BeTOIVW0.js";import"./_baseIteratee-BxzXFjBF.js";import"./_baseMap-GyITq5cq.js";import"./_baseEach-C1NioYL1.js";import"./useQueries-HPJfUFcz.js";import"./useInfiniteQuery-Cnz7W2re.js";import"./AclEditor-iW12BTBz.js";import"./UserSearchBoxV2-DE5MPaju.js";import"./useDebouncedEffect-BjKyg8N_.js";import"./use-deep-compare-effect.esm-DRQaZ9j-.js";import"./uniq-5mVGOylI.js";import"./without-DYzdF1Dc.js";import"./UserBadge-B1k4a2En.js";import"./useUserBundle-B1IzmcZW.js";import"./useSuspenseQuery-hpjNpxLU.js";import"./SkeletonTable-91lmyC3W.js";import"./MenuItem-yNgfeWcI.js";import"./Card-CrtXJCz7.js";import"./Chip-BB_My-sd.js";import"./Select-aab027f3.esm-D7rTPQWe.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DaeII1IB.js";import"./TeamBadge-DjtJvXto.js";import"./SkeletonButton-Ckcy3ANt.js";import"./SkeletonInlineBlock-XM0IHiqH.js";import"./SkeletonParagraph-CIIa240g.js";import"./IconSvgButton-BI9BUvSt.js";import"./FormControlLabel-B12_DI4H.js";import"./Checkbox-dKk_kWGN.js";import"./SwitchBase-CnTd8DTj.js";import"./useUpdateAcl-BAPjTn94.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
