import{g as c,a as p,M as E,r as n,j as e,B as R,P as u,b as o,c as A}from"./iframe-Bvh78Lip.js";import{A as i}from"./AccessRequirementAclEditor-CXBERpwH.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BtrKoIEU.js";import"./index-C5Az4rP9.js";import"./_baseOrderBy-Dpgrbaku.js";import"./_baseIteratee-CMAOpFF8.js";import"./_baseMap-Ba9XjSMD.js";import"./_baseEach-BEegoy1c.js";import"./useQueries-C_spzrWe.js";import"./useInfiniteQuery-Bs48Hq-k.js";import"./AclEditor-ByjAqO1i.js";import"./UserSearchBoxV2-ClY2XnBE.js";import"./useDebouncedEffect-Dr4MLt1r.js";import"./use-deep-compare-effect.esm-CFBLIdQm.js";import"./uniq-BLdVdnGW.js";import"./without-DhzvtXMG.js";import"./UserBadge-C91cu101.js";import"./useUserBundle-EnZFVQAK.js";import"./useSuspenseQuery-Bos4-4YQ.js";import"./SkeletonTable-CLqiC9iF.js";import"./MenuItem-CDGWVe-G.js";import"./Card-Bm2XEhIM.js";import"./Chip-BCnYHX9c.js";import"./Select-aab027f3.esm-DNHmillR.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CvJFA2d7.js";import"./TeamBadge-DgvY-lIb.js";import"./SkeletonButton-3kp2DVDd.js";import"./SkeletonInlineBlock-ferE3Pfl.js";import"./SkeletonParagraph-D3tb0h1Y.js";import"./IconSvgButton-BrSTTBcY.js";import"./FormControlLabel-Clz1cXB5.js";import"./Checkbox-pmNlMftZ.js";import"./SwitchBase-CLePCnig.js";import"./useUpdateAcl-1PzzYeHk.js";const re={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=n.useState(!1),m=n.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),m.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
