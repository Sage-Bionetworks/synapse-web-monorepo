import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-C9XoSndX.js";import{A as i}from"./AccessRequirementAclEditor-BtmGN6BK.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B2chJyzz.js";import"./index-CkRaXIId.js";import"./_baseOrderBy-CoYfpbnm.js";import"./_baseIteratee-3cGLS7pB.js";import"./_baseMap-EIGS4Zuu.js";import"./_baseEach-DBoYfXEk.js";import"./useQueries-BPbcnnWt.js";import"./useInfiniteQuery-Jo0FHawD.js";import"./AclEditor-DPJ9-9RL.js";import"./UserSearchBoxV2-B9jRG4S9.js";import"./useDebouncedEffect-BXrTQlHg.js";import"./use-deep-compare-effect.esm-DidBFxLr.js";import"./uniq-D45FdU2B.js";import"./without-BDqwYttp.js";import"./UserBadge-BjmUf9sF.js";import"./useUserBundle-DccLYS0o.js";import"./useSuspenseQuery-OCydU3mN.js";import"./SkeletonTable-Dor9v2L-.js";import"./MenuItem-BtlH2e7k.js";import"./Card-D0mEAM9A.js";import"./Chip-DUl13jbe.js";import"./Select-aab027f3.esm-BwjYVd2L.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-b5QaqKT3.js";import"./TeamBadge-DdNYydHg.js";import"./SkeletonButton-CuEV4gB3.js";import"./SkeletonInlineBlock-By8cLyCE.js";import"./SkeletonParagraph-CP_Py8Yj.js";import"./IconSvgButton-CEv0b85B.js";import"./FormControlLabel-w7ae_cxd.js";import"./Checkbox-CnF1x21G.js";import"./SwitchBase-C3mSrvvZ.js";import"./useUpdateAcl-d_SLzsXH.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
