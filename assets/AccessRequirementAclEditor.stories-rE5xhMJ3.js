import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-dqn_o-j7.js";import{A as i}from"./AccessRequirementAclEditor-AGTVpVwN.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CEQBStN4.js";import"./index-TRDYm8vi.js";import"./_baseOrderBy-BNQJqp4U.js";import"./_baseIteratee-DkHLs-Ky.js";import"./_baseMap-WOv2-e8c.js";import"./_baseEach-DFZUyRJV.js";import"./useQueries-DJtgD_ZA.js";import"./useInfiniteQuery-CgM25XWi.js";import"./AclEditor-CyhImT6J.js";import"./UserSearchBoxV2-CzD8ZjtN.js";import"./useDebouncedEffect-DoHKil_D.js";import"./use-deep-compare-effect.esm-CzfFsmDN.js";import"./uniq-BUywUvXJ.js";import"./without-DIFp6bye.js";import"./UserBadge-BAsSKXtF.js";import"./useUserBundle-Bwl8g-Om.js";import"./useSuspenseQuery-BB8-jlr0.js";import"./SkeletonTable-8ejcRdZg.js";import"./MenuItem-BOJ2Kk2Z.js";import"./Card-BpyeYfNX.js";import"./Chip-CFttJTcb.js";import"./Select-aab027f3.esm-DgwVhxyM.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CUDc9mGs.js";import"./TeamBadge-BYleEiwn.js";import"./SkeletonButton-B8uw_n6q.js";import"./SkeletonInlineBlock-nI55AVgz.js";import"./SkeletonParagraph-DUPitNKo.js";import"./IconSvgButton-DN-Uwwb6.js";import"./FormControlLabel-BpzhFtV1.js";import"./Checkbox-yynwhYBf.js";import"./SwitchBase-BP-8papi.js";import"./useUpdateAcl-07XnH9_u.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
