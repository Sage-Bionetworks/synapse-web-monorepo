import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-Bd48Phhx.js";import{A as i}from"./AccessRequirementAclEditor-CoMXNNHW.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-D8EP13X3.js";import"./index-4gXpW4bf.js";import"./_baseOrderBy-pD6oys2i.js";import"./_baseIteratee-FIlUPYy6.js";import"./_baseMap-BKdhkoLq.js";import"./_baseEach-Ca-EIFRq.js";import"./useInfiniteQuery-lMwdmXJ9.js";import"./AclEditor-DAeqBq8Y.js";import"./UserSearchBoxV2-Bo0dtOOE.js";import"./useDebouncedEffect-hUKprK7z.js";import"./use-deep-compare-effect.esm-Bh2RpSBo.js";import"./uniq-rWVkPxbm.js";import"./without-D8fKqK1Y.js";import"./UserBadge-BNLsVG6W.js";import"./useUserBundle-C0wQg83z.js";import"./SkeletonTable-DPwFQSrG.js";import"./MenuItem-CNJlFnXk.js";import"./Card-BWa2aTBm.js";import"./Chip-Cnnt6mV5.js";import"./Select-aab027f3.esm-D_t_k9rN.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-ChOHTGmA.js";import"./TeamBadge-CKCsSXXH.js";import"./SkeletonButton-yGLAaBDC.js";import"./SkeletonInlineBlock-BSKjVSEt.js";import"./SkeletonParagraph-keiL0wvn.js";import"./IconSvgButton-0Sw2cIWZ.js";import"./FormControlLabel-DNMuLHGQ.js";import"./Checkbox-CN0utVK2.js";import"./SwitchBase-CYkmB97X.js";import"./useUpdateAcl-BPURmTcE.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
