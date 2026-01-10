import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-BMVoK9rQ.js";import{A as i}from"./AccessRequirementAclEditor-CpN8kdTV.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Bfgon4dR.js";import"./index-Asaz_d4d.js";import"./_baseOrderBy-CuL3JrF5.js";import"./_baseIteratee-BHLHtG1R.js";import"./_baseMap-gQ2Le4IE.js";import"./_baseEach-UaJT6spa.js";import"./useQueries-DH3Kh0rD.js";import"./useInfiniteQuery-3kgmiq4J.js";import"./AclEditor-Cb-9AoM0.js";import"./UserSearchBoxV2-LKek15eL.js";import"./useDebouncedEffect-CAzfHKIf.js";import"./use-deep-compare-effect.esm-CYGqCUNb.js";import"./uniq-BWBlN81V.js";import"./without-BVu7lcAB.js";import"./UserBadge-D3W1hFC1.js";import"./useUserBundle-sdTO429-.js";import"./useSuspenseQuery-DZOIBk5v.js";import"./SkeletonTable-7r8fiUSQ.js";import"./MenuItem-ClKAXsdA.js";import"./Card-dTGT8nbt.js";import"./Chip-Bv1Iw22F.js";import"./Select-aab027f3.esm-DMIbP4vY.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-C8sCT3Lz.js";import"./TeamBadge-B1pwHIAJ.js";import"./SkeletonButton-UgghPQrF.js";import"./SkeletonInlineBlock-BqTkLdlE.js";import"./SkeletonParagraph-DdPi-rNG.js";import"./IconSvgButton-DirHimAx.js";import"./FormControlLabel-4XNbKvi4.js";import"./Checkbox-C4cOGbgW.js";import"./SwitchBase-C1MXrM5l.js";import"./useUpdateAcl-C24QZBvg.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
