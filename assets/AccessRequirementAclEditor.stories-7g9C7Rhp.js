import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-CjPdK8o3.js";import{A as i}from"./AccessRequirementAclEditor-qqb6d8f5.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DzysjAS8.js";import"./index-DUxszvjk.js";import"./_baseOrderBy-BWPI49fO.js";import"./_baseIteratee-BgCPnYOG.js";import"./_baseMap-CI1anwhT.js";import"./_baseEach-Dk-toVaC.js";import"./useQueries-Dr4qOk9C.js";import"./useInfiniteQuery-CmFbqkY3.js";import"./AclEditor-BGyo6tq2.js";import"./UserSearchBoxV2-Bm9NNhUB.js";import"./useDebouncedEffect-CcOB3v3P.js";import"./use-deep-compare-effect.esm-BkU_Fele.js";import"./uniq-YistsObO.js";import"./without-CWNzqlMy.js";import"./UserBadge-B_i32c0J.js";import"./useUserBundle-Bny1QVf1.js";import"./useSuspenseQuery-B-tj7iZo.js";import"./SkeletonTable-Dem7Lpfl.js";import"./MenuItem-CjSnBCYE.js";import"./Card-Ebu0uYiu.js";import"./Chip-CTyQGhqc.js";import"./Select-aab027f3.esm-BPCgyOwu.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BNvmzAwZ.js";import"./TeamBadge-n2GSz0Pj.js";import"./SkeletonButton-DVgZ4_7g.js";import"./SkeletonInlineBlock-CpcOQN65.js";import"./SkeletonParagraph-BeVZ-sFG.js";import"./IconSvgButton-COnn9nUe.js";import"./FormControlLabel-BzzdnTQT.js";import"./Checkbox-CzkYRqat.js";import"./SwitchBase-K4adb_Dr.js";import"./useUpdateAcl-BmONctSy.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
