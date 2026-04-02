import{M as E,g as c,a as o,b as p,c as R,r as m,j as e,B as u,P as A}from"./iframe-DW4EtDFR.js";import{A as i}from"./AccessRequirementAclEditor-BVhSO56Z.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Bx-a7XZ6.js";import"./index-BLzBB5Yr.js";import"./_baseOrderBy-BtuaxwW1.js";import"./_baseIteratee-B5nmCdgY.js";import"./_baseMap-j4TtnkBh.js";import"./_baseEach-DJgCo8iQ.js";import"./useInfiniteQuery-ZPKFav0H.js";import"./AclEditor-CvJUN5S2.js";import"./UserSearchBoxV2-qrLgBU6m.js";import"./useDebouncedEffect-CjPG4ax-.js";import"./use-deep-compare-effect.esm-D866EjLt.js";import"./uniq-BIBkykeI.js";import"./without-DnE8OcVf.js";import"./UserBadge-BDGrhvHF.js";import"./useUserBundle-0eDzSDJE.js";import"./SkeletonTable-ItfNMNmd.js";import"./MenuItem-Cc9sDD7i.js";import"./Card-C9YZLq29.js";import"./Chip-CUP-lTls.js";import"./Select-aab027f3.esm-D_ciEZ4i.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BEQSN6p-.js";import"./TeamBadge-Rwvpw6hT.js";import"./SkeletonButton-DsCjZbv1.js";import"./SkeletonInlineBlock-ItfWjoQ8.js";import"./SkeletonParagraph-B74Z-tR5.js";import"./IconSvgButton-CmcnDmMA.js";import"./FormControlLabel-D6ErXhmT.js";import"./Checkbox-DrHdzPHL.js";import"./SwitchBase-DzaBh5YX.js";import"./useUpdateAcl-GoASlZcR.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(A,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(R)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
