import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-DtOCV9ZO.js";import{A as i}from"./AccessRequirementAclEditor-Daqi2S6W.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CnF7zoc9.js";import"./index-CtezEvjc.js";import"./_baseOrderBy-Bbv9ZUQX.js";import"./_baseIteratee-BeERohTt.js";import"./_baseMap-CPsPgwJJ.js";import"./_baseEach-Cu1g2duW.js";import"./useQueries-6xM6HhA6.js";import"./useInfiniteQuery-BrzIGqoa.js";import"./AclEditor-KvS6FQEY.js";import"./UserSearchBoxV2-D-pR9isa.js";import"./useDebouncedEffect-B9F524Qh.js";import"./use-deep-compare-effect.esm-BtvNeIL9.js";import"./uniq-DZ1P1ajM.js";import"./without-DKw0A8ap.js";import"./UserBadge-_qm-t3iK.js";import"./useUserBundle-DsiIiz9w.js";import"./useSuspenseQuery-SVjMJt8R.js";import"./SkeletonTable-DpWsxm1f.js";import"./MenuItem-BuDWfjYg.js";import"./Card-D-t8GO5w.js";import"./Chip-Br7md4nX.js";import"./Select-aab027f3.esm-DqtTF3IF.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CANpISgL.js";import"./TeamBadge-A2BWui1D.js";import"./SkeletonButton-BW-Av5i1.js";import"./SkeletonInlineBlock-CzzA0rkX.js";import"./SkeletonParagraph-BvB6yuWG.js";import"./IconSvgButton-DUdXgWUk.js";import"./FormControlLabel-ySuzlJSZ.js";import"./Checkbox-DjdRQ8d3.js";import"./SwitchBase-7rd93fjV.js";import"./useUpdateAcl--ZXRRTbv.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
