import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-DY1t7RUX.js";import{A as i}from"./AccessRequirementAclEditor-C5Cm1_mm.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DAUF1oP4.js";import"./index-By-2rY5w.js";import"./_baseOrderBy-zLyQEl7c.js";import"./_baseIteratee-Csi7uG28.js";import"./_baseMap-DbFCN3L8.js";import"./_baseEach-gQnStzZC.js";import"./useQueries-BBbQzEvi.js";import"./useInfiniteQuery-Bh-67AIU.js";import"./AclEditor-CV304mAM.js";import"./UserSearchBoxV2-CVZxhNEs.js";import"./useDebouncedEffect-DSA6C6GW.js";import"./use-deep-compare-effect.esm-CYAZWjeG.js";import"./uniq-yN4BBPIa.js";import"./without-BsBLigQy.js";import"./UserBadge-5rHSNfxc.js";import"./useUserBundle-DPIgGoEf.js";import"./useSuspenseQuery-xirJCFap.js";import"./SkeletonTable-Q2u-z5xw.js";import"./MenuItem-C2Xe6MJI.js";import"./Card-7QnyKRpy.js";import"./Chip-1hYgjVpt.js";import"./Select-aab027f3.esm-CWQSsNPF.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-myncO2-L.js";import"./TeamBadge-D81SGtK0.js";import"./SkeletonButton-DnY8-1vA.js";import"./SkeletonInlineBlock-DZRcElE1.js";import"./SkeletonParagraph-DFydk1yR.js";import"./IconSvgButton-CA0v9gNd.js";import"./FormControlLabel-BxC4Yjte.js";import"./Checkbox-CJeA1kXl.js";import"./SwitchBase-ZsFHOwpa.js";import"./useUpdateAcl-BuTNVJEG.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
