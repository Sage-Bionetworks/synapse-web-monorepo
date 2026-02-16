import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-D5Jb4H7-.js";import{A as i}from"./AccessRequirementAclEditor-Bvw1x9CL.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-C-6hKSKQ.js";import"./index-Q_YFCtqN.js";import"./_baseOrderBy-SdmGa5Wt.js";import"./_baseIteratee-HfADOLmS.js";import"./_baseMap-CBAREHGg.js";import"./_baseEach-CkgraRbj.js";import"./useQueries-DOSq_bEV.js";import"./useInfiniteQuery-mtij9nHQ.js";import"./AclEditor-cnnxCFWr.js";import"./UserSearchBoxV2-CDrL2IhN.js";import"./useDebouncedEffect-CVHaDEbp.js";import"./use-deep-compare-effect.esm-DXtDHnkH.js";import"./uniq-D-LBtm9m.js";import"./without-CbuVaYEE.js";import"./UserBadge-DVbiFxjq.js";import"./useUserBundle-B8Qf3-u2.js";import"./useSuspenseQuery-CJo7dxig.js";import"./SkeletonTable-CWnnOC4O.js";import"./MenuItem-BcAY2td_.js";import"./Card-DcE5VUZL.js";import"./Chip-BPCELKLJ.js";import"./Select-aab027f3.esm-BPefcjaS.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CeBvbA6J.js";import"./TeamBadge-SHh3dXIq.js";import"./SkeletonButton-C8q9GuK7.js";import"./SkeletonInlineBlock-B1J-x5sp.js";import"./SkeletonParagraph-1IqDxZQP.js";import"./IconSvgButton-DV6tsH0f.js";import"./FormControlLabel-lBjb8bgb.js";import"./Checkbox-BQnzTFlH.js";import"./SwitchBase-CdPFBs56.js";import"./useUpdateAcl-DkE4FoJ1.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
