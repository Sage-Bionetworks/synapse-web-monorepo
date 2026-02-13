import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-D-KER6Qh.js";import{A as i}from"./AccessRequirementAclEditor-BKWioMn9.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DJdPqZLJ.js";import"./index-C6MZRWmF.js";import"./_baseOrderBy-DIwOyEp0.js";import"./_baseIteratee-DEkFHii0.js";import"./_baseMap-C2UuXXF2.js";import"./_baseEach-DWPf_RCf.js";import"./useQueries-VDAmT_8W.js";import"./useInfiniteQuery-DdL0acdR.js";import"./AclEditor-yZr8_cfe.js";import"./UserSearchBoxV2-3bxAhg8w.js";import"./useDebouncedEffect-11Mmbs1n.js";import"./use-deep-compare-effect.esm-CJo0Bo62.js";import"./uniq-B53z5Mvx.js";import"./without-DXFuuMqJ.js";import"./UserBadge-DPBQCDfd.js";import"./useUserBundle-BJw245DA.js";import"./useSuspenseQuery-BSi61cfF.js";import"./SkeletonTable-C--yRYi2.js";import"./MenuItem-Dh0Z5Zi9.js";import"./Card-222ytxqR.js";import"./Chip-BMsDoxJ4.js";import"./Select-aab027f3.esm-DdFdvQth.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-EsRqVp6Z.js";import"./TeamBadge-Cc74eBFf.js";import"./SkeletonButton-BHBiM-A7.js";import"./SkeletonInlineBlock-BwJZpIPy.js";import"./SkeletonParagraph-DuJaGlPU.js";import"./IconSvgButton-1sMID1x2.js";import"./FormControlLabel-DYFts0_i.js";import"./Checkbox-BxWUJH6V.js";import"./SwitchBase-DLfqjyvF.js";import"./useUpdateAcl-nBSxUabG.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
