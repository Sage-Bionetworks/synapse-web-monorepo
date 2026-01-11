import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-BIEbu1W6.js";import{A as i}from"./AccessRequirementAclEditor-CTdvgaAG.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DMlWDqFN.js";import"./index-G6SXchb0.js";import"./_baseOrderBy-v3AVsVKV.js";import"./_baseIteratee-EamAns9I.js";import"./_baseMap-CKXGksU7.js";import"./_baseEach-Ds8ZIurE.js";import"./useQueries-Cdmrbg4h.js";import"./useInfiniteQuery-B0KU597s.js";import"./AclEditor-CDWXXcaY.js";import"./UserSearchBoxV2-De_D9ris.js";import"./useDebouncedEffect-Bu5GdWCA.js";import"./use-deep-compare-effect.esm-BdamFNJU.js";import"./uniq-BxbLoW-Z.js";import"./without-eMQmSwl1.js";import"./UserBadge-CkpZ8t6W.js";import"./useUserBundle-bL5uBmII.js";import"./useSuspenseQuery-B21UYyAc.js";import"./SkeletonTable-xs4-qgjj.js";import"./MenuItem-DN4nfg1A.js";import"./Card-BRaEJLq9.js";import"./Chip-BTFPdc0m.js";import"./Select-aab027f3.esm-BZ3rq3CA.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CzfEaPzE.js";import"./TeamBadge-L6v-eh7R.js";import"./SkeletonButton-CYSUqy8V.js";import"./SkeletonInlineBlock-BPt0uiBn.js";import"./SkeletonParagraph-C7NGLrAr.js";import"./IconSvgButton-C3aSYFbA.js";import"./FormControlLabel-Bz8ihAzn.js";import"./Checkbox-BRJfsK-C.js";import"./SwitchBase-CInKnVeE.js";import"./useUpdateAcl-BlFXfxdG.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
