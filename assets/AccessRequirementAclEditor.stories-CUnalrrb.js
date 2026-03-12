import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-CpfV3NOk.js";import{A as i}from"./AccessRequirementAclEditor-QahbnToH.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Bg4kd5fC.js";import"./index-C4-1Fb9W.js";import"./_baseOrderBy-D3MUMegZ.js";import"./_baseIteratee-CwnUjdrn.js";import"./_baseMap-DXvb3YXn.js";import"./_baseEach-Bl5cvDEJ.js";import"./useInfiniteQuery-B30BxfoI.js";import"./AclEditor-BU6tdHxy.js";import"./UserSearchBoxV2-Dpq3Vw9p.js";import"./useDebouncedEffect-DHbsTrbW.js";import"./use-deep-compare-effect.esm-D0k0j8TP.js";import"./uniq-CRDg374f.js";import"./without-DDcpywqw.js";import"./UserBadge-BfZ-Dzq0.js";import"./useUserBundle-C27HsRJe.js";import"./SkeletonTable-DOJ0zD5O.js";import"./MenuItem-JjjD7Qco.js";import"./Card-Dk_Qq8ND.js";import"./Chip-D0au_Ohq.js";import"./Select-aab027f3.esm-8AZvrFDx.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BIjh_1ut.js";import"./TeamBadge-BKsYQulW.js";import"./SkeletonButton-AQOmCgu3.js";import"./SkeletonInlineBlock-DUNC2gO4.js";import"./SkeletonParagraph-D5apqSdK.js";import"./IconSvgButton-CQfO6LcX.js";import"./FormControlLabel-BHc8c3P4.js";import"./Checkbox-DabvsqUa.js";import"./SwitchBase-C9B51BED.js";import"./useUpdateAcl-ChDi-LU4.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
