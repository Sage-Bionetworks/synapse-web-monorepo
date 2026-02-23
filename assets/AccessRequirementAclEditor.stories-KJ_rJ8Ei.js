import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-bA05VlDB.js";import{A as i}from"./AccessRequirementAclEditor-B9OEnH7A.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CBTd1PGL.js";import"./index-C4a7Rce_.js";import"./_baseOrderBy-CTWC63ny.js";import"./_baseIteratee-DKY1oxMw.js";import"./_baseMap-BItPc330.js";import"./_baseEach-Bswgqtar.js";import"./useQueries-CiWEfBA0.js";import"./useInfiniteQuery-DI02BS_t.js";import"./AclEditor-BRXK9Tmt.js";import"./useRealmPrincipals-C6hD7tmP.js";import"./UserSearchBoxV2-B3-qsXAm.js";import"./useDebouncedEffect-ua879cHU.js";import"./use-deep-compare-effect.esm-COh4b0Y0.js";import"./uniq-O_fF4dYA.js";import"./without-C-Ku9zJn.js";import"./UserBadge-DmE9Q2UM.js";import"./useUserBundle-C5zElDJN.js";import"./useSuspenseQuery-Zel5Xy26.js";import"./SkeletonTable-C3k8u3nb.js";import"./MenuItem-DFGunzbN.js";import"./Card-D2Ee3gfr.js";import"./Chip-vyXQw8tV.js";import"./Select-aab027f3.esm-CJPqdN7Y.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-OMw-mqP4.js";import"./TeamBadge-6XB9D57O.js";import"./SkeletonButton-D2qH20IX.js";import"./SkeletonInlineBlock-D2v7KJSi.js";import"./SkeletonParagraph-DlcYTizK.js";import"./IconSvgButton-DqJLPwEz.js";import"./FormControlLabel-DX3N0jTL.js";import"./Checkbox-C0VleB4d.js";import"./SwitchBase-Vd-LEtt0.js";import"./useUpdateAcl-Ba5NcH2X.js";const se={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
