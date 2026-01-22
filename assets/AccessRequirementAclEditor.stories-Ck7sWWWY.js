import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-Du5t3CHa.js";import{A as i}from"./AccessRequirementAclEditor-BJVcJG2d.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-4RQqBe7C.js";import"./index-CNn6qoPA.js";import"./_baseOrderBy-3Fjog4iC.js";import"./_baseIteratee-46oxJqcI.js";import"./_baseMap-Dt6qK5dy.js";import"./_baseEach-C0b7CaDS.js";import"./useQueries-CNFOi_mw.js";import"./useInfiniteQuery-OCUbEd9y.js";import"./AclEditor-CtljhQpg.js";import"./UserSearchBoxV2-Ctwszba5.js";import"./useDebouncedEffect-DIZb-ey7.js";import"./use-deep-compare-effect.esm-AaOUJiRt.js";import"./uniq-DVZOq7ho.js";import"./without-DfRl6KGL.js";import"./UserBadge-BVhpguWH.js";import"./useUserBundle-DutONjLY.js";import"./useSuspenseQuery-DK6Y2lqg.js";import"./SkeletonTable-KNaihl5A.js";import"./MenuItem-B06U7Mh-.js";import"./Card-BA2JlBwy.js";import"./Chip-C9V27U36.js";import"./Select-aab027f3.esm-BDe7h-y6.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DiclrULV.js";import"./TeamBadge-bpg2a6VL.js";import"./SkeletonButton-JJ15ovuj.js";import"./SkeletonInlineBlock-E_CX27Fe.js";import"./SkeletonParagraph-BlwsXkyr.js";import"./IconSvgButton-BOZpCiC3.js";import"./FormControlLabel-D53x5o1g.js";import"./Checkbox-DTNCLd3c.js";import"./SwitchBase-C1PWzrki.js";import"./useUpdateAcl-DQKe7khw.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
