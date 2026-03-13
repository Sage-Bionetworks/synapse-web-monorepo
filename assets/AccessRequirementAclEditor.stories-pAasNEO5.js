import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-DR0uSfJB.js";import{A as i}from"./AccessRequirementAclEditor-5e1X4DWL.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DioFPcC_.js";import"./index-BHYxApRu.js";import"./_baseOrderBy-DpB0RZ7Z.js";import"./_baseIteratee-BliHnktd.js";import"./_baseMap-BohI5ZmA.js";import"./_baseEach-DK-2XrG3.js";import"./useInfiniteQuery-Bf2Ztb4F.js";import"./AclEditor-DD3Vq1Na.js";import"./UserSearchBoxV2-Do7G_nHi.js";import"./useDebouncedEffect-B98yozRZ.js";import"./use-deep-compare-effect.esm-CI45YVk3.js";import"./uniq-CnlYDF1j.js";import"./without-w2adp344.js";import"./UserBadge-H2XEmPKG.js";import"./useUserBundle-GG-xTFJo.js";import"./SkeletonTable-DQpC9D8t.js";import"./MenuItem-Fs-K7yfa.js";import"./Card-BtsV7fy1.js";import"./Chip-C7t_e7oc.js";import"./Select-aab027f3.esm-DEhoXYTm.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-Dq--wLhR.js";import"./TeamBadge-BOMGnxJt.js";import"./SkeletonButton-hycMW2ML.js";import"./SkeletonInlineBlock-Cc3tKGBX.js";import"./SkeletonParagraph-FBICusf3.js";import"./IconSvgButton-DHFgtRqh.js";import"./FormControlLabel-jBye_ljs.js";import"./Checkbox-D1u9ZvPz.js";import"./SwitchBase-CNQkEcG9.js";import"./useUpdateAcl-Bmj8ldmJ.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
