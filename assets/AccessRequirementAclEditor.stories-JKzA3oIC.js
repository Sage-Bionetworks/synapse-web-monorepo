import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-DH1YdleT.js";import{A as i}from"./AccessRequirementAclEditor-HPC8aicH.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BeG93Z-m.js";import"./index-Dk8XyrUc.js";import"./_baseOrderBy-uh1hQAJz.js";import"./_baseIteratee-CLehzhMb.js";import"./_baseMap-H-FWeyn0.js";import"./_baseEach-DQFyXxgw.js";import"./useQueries-XWhg4h1g.js";import"./useInfiniteQuery-Bhyhxg2I.js";import"./AclEditor-DwvtMzcg.js";import"./useRealmPrincipals-D9jnsi6M.js";import"./UserSearchBoxV2-5lldr7dx.js";import"./useDebouncedEffect-CYoJi8TG.js";import"./use-deep-compare-effect.esm-Cu7ZlfFJ.js";import"./uniq-czhcTCBH.js";import"./without-w_3BupFc.js";import"./UserBadge-D0SzbXsa.js";import"./useUserBundle-DYo1KdiC.js";import"./useSuspenseQuery-D4jnvJmQ.js";import"./SkeletonTable-DicgxcdD.js";import"./MenuItem-5x6MCJW5.js";import"./Card-D_S7GtMZ.js";import"./Chip-F_DZPuno.js";import"./Select-aab027f3.esm-Dh1lwX3t.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-Cy11O1bF.js";import"./TeamBadge-C5euEYPE.js";import"./SkeletonButton-COeTp7fr.js";import"./SkeletonInlineBlock-CPHdUQ8C.js";import"./SkeletonParagraph-Dq5xJIxI.js";import"./IconSvgButton-Bpdoi6YG.js";import"./FormControlLabel-tI4J41QQ.js";import"./Checkbox-CguI3AHg.js";import"./SwitchBase-BIcw7t5n.js";import"./useUpdateAcl-DdOTtMFK.js";const se={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
