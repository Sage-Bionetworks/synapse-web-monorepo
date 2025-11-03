import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-Dz8P-dI2.js";import{A as c}from"./AccessRequirementAclEditor-DT8nD4mp.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-C4iEXKd1.js";import"./index-BXaeJfK5.js";import"./_baseOrderBy-ChA-uXmN.js";import"./_baseIteratee-PAFQZt6W.js";import"./_baseMap-CIKcJdN5.js";import"./_baseEach-CucG64Iw.js";import"./useQueries-Dblxfsni.js";import"./useInfiniteQuery-C8P6ajVv.js";import"./AclEditor-X4WsoZdt.js";import"./UserSearchBoxV2-BtghZ0wZ.js";import"./useDebouncedEffect-DK49tbEt.js";import"./use-deep-compare-effect.esm-Dnjq1VY6.js";import"./uniq-B4CkjmWE.js";import"./without-N0-FNHx8.js";import"./UserBadge-Bv1QVAAu.js";import"./SkeletonTable-s01CyjIZ.js";import"./MenuItem-MnHW3c-e.js";import"./Card-BxGgGoYt.js";import"./Chip-Cj9us3E8.js";import"./Select-aab027f3.esm-ArI-hnlb.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-8D3EJwIA.js";import"./TeamBadge-CCJFUw_x.js";import"./SkeletonButton-2qZCOB9B.js";import"./SkeletonInlineBlock-DU5NVTXg.js";import"./SkeletonParagraph-DjiISGk9.js";import"./IconSvgButton-D2E-Itiz.js";import"./FormControlLabel-U_2oimB5.js";import"./Checkbox-B47vyOHs.js";import"./SwitchBase-B9lWykMd.js";import"./useUpdateAcl-BVLEQSGA.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var E,R,u;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID)
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(u=(R=s.parameters)==null?void 0:R.docs)==null?void 0:u.source}}};var A,_,g;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602671'
  },
  parameters: {
    stack: 'development'
  }
}`,...(g=(_=t.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const ce=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,ce as __namedExportsOrder,ie as default};
