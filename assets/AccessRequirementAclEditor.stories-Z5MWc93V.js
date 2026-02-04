import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-PYPp7xnK.js";import{A as i}from"./AccessRequirementAclEditor-CvLb3vvh.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BOF9CfPc.js";import"./index-1SI29lko.js";import"./_baseOrderBy-BrDbsaFY.js";import"./_baseIteratee-BZFVvPTZ.js";import"./_baseMap-D_SXijK0.js";import"./_baseEach-ClcsA4o0.js";import"./useQueries-Be8MxYe3.js";import"./useInfiniteQuery-BNv7EGxj.js";import"./AclEditor-NkuZvfp8.js";import"./UserSearchBoxV2-BtOxq4cm.js";import"./useDebouncedEffect-B2d5hwCH.js";import"./use-deep-compare-effect.esm-BUizEgvt.js";import"./uniq-DMKjuRDc.js";import"./without-Ba7yjj4r.js";import"./UserBadge-Dhz-w7oT.js";import"./useUserBundle-Cc0t0_AU.js";import"./useSuspenseQuery-DpR9wtQx.js";import"./SkeletonTable-CVr3KqkK.js";import"./MenuItem-h2F7yZes.js";import"./Card-Dcs6KWbP.js";import"./Chip-BkoJj4oN.js";import"./Select-aab027f3.esm-D-uVAGlb.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-D15NH0y6.js";import"./TeamBadge-DIL3iLZa.js";import"./SkeletonButton-CWan3o9p.js";import"./SkeletonInlineBlock-CdKZUiWg.js";import"./SkeletonParagraph-DNnDNfQN.js";import"./IconSvgButton-CX2T_-Y1.js";import"./FormControlLabel-BFgRNFSG.js";import"./Checkbox-Ds0rvTa4.js";import"./SwitchBase-BFhf4PEE.js";import"./useUpdateAcl-CZIhYpbA.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
