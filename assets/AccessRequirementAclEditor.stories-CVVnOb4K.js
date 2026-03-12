import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-CmEjpYjv.js";import{A as i}from"./AccessRequirementAclEditor-DyyCcpAy.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CKXYQBA8.js";import"./index-B-jXi1gZ.js";import"./_baseOrderBy-8phUcbsr.js";import"./_baseIteratee-CS8N1y30.js";import"./_baseMap-D09G1GiS.js";import"./_baseEach-vhChnq9U.js";import"./useInfiniteQuery-Dpi_kcjt.js";import"./AclEditor-COK11h7v.js";import"./UserSearchBoxV2-Dko3hWuE.js";import"./useDebouncedEffect-00Khpt0p.js";import"./use-deep-compare-effect.esm-C7DLUob9.js";import"./uniq-DyWyuFR0.js";import"./without--7B1cn3e.js";import"./UserBadge-IXxI5MWL.js";import"./useUserBundle-BHQhULZq.js";import"./SkeletonTable-Bui1t3TM.js";import"./MenuItem-Se_d39CR.js";import"./Card-B7An1bxy.js";import"./Chip-DSdtXjpn.js";import"./Select-aab027f3.esm-CT2v7oQr.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DWFMprp_.js";import"./TeamBadge-DjReZOmy.js";import"./SkeletonButton-DlNsrAb3.js";import"./SkeletonInlineBlock-CbyXGVtN.js";import"./SkeletonParagraph-CQ6ji8az.js";import"./IconSvgButton--gNsza1e.js";import"./FormControlLabel-aij-wBjY.js";import"./Checkbox-BUXb2CI0.js";import"./SwitchBase-DeEYy5YV.js";import"./useUpdateAcl-BF918_df.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
