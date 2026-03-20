import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-CDThL800.js";import{A as i}from"./AccessRequirementAclEditor-DtUeAxyD.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DqPM-gQd.js";import"./index-BZVSFT2Q.js";import"./_baseOrderBy-Bk20ImG4.js";import"./_baseIteratee-v5oFDp_8.js";import"./_baseMap-BzsjZ0ef.js";import"./_baseEach-C_MJJvSQ.js";import"./useInfiniteQuery-Cp7Kwu84.js";import"./AclEditor-BUhW96rx.js";import"./UserSearchBoxV2-CfCtDR8_.js";import"./useDebouncedEffect-CLQkJYNg.js";import"./use-deep-compare-effect.esm-DQCvkLpg.js";import"./uniq-CTtFpapF.js";import"./without-BPgmjnnI.js";import"./UserBadge-CfMPp4pO.js";import"./useUserBundle-Buy8yH5D.js";import"./SkeletonTable-CKMKjGQn.js";import"./MenuItem-DxhVkehk.js";import"./Card-BEiyf98S.js";import"./Chip-DKZciXua.js";import"./Select-aab027f3.esm-DwG9RMOa.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge--wNMDHMc.js";import"./TeamBadge-BC5Uz79b.js";import"./SkeletonButton-BWSz9WUF.js";import"./SkeletonInlineBlock-B-Z5JZ59.js";import"./SkeletonParagraph-DNn6pQr4.js";import"./IconSvgButton-Du86lyx4.js";import"./FormControlLabel-lFyHhGFK.js";import"./Checkbox-DVnkUkf8.js";import"./SwitchBase-DnYbE52r.js";import"./useUpdateAcl-D6AHMTK0.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const ee=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,ee as __namedExportsOrder,$ as default};
