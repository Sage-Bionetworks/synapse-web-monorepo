import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-CaOcC-hf.js";import{A as i}from"./AccessRequirementAclEditor-vaD1lnUr.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DIAzDHFU.js";import"./index-DGAj4kvP.js";import"./_baseOrderBy-DPMMd0k9.js";import"./_baseIteratee-CnGLSoYc.js";import"./_baseMap-DQ2Ub_HZ.js";import"./_baseEach-DGJRiyKO.js";import"./useQueries-DwQcF1rT.js";import"./useInfiniteQuery-DsHtYM7m.js";import"./AclEditor-DfRF16Sr.js";import"./UserSearchBoxV2-iTRPit4b.js";import"./useDebouncedEffect-BndS4jSX.js";import"./use-deep-compare-effect.esm-fXqDiM5e.js";import"./uniq-CMIq24Kg.js";import"./without-mgekjG79.js";import"./UserBadge-BkOupbtC.js";import"./useUserBundle-Dyiy-2qt.js";import"./useSuspenseQuery-D6gXheFj.js";import"./SkeletonTable-BGTjeLmw.js";import"./MenuItem-BUoZ5k6v.js";import"./Card-CpYJILgz.js";import"./Chip-B_m5Zg1D.js";import"./Select-aab027f3.esm-DIlYLWDx.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-Bc306Ybt.js";import"./TeamBadge-C9LBQNlY.js";import"./SkeletonButton-C1Ne2e4S.js";import"./SkeletonInlineBlock-CXC8p12o.js";import"./SkeletonParagraph-DlGa_aoP.js";import"./IconSvgButton-Vv2zkbkI.js";import"./FormControlLabel-C2Rm-ZU_.js";import"./Checkbox-wHAkxbLY.js";import"./SwitchBase-19wbeUii.js";import"./useUpdateAcl-CoCxDYGI.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
