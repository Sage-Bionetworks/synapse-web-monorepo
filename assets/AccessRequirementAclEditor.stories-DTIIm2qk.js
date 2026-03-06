import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-C0ar5Nzr.js";import{A as i}from"./AccessRequirementAclEditor-DYj-O_8Q.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BVj3I2a5.js";import"./index-BR-nFAVn.js";import"./_baseOrderBy-CBNWoKdz.js";import"./_baseIteratee-FxvFjaQU.js";import"./_baseMap-D6NlnIJT.js";import"./_baseEach-C_xB0_wl.js";import"./useInfiniteQuery-648_I8si.js";import"./AclEditor-9cXT9Yr2.js";import"./UserSearchBoxV2-CrJPdaR0.js";import"./useDebouncedEffect-DfvXs5CU.js";import"./use-deep-compare-effect.esm-DBpzWEPh.js";import"./uniq-COLEKZdC.js";import"./without-CpNxXjr9.js";import"./UserBadge-C9kxKIBU.js";import"./useUserBundle-DBMlukq6.js";import"./SkeletonTable-4Tdh8Kss.js";import"./MenuItem-C89nEhr5.js";import"./Card-C6t8Ijbj.js";import"./Chip-CFPpkp1B.js";import"./Select-aab027f3.esm-Crh1DC3x.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-B5oDR2x3.js";import"./TeamBadge-CkbhFm-i.js";import"./SkeletonButton-DLomeGvI.js";import"./SkeletonInlineBlock-sY9elCWZ.js";import"./SkeletonParagraph-Cu2Z5Jdt.js";import"./IconSvgButton-CNX55rFq.js";import"./FormControlLabel-C0kLsFRC.js";import"./Checkbox-Dmy4xA5K.js";import"./SwitchBase-P5zO0V1P.js";import"./useUpdateAcl-CGgdmW98.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
