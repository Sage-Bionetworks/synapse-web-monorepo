import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-DrwjMxxV.js";import{A as i}from"./AccessRequirementAclEditor-B9fqGA-R.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-C4ZBPPn6.js";import"./index-DLIz_4HG.js";import"./_baseOrderBy-C3Xx875p.js";import"./_baseIteratee-Bg4XJGB0.js";import"./_baseMap-0JApKS8Z.js";import"./_baseEach-Dv1BcOvK.js";import"./useInfiniteQuery-CwESqI_x.js";import"./AclEditor-Cc2s8ACH.js";import"./UserSearchBoxV2-CjovKdme.js";import"./useDebouncedEffect-CuCMAX53.js";import"./use-deep-compare-effect.esm-EYp_W6bt.js";import"./uniq-CRAp08W0.js";import"./without-jF4TYD93.js";import"./UserBadge-BIMPaEKA.js";import"./useUserBundle-Bvpmk8jd.js";import"./SkeletonTable-hPiR5C1z.js";import"./MenuItem-DjrjGQIr.js";import"./Card-DOt9oZai.js";import"./Chip-CXid-GSQ.js";import"./Select-aab027f3.esm-R0wzjBr4.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DnFB8vjB.js";import"./TeamBadge-gtf561NT.js";import"./SkeletonButton-B0AmZCB5.js";import"./SkeletonInlineBlock-CN425wR7.js";import"./SkeletonParagraph-zDUPBNGu.js";import"./IconSvgButton-Dj-0rFcO.js";import"./FormControlLabel-BMJLeEQT.js";import"./Checkbox-S2lGeQb3.js";import"./SwitchBase-D8cW9WMJ.js";import"./useUpdateAcl-BHNYq5P_.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
