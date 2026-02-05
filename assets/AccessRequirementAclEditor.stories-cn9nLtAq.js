import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-CS-qe6F5.js";import{A as i}from"./AccessRequirementAclEditor-BG2KWkZF.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-dXP3fsXx.js";import"./index-DshQ37pH.js";import"./_baseOrderBy-CVJcvRpU.js";import"./_baseIteratee-Bajx_U4R.js";import"./_baseMap-CCpY8ocF.js";import"./_baseEach-B_Uh_NTp.js";import"./useQueries-DFD7lTHh.js";import"./useInfiniteQuery-CgiD7N7J.js";import"./AclEditor-rjQ8WYv0.js";import"./UserSearchBoxV2-BOVbwRJK.js";import"./useDebouncedEffect-vmqQtGA7.js";import"./use-deep-compare-effect.esm-CleOU24F.js";import"./uniq-BiXysGL5.js";import"./without-DhZEKDqd.js";import"./UserBadge-CPqjkhqx.js";import"./useUserBundle-BGH5snWH.js";import"./useSuspenseQuery-CKSmV4Hq.js";import"./SkeletonTable-BzgRcoI4.js";import"./MenuItem-BPeQWsLy.js";import"./Card-Dq8qCxDo.js";import"./Chip-CoY3YmCv.js";import"./Select-aab027f3.esm-Bqo-zSmT.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-3bEfhsgI.js";import"./TeamBadge-D7QbpNTd.js";import"./SkeletonButton-B9T2RRww.js";import"./SkeletonInlineBlock-BdSvJBN8.js";import"./SkeletonParagraph-B9Sr-CD_.js";import"./IconSvgButton-Dr1BVoLO.js";import"./FormControlLabel-Cva61uz-.js";import"./Checkbox-B1DJC-Zw.js";import"./SwitchBase-C9mMDdEY.js";import"./useUpdateAcl-3a6eApiR.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
