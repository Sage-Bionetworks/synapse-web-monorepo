import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-Cb9YNozx.js";import{A as i}from"./AccessRequirementAclEditor-DJQc0VMu.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BsGhfNJc.js";import"./index-_wJIgEa8.js";import"./_baseOrderBy-B50alGxt.js";import"./_baseIteratee-Crm1dtkV.js";import"./_baseMap-CaFbY6tk.js";import"./_baseEach-C8hjnQXk.js";import"./useQueries-Ba1QGbRl.js";import"./useInfiniteQuery-CgLSPwL6.js";import"./AclEditor-DI4ECwuP.js";import"./useRealmPrincipals-BOYcyrLO.js";import"./UserSearchBoxV2-B2E5TQjc.js";import"./useDebouncedEffect-C_9kQbIo.js";import"./use-deep-compare-effect.esm-DRlUfThG.js";import"./uniq-B_kjh9wh.js";import"./without-Dc8QFibI.js";import"./UserBadge-Bh4Ksb1L.js";import"./useUserBundle--HGZeLM6.js";import"./useSuspenseQuery-DijQnciR.js";import"./SkeletonTable-D9G853Nf.js";import"./MenuItem-WtaSofOf.js";import"./Card-CUlSPQ6A.js";import"./Chip-DkiZ-DGD.js";import"./Select-aab027f3.esm-CJ_oX53i.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-GKGn8VBX.js";import"./TeamBadge-BDVNxB1t.js";import"./SkeletonButton-n18AgO8O.js";import"./SkeletonInlineBlock-Cy31Etok.js";import"./SkeletonParagraph-C98TKSTr.js";import"./IconSvgButton-HUPmXAAG.js";import"./FormControlLabel-DLrXg_In.js";import"./Checkbox-nIJeGWWn.js";import"./SwitchBase-Dg-qdkEc.js";import"./useUpdateAcl-Cp0sBT4p.js";const se={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const te=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,te as __namedExportsOrder,se as default};
