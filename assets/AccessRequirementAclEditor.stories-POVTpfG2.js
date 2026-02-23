import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-OvMmZLQw.js";import{A as i}from"./AccessRequirementAclEditor-BjU5QFSY.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B3Xh28Ol.js";import"./index--E8oFEpF.js";import"./_baseOrderBy-DIkncgGP.js";import"./_baseIteratee-ByJHsXBB.js";import"./_baseMap-DqU8tWvx.js";import"./_baseEach-B6VA7Zf5.js";import"./useQueries-Bl6uHz3x.js";import"./useInfiniteQuery-8PVcqDIl.js";import"./AclEditor-BP3NTnR5.js";import"./useRealmPrincipals-DF5Jo9d5.js";import"./UserSearchBoxV2-7pdF0USr.js";import"./useDebouncedEffect-C8rfpcCv.js";import"./use-deep-compare-effect.esm-CXpco7o1.js";import"./uniq-Ds8tYlxg.js";import"./without-Cijc3Ck4.js";import"./UserBadge-D9HYZUx3.js";import"./useUserBundle-CBDFXWMp.js";import"./useSuspenseQuery-C4irymMN.js";import"./SkeletonTable-BYbIFMu2.js";import"./MenuItem-BWMN49kR.js";import"./Card-DE3tt8NQ.js";import"./Chip-mRnT2cVS.js";import"./Select-aab027f3.esm-B1vAodYH.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BQ-dmzvT.js";import"./TeamBadge-DuMGRwzg.js";import"./SkeletonButton-Cyy-yL2p.js";import"./SkeletonInlineBlock-DfEg9q_u.js";import"./SkeletonParagraph-DkLTjuRc.js";import"./IconSvgButton--C0JEYe2.js";import"./FormControlLabel-NCFeGzy8.js";import"./Checkbox-BpWdqwWg.js";import"./SwitchBase-DO28J9p4.js";import"./useUpdateAcl-bYgAHShw.js";const se={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
