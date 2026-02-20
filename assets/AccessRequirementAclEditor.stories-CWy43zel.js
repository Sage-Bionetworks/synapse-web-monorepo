import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-D1nGOIH-.js";import{A as i}from"./AccessRequirementAclEditor-Xzd0wT35.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CTJs9P0Q.js";import"./index-03zVvH3U.js";import"./_baseOrderBy-CVK5KDR5.js";import"./_baseIteratee-DMGufiEs.js";import"./_baseMap-CCrqr-lv.js";import"./_baseEach-CIEMg2cY.js";import"./useQueries-B9MwPHmO.js";import"./useInfiniteQuery-BoAhb982.js";import"./AclEditor-_xd7mlh0.js";import"./useRealmPrincipals-ChyArmIR.js";import"./UserSearchBoxV2-AobXS9ab.js";import"./useDebouncedEffect-695dxOFD.js";import"./use-deep-compare-effect.esm-BO3WjKot.js";import"./uniq-DwR8JzlG.js";import"./without-7j7nnfim.js";import"./UserBadge-CgnKUoBG.js";import"./useUserBundle-ET8KNRSc.js";import"./useSuspenseQuery-a9uGkD3u.js";import"./SkeletonTable-DawIinBB.js";import"./MenuItem-3MOxvSFm.js";import"./Card-tjdQEG3Z.js";import"./Chip-BUJWntqC.js";import"./Select-aab027f3.esm-DXpZVGYG.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CDl8u5Jw.js";import"./TeamBadge-Nw0P6hpd.js";import"./SkeletonButton-B1c1lzEn.js";import"./SkeletonInlineBlock-BiIlwrm4.js";import"./SkeletonParagraph-DPQazNTU.js";import"./IconSvgButton-BmEw-BQ-.js";import"./FormControlLabel-sZ_1ZWTa.js";import"./Checkbox-C6IS4i6O.js";import"./SwitchBase-BVmb4r5A.js";import"./useUpdateAcl-CtBh5Gre.js";const se={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
