import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-E5Ka0mIZ.js";import{A as i}from"./AccessRequirementAclEditor-BxU0Kjvr.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-1-Q1slqh.js";import"./index-Cv8vAGy5.js";import"./_baseOrderBy-Cnq4q8EF.js";import"./_baseIteratee-D6PNAt1_.js";import"./_baseMap-DSEb_IbP.js";import"./_baseEach-C0RJNqJx.js";import"./useInfiniteQuery-DcuDXesA.js";import"./AclEditor-DIM2PILl.js";import"./UserSearchBoxV2-CsXACod2.js";import"./useDebouncedEffect-BPPhYgpp.js";import"./use-deep-compare-effect.esm-C1Ytdmry.js";import"./uniq-C-hXHVR1.js";import"./without-DOzHNp1M.js";import"./UserBadge-BNHf5Pka.js";import"./useUserBundle-BGioipGE.js";import"./SkeletonTable-Crx1Nozv.js";import"./MenuItem-DBqDOy7_.js";import"./Card-zpRmv5OW.js";import"./Chip-Bk7-WqYd.js";import"./Select-aab027f3.esm-v_oEtGqu.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BFXuWkxT.js";import"./TeamBadge-CtK7iXzO.js";import"./SkeletonButton-kIjuP8ut.js";import"./SkeletonInlineBlock-C_4IQROm.js";import"./SkeletonParagraph-9oETCVT4.js";import"./IconSvgButton-DGlG4cgV.js";import"./FormControlLabel-CdVbVsO6.js";import"./Checkbox-CJ7-gE9x.js";import"./SwitchBase-CCwNSBco.js";import"./useUpdateAcl-CYIR6wNA.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
