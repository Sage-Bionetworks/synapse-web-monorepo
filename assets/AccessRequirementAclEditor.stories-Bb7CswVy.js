import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-BmEDGyjb.js";import{A as i}from"./AccessRequirementAclEditor-D14v_TXp.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BeJHirEK.js";import"./index-95w8b1hR.js";import"./_baseOrderBy-CgfTDg7z.js";import"./_baseIteratee-DaFZjSQq.js";import"./_baseMap-g_RvZdBZ.js";import"./_baseEach-D0lChX0L.js";import"./useInfiniteQuery-BckXm8pp.js";import"./AclEditor-BO6e-6We.js";import"./UserSearchBoxV2-Cs1N-Cdp.js";import"./useDebouncedEffect-CAcOtDgR.js";import"./use-deep-compare-effect.esm-BKzENA5E.js";import"./uniq-BS1rMeBr.js";import"./without-BYA_Mnyb.js";import"./UserBadge-DNIzxmqc.js";import"./useUserBundle-Cd1kVc-i.js";import"./SkeletonTable-DO7dretU.js";import"./MenuItem-BK2EpW1E.js";import"./Card-CYKT739R.js";import"./Chip-COc0F3aL.js";import"./Select-aab027f3.esm-DON8waLJ.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DIUuZOau.js";import"./TeamBadge-9MrGYgq4.js";import"./SkeletonButton-Dqpl9ltR.js";import"./SkeletonInlineBlock-gJQ0GVFi.js";import"./SkeletonParagraph-BB_2QaC-.js";import"./IconSvgButton-DdLgNgJ-.js";import"./FormControlLabel-BmQ6KfaB.js";import"./Checkbox-iF1AD3Pq.js";import"./SwitchBase-D5o4ldYs.js";import"./useUpdateAcl-Dcy4uqd0.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
