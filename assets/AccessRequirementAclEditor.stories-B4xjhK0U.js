import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-BQ-FyWsS.js";import{A as i}from"./AccessRequirementAclEditor-wVi4tGlh.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CTng2P-U.js";import"./index-B8FvutqA.js";import"./_baseOrderBy-B7Wy6e_z.js";import"./_baseIteratee-D1Tm5upA.js";import"./_baseMap-BilfFXZ5.js";import"./_baseEach-DzmUJdB4.js";import"./useQueries-CogN6Y-I.js";import"./useInfiniteQuery-BmVO0mhr.js";import"./AclEditor-CQmUjMzq.js";import"./UserSearchBoxV2-rirqvZEZ.js";import"./useDebouncedEffect-n889gsGg.js";import"./use-deep-compare-effect.esm-CEJVc6R6.js";import"./uniq-4tH-WeBy.js";import"./without-K2iuFss8.js";import"./UserBadge-9nlLDOSg.js";import"./useUserBundle-gkGCGUlC.js";import"./useSuspenseQuery-DUVSvPvg.js";import"./SkeletonTable-DUCbFLJl.js";import"./MenuItem-CdJwdcJ1.js";import"./Card-Bdmezjf-.js";import"./Chip-zSUCPrxT.js";import"./Select-aab027f3.esm-DNnQDaAP.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-B9keGLYN.js";import"./TeamBadge-Csz93uW5.js";import"./SkeletonButton-BZyaXej1.js";import"./SkeletonInlineBlock-D_nLMWfH.js";import"./SkeletonParagraph-D-enYo3q.js";import"./IconSvgButton-spVEP_s1.js";import"./FormControlLabel-0XzmGWH_.js";import"./Checkbox-BSd_DIyD.js";import"./SwitchBase-B5Q_tRt4.js";import"./useUpdateAcl-vlFy34hi.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
