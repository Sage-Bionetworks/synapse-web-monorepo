import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-CV5uF1_e.js";import{A as i}from"./AccessRequirementAclEditor-B2erhZfa.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DYB9COxg.js";import"./index-Lq8AZYKI.js";import"./_baseOrderBy-CALcBExl.js";import"./_baseIteratee-DKiQefv_.js";import"./_baseMap-CndHGrEy.js";import"./_baseEach-BBarx7fo.js";import"./useQueries-NxuMdxZj.js";import"./useInfiniteQuery-oU30NX3B.js";import"./AclEditor-C2ACu1KU.js";import"./UserSearchBoxV2-BZMIRREA.js";import"./useDebouncedEffect-Cg31oXO1.js";import"./use-deep-compare-effect.esm-BeIpRdZO.js";import"./uniq-L1qv973h.js";import"./without-iK-b8OFb.js";import"./UserBadge-yVhGbWiX.js";import"./useUserBundle-9F9vUiBr.js";import"./useSuspenseQuery-CGczKAJn.js";import"./SkeletonTable-Dkaqgxy9.js";import"./MenuItem-BzuAhGLX.js";import"./Card-DCUNa1gA.js";import"./Chip-KBD8jJOF.js";import"./Select-aab027f3.esm-BlVyaPXS.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DnfNL1e_.js";import"./TeamBadge-C9O5iN2q.js";import"./SkeletonButton-CpwnNhlN.js";import"./SkeletonInlineBlock-CfS9comD.js";import"./SkeletonParagraph-CfoCBxY5.js";import"./IconSvgButton-9Jg3lvhE.js";import"./FormControlLabel-BDjFPPQX.js";import"./Checkbox-C2-C51xv.js";import"./SwitchBase-DGbLlKb7.js";import"./useUpdateAcl-bkFHuM0p.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
