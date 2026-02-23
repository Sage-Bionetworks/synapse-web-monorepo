import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-81JeKJJY.js";import{A as i}from"./AccessRequirementAclEditor-c1WelZrc.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Bz_10GRb.js";import"./index-hxZfLxrn.js";import"./_baseOrderBy-BwCykfFi.js";import"./_baseIteratee-lj1Fn_3g.js";import"./_baseMap-D7XNcdNx.js";import"./_baseEach-BIYGB8bs.js";import"./useQueries-DsAAcLRN.js";import"./useInfiniteQuery-Du-dGdgl.js";import"./AclEditor-BPVfLbNp.js";import"./useRealmPrincipals-Bn3BDh6L.js";import"./UserSearchBoxV2-DUWdbHAg.js";import"./useDebouncedEffect-COz35I2-.js";import"./use-deep-compare-effect.esm-BdyvMGg8.js";import"./uniq-Brkggy5I.js";import"./without-BPZr3Efm.js";import"./UserBadge-C_ROUIr4.js";import"./useUserBundle-C7u0mSik.js";import"./useSuspenseQuery-CSCSqsGh.js";import"./SkeletonTable-CUpkK98S.js";import"./MenuItem-K-et9hkH.js";import"./Card-C2XPVAe2.js";import"./Chip-BUhAw0AO.js";import"./Select-aab027f3.esm-FIEEAPzE.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BwenCvE9.js";import"./TeamBadge-DAAmYP86.js";import"./SkeletonButton-DXhUVC8E.js";import"./SkeletonInlineBlock-D-xx-S6B.js";import"./SkeletonParagraph-c7JB1JZa.js";import"./IconSvgButton-Dv7WzsZp.js";import"./FormControlLabel-BaV3Om6I.js";import"./Checkbox-CHiOWLEM.js";import"./SwitchBase-D4AAeaOV.js";import"./useUpdateAcl-Dgvld1AJ.js";const se={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const te=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,te as __namedExportsOrder,se as default};
