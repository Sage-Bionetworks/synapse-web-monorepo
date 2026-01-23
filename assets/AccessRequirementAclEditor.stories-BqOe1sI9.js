import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-CJi55ERg.js";import{A as i}from"./AccessRequirementAclEditor-DnEkIZeW.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B2k2htXt.js";import"./index-DJ8Jevlp.js";import"./_baseOrderBy-CHtZV-az.js";import"./_baseIteratee-DJ2aIvY0.js";import"./_baseMap-CPFYYg7D.js";import"./_baseEach-FHM5R5X1.js";import"./useQueries-B_1J4O-w.js";import"./useInfiniteQuery-COdaCjzZ.js";import"./AclEditor-BmHwoj4K.js";import"./UserSearchBoxV2-uh-pUCfN.js";import"./useDebouncedEffect-DDbCKJnK.js";import"./use-deep-compare-effect.esm-B3Jc5xfm.js";import"./uniq-BXrBlj2h.js";import"./without-CjAIne9P.js";import"./UserBadge-Dffj96fH.js";import"./useUserBundle-B5WLYqAD.js";import"./useSuspenseQuery-Prdg1nCF.js";import"./SkeletonTable-DqghlvE9.js";import"./MenuItem-CXmp431F.js";import"./Card-C_RZE_cg.js";import"./Chip-DELPMDmB.js";import"./Select-aab027f3.esm-DC3Q4JiN.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DK0Y5dqS.js";import"./TeamBadge-Drq_7yhd.js";import"./SkeletonButton-Dh0pWoWT.js";import"./SkeletonInlineBlock-d0W0oi9e.js";import"./SkeletonParagraph-Bn6jXz5y.js";import"./IconSvgButton-8U5dlhVH.js";import"./FormControlLabel-O5Pr_avL.js";import"./Checkbox-DAAWAHE0.js";import"./SwitchBase-1IBRQWl4.js";import"./useUpdateAcl-BZ2Mnxd8.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
