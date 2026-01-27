import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-IkK4rSOB.js";import{A as i}from"./AccessRequirementAclEditor-D0usOvob.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B8mi3H00.js";import"./index-C-PIi4pT.js";import"./_baseOrderBy-BK9Xz-Wr.js";import"./_baseIteratee-644iAwmQ.js";import"./_baseMap-BECXTj-9.js";import"./_baseEach-Fi0_Zvy9.js";import"./useQueries-CdqItZda.js";import"./useInfiniteQuery-CRXPq4a_.js";import"./AclEditor-TyEVKagN.js";import"./UserSearchBoxV2-mWRrtBFH.js";import"./useDebouncedEffect-D0PLIQV1.js";import"./use-deep-compare-effect.esm-HzytTlMi.js";import"./uniq-BC73tWfP.js";import"./without-BSmaCH6T.js";import"./UserBadge-BZHK3KZB.js";import"./useUserBundle-B3YXjSMX.js";import"./useSuspenseQuery-D8qvYmV_.js";import"./SkeletonTable-CHtYHCYt.js";import"./MenuItem-BoKeqqou.js";import"./Card-bxb7eLCy.js";import"./Chip-Bi8EBQgs.js";import"./Select-aab027f3.esm-BYJAn0ql.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BFX7lUx2.js";import"./TeamBadge-CiT6UBWv.js";import"./SkeletonButton-CzqxZow7.js";import"./SkeletonInlineBlock-CUWgPSJQ.js";import"./SkeletonParagraph-Ckq6DzI_.js";import"./IconSvgButton-Bn2VAPQY.js";import"./FormControlLabel-CRMi7S1V.js";import"./Checkbox-PFFjq1hC.js";import"./SwitchBase-BjEUr9ck.js";import"./useUpdateAcl-bsT23RZp.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
