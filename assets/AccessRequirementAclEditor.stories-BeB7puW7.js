import{M as E,g as c,a as o,b as p,c as R,r as m,j as e,B as u,P as A}from"./iframe-CxvUBa5Y.js";import{A as i}from"./AccessRequirementAclEditor-D-mDBXcn.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BSUBKTKZ.js";import"./index-C1Mm4JJE.js";import"./_baseOrderBy-DWYhZuiu.js";import"./_baseIteratee-D_GPTcqf.js";import"./_baseMap-DWDiPcEf.js";import"./_baseEach-BFcEHZkD.js";import"./useInfiniteQuery-BZm90861.js";import"./AclEditor-DRvZkmwS.js";import"./UserSearchBoxV2-BK-1Xexr.js";import"./useDebouncedEffect-CVJC6LPp.js";import"./use-deep-compare-effect.esm-DVCF_x2N.js";import"./uniq-C4hXfMbU.js";import"./without-DKOCKyBo.js";import"./UserBadge-CBzWW9-k.js";import"./useUserBundle-DzpyjFTE.js";import"./SkeletonTable-BIWVFjZB.js";import"./MenuItem-DuGrHJFB.js";import"./Card-BvmC2OsO.js";import"./Chip-CztKYxS2.js";import"./Select-aab027f3.esm-Dti64Nb-.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CzZYyJ7s.js";import"./TeamBadge-B7QBbYLp.js";import"./SkeletonButton-DyDLkSqK.js";import"./SkeletonInlineBlock-Bhdwhqi9.js";import"./SkeletonParagraph-D_UqSVhv.js";import"./IconSvgButton-DwEgnMNg.js";import"./FormControlLabel-BSBqVtPb.js";import"./Checkbox-CXn5HuEC.js";import"./SwitchBase-CVvjvYlh.js";import"./useUpdateAcl-DDGe8WDQ.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(A,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(R)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
