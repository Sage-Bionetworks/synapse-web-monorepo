import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-Djf1Gvja.js";import{A as i}from"./AccessRequirementAclEditor-Cx3Egdvy.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-FnBi4e9-.js";import"./index-CikzIJLj.js";import"./_baseOrderBy-C4CfGZuR.js";import"./_baseIteratee-_uY9ZW-D.js";import"./_baseMap-Bzv9jpIq.js";import"./_baseEach-BH2Ai-LR.js";import"./useQueries-9xKPn1nl.js";import"./useInfiniteQuery-pHCKipg_.js";import"./AclEditor-DXlqfOjb.js";import"./useRealmPrincipals-BkEJrudp.js";import"./UserSearchBoxV2-DaBtSdG5.js";import"./useDebouncedEffect-DTRbVrFa.js";import"./use-deep-compare-effect.esm-BtBK50_F.js";import"./uniq-BuI1ZZDG.js";import"./without-DPmGw91u.js";import"./UserBadge-CHqh5HJA.js";import"./useUserBundle-CRYenpVP.js";import"./useSuspenseQuery-DqFkurJD.js";import"./SkeletonTable-CUnfVmXh.js";import"./MenuItem-DLvW-sib.js";import"./Card-DDfvoBrM.js";import"./Chip-DiNFVAcb.js";import"./Select-aab027f3.esm-7wwj7zon.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CIR1lEs7.js";import"./TeamBadge-DYJih9SH.js";import"./SkeletonButton-D5sJL5B9.js";import"./SkeletonInlineBlock-CSkbk-eL.js";import"./SkeletonParagraph-nhe0tvw8.js";import"./IconSvgButton-ClY3S7FW.js";import"./FormControlLabel-Y2KZ_0l1.js";import"./Checkbox-D2g6Xz4p.js";import"./SwitchBase-DchgHDNt.js";import"./useUpdateAcl-Db6ckVAC.js";const se={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
