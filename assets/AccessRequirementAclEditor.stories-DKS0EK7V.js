import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-Ak5JkJtY.js";import{A as i}from"./AccessRequirementAclEditor-BckixUwB.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-9va52kNa.js";import"./index-DhBGOdhC.js";import"./_baseOrderBy-B5C28sMC.js";import"./_baseIteratee-BXsmtn2r.js";import"./_baseMap-BDo9iXyH.js";import"./_baseEach-Czuq5CBY.js";import"./useInfiniteQuery-BIO-789Q.js";import"./AclEditor-rWx39AZx.js";import"./UserSearchBoxV2-DZbct1tQ.js";import"./useDebouncedEffect-NmXM8Ye3.js";import"./use-deep-compare-effect.esm-C9wQAHfA.js";import"./uniq-DjzL4rka.js";import"./without-Ccrs_yYi.js";import"./UserBadge-cYluQ2Y6.js";import"./useUserBundle-BoMKGodO.js";import"./SkeletonTable-DmhZtLI7.js";import"./MenuItem-BM1_B-4q.js";import"./Card-DxvHHd6H.js";import"./Chip-rT4uyFgK.js";import"./Select-aab027f3.esm-DX7g6c1_.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-WlYBdm_b.js";import"./TeamBadge-CCVb_jQT.js";import"./SkeletonButton-J64P-p4R.js";import"./SkeletonInlineBlock-DSfvHYOc.js";import"./SkeletonParagraph-eBTTxCdT.js";import"./IconSvgButton-oGlzE1IN.js";import"./FormControlLabel-DTCzZ85M.js";import"./Checkbox-EQVEYCdE.js";import"./SwitchBase-CPgLpXbj.js";import"./useUpdateAcl-DofpxzxY.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const ee=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,ee as __namedExportsOrder,$ as default};
