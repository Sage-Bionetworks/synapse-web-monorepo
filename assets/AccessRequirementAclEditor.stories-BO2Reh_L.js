import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-z21gSILm.js";import{A as i}from"./AccessRequirementAclEditor-CL5AF1ed.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BkOw6L9o.js";import"./index-BRmRy84u.js";import"./_baseOrderBy-BuzTgFRM.js";import"./_baseIteratee-K4gGkGhX.js";import"./_baseMap-9TWFIhh_.js";import"./_baseEach-BjqsPzRj.js";import"./useQueries-BqopBRXG.js";import"./useInfiniteQuery-DViYzGwW.js";import"./AclEditor-C882Gff2.js";import"./UserSearchBoxV2-wpbFbrPT.js";import"./useDebouncedEffect-C2xmHJOv.js";import"./use-deep-compare-effect.esm-BLtmLhJ_.js";import"./uniq-wtN09MDV.js";import"./without-CFqHfsmS.js";import"./UserBadge-nSpluHjM.js";import"./useUserBundle-Bi_03OP-.js";import"./useSuspenseQuery-BDbBJqHo.js";import"./SkeletonTable-HmkSCDv0.js";import"./MenuItem-BqzvmG8S.js";import"./Card-BBNGqpZ7.js";import"./Chip-rCXgsppD.js";import"./Select-aab027f3.esm-WxeQxST3.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-VdPS--Jh.js";import"./TeamBadge-BzHjl8o1.js";import"./SkeletonButton-Q38ELWwJ.js";import"./SkeletonInlineBlock-DuFis4qM.js";import"./SkeletonParagraph-DwVqH0kg.js";import"./IconSvgButton-BMjSJCzB.js";import"./FormControlLabel-CHgCz5PK.js";import"./Checkbox-BzxLKyOz.js";import"./SwitchBase-hDliWsMw.js";import"./useUpdateAcl-DOMlqVl7.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
