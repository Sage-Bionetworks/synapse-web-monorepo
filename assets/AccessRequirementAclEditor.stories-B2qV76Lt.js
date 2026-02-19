import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-05B79XZ4.js";import{A as i}from"./AccessRequirementAclEditor-BzjVkDVR.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-D8KrmOhE.js";import"./index-Daq82rHX.js";import"./_baseOrderBy-Go6U-7AU.js";import"./_baseIteratee-DXgMmV7G.js";import"./_baseMap-Y6mqOJtS.js";import"./_baseEach-DDJYCD3q.js";import"./useQueries-DXkCjI1X.js";import"./useInfiniteQuery-BL4rT7lo.js";import"./AclEditor-Bool52wE.js";import"./useRealmPrincipals-CjyVyGCP.js";import"./UserSearchBoxV2-DdHl4Hn4.js";import"./useDebouncedEffect-dJx6gLeH.js";import"./use-deep-compare-effect.esm-1sKVwYDA.js";import"./uniq-DLebYPQT.js";import"./without-CTlc1-G3.js";import"./UserBadge-CDJVlHlx.js";import"./useUserBundle-xFwWr3d6.js";import"./useSuspenseQuery-DXOpFrh-.js";import"./SkeletonTable-CUmGP5q5.js";import"./MenuItem-CVPsdyof.js";import"./Card-ejUAG1yu.js";import"./Chip-MTPGu8Dp.js";import"./Select-aab027f3.esm-CFbRzQx1.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-COfT8vtk.js";import"./TeamBadge-CO8-8NXt.js";import"./SkeletonButton-DSpQmtG3.js";import"./SkeletonInlineBlock-DysL0dN-.js";import"./SkeletonParagraph-CCYsd3b9.js";import"./IconSvgButton-GfgitZAo.js";import"./FormControlLabel-Bw9mk1Z6.js";import"./Checkbox-DMe8JDwK.js";import"./SwitchBase-a3tunUWH.js";import"./useUpdateAcl-DK1Dp4xV.js";const se={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
