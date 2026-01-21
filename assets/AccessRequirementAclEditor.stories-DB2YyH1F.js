import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-BVXHJH4u.js";import{A as i}from"./AccessRequirementAclEditor-COqewfio.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DgbpPYYv.js";import"./index-B_trrxS1.js";import"./_baseOrderBy-CiwWhd0R.js";import"./_baseIteratee-BCoe42tj.js";import"./_baseMap-CkmWC-eY.js";import"./_baseEach-C6dvQ32R.js";import"./useQueries-pOn84d0l.js";import"./useInfiniteQuery-D0pzNhrd.js";import"./AclEditor-LxKuaMER.js";import"./UserSearchBoxV2-B9NcPkKJ.js";import"./useDebouncedEffect-B7hq1B09.js";import"./use-deep-compare-effect.esm-CFDf9yci.js";import"./uniq-kkBrZweF.js";import"./without-DBr21Rc0.js";import"./UserBadge-D8YQIqU3.js";import"./useUserBundle-BoxU-Q5V.js";import"./useSuspenseQuery-D29r270q.js";import"./SkeletonTable-DQbZ0dw9.js";import"./MenuItem-CfEVbDMR.js";import"./Card-DR2RIN77.js";import"./Chip-C4lncqkU.js";import"./Select-aab027f3.esm-DdJVb3Hx.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-D4N_23_Q.js";import"./TeamBadge-nY1pRdL-.js";import"./SkeletonButton-B31ULBiJ.js";import"./SkeletonInlineBlock-DtRriEan.js";import"./SkeletonParagraph-CPzN7Agp.js";import"./IconSvgButton-BbHwoEIV.js";import"./FormControlLabel-DZVjQdu9.js";import"./Checkbox-eD6UapcE.js";import"./SwitchBase-CHIEJ2h4.js";import"./useUpdateAcl-_UprKDJg.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
