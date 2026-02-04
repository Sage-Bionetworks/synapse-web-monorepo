import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-9zwml_ZL.js";import{A as i}from"./AccessRequirementAclEditor-Cm6TOmJ5.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DgT6K-E4.js";import"./index-qxRvCYco.js";import"./_baseOrderBy-k-W7iE60.js";import"./_baseIteratee-wuXEnZXa.js";import"./_baseMap-BDolchDL.js";import"./_baseEach-C2lZPHvD.js";import"./useQueries-asxxJCv1.js";import"./useInfiniteQuery-BQlxA6Iu.js";import"./AclEditor-CIWg4VqN.js";import"./UserSearchBoxV2-DJw8q8Uw.js";import"./useDebouncedEffect-Dw7l-Qrd.js";import"./use-deep-compare-effect.esm-BS58VsrM.js";import"./uniq-DD5l1ddz.js";import"./without-bsaFqCgl.js";import"./UserBadge-roJgG6JX.js";import"./useUserBundle-MekiU7Qn.js";import"./useSuspenseQuery-DROjoE-r.js";import"./SkeletonTable-CtHOf3Y6.js";import"./MenuItem-DDbuquWO.js";import"./Card-DAP4jV0y.js";import"./Chip-D5tNn4lG.js";import"./Select-aab027f3.esm-q1bxGMq2.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CMALff2j.js";import"./TeamBadge-LwA7PgsL.js";import"./SkeletonButton-C8wU0a4y.js";import"./SkeletonInlineBlock-D9CRPwvT.js";import"./SkeletonParagraph-jYvf1dwm.js";import"./IconSvgButton-BwwqvxWh.js";import"./FormControlLabel-BWxHVIis.js";import"./Checkbox-DJRKRmmX.js";import"./SwitchBase-DVj3vtTj.js";import"./useUpdateAcl-Dw9Z40UJ.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
