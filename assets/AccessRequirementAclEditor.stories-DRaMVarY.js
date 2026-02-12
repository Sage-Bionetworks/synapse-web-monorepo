import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-Es1qDbGP.js";import{A as i}from"./AccessRequirementAclEditor-jFrt4xlm.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DYTw_Pge.js";import"./index-BV5A7KqH.js";import"./_baseOrderBy-BkGIHqcP.js";import"./_baseIteratee-mYcJ16Ig.js";import"./_baseMap-loH1m8zG.js";import"./_baseEach-C3zPdy9m.js";import"./useQueries-eWENE-QR.js";import"./useInfiniteQuery-COtoiiDm.js";import"./AclEditor-Btx35VeL.js";import"./UserSearchBoxV2-B1Ry4DpT.js";import"./useDebouncedEffect-CMaZ4kkY.js";import"./use-deep-compare-effect.esm-D9844x-7.js";import"./uniq-CDgyCgRb.js";import"./without-BPytMMUs.js";import"./UserBadge-CRnAPqN0.js";import"./useUserBundle-B6mxhG5s.js";import"./useSuspenseQuery-CeVxUvBp.js";import"./SkeletonTable-lZm0nrpb.js";import"./MenuItem-B-EqIPb7.js";import"./Card-DHB9ti2h.js";import"./Chip-BzTFnY_r.js";import"./Select-aab027f3.esm-D57G2gfj.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CCprrEwc.js";import"./TeamBadge-Di778wFl.js";import"./SkeletonButton-Dk6hA76Q.js";import"./SkeletonInlineBlock-ClWMeLhu.js";import"./SkeletonParagraph-DsApyNFa.js";import"./IconSvgButton-BaAkU5AA.js";import"./FormControlLabel-C69kwcak.js";import"./Checkbox-mvgsc4Yl.js";import"./SwitchBase-Blk8OzSk.js";import"./useUpdateAcl-B8emFIG5.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
