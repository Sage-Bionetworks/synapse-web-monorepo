import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-CAtQIdHN.js";import{A as i}from"./AccessRequirementAclEditor-DEDHNfWW.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-D3aEtsQ7.js";import"./index-DVkiAmff.js";import"./_baseOrderBy-Bs2JefcG.js";import"./_baseIteratee-_Nd2QfE8.js";import"./_baseMap-CXOYZcZC.js";import"./_baseEach-CC59DhCt.js";import"./useInfiniteQuery-BLpRTFv2.js";import"./AclEditor-q9z5ptzO.js";import"./UserSearchBoxV2-DxTeEMqm.js";import"./useDebouncedEffect-DXgNHo1y.js";import"./use-deep-compare-effect.esm-JJyQDcTJ.js";import"./uniq-BUWqKqmn.js";import"./without-C77JjJNx.js";import"./UserBadge-CJEZfb06.js";import"./useUserBundle-CwtPx6I8.js";import"./SkeletonTable-CGYf92GP.js";import"./MenuItem-CMeMzyXl.js";import"./Card-CS8vcmlr.js";import"./Chip-CfWpGXU5.js";import"./Select-aab027f3.esm-CEr-UV7s.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BwhxHCZw.js";import"./TeamBadge-CVuiLv5p.js";import"./SkeletonButton-ikrND2s9.js";import"./SkeletonInlineBlock-BsYWVoeU.js";import"./SkeletonParagraph-BrBu-G7u.js";import"./IconSvgButton-Bb9rGtlj.js";import"./FormControlLabel-CtOo13QD.js";import"./Checkbox-D5FQxyEB.js";import"./SwitchBase-DaWZ8Z7d.js";import"./useUpdateAcl-C9o_8c0Q.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
