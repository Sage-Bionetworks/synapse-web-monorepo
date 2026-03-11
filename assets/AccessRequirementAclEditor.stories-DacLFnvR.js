import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-Ds4ORbxM.js";import{A as i}from"./AccessRequirementAclEditor-CNBP9kar.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-xBZhOV58.js";import"./index-CIbrDib_.js";import"./_baseOrderBy-Dg5vJzPs.js";import"./_baseIteratee-XRZy9AD3.js";import"./_baseMap-G3nNbJZO.js";import"./_baseEach-CRUm181W.js";import"./useInfiniteQuery-BUNrVJri.js";import"./AclEditor-DYUPn8Ah.js";import"./UserSearchBoxV2-BlK2tLCu.js";import"./useDebouncedEffect-Y9LvXdYq.js";import"./use-deep-compare-effect.esm-CekS7ztG.js";import"./uniq-DyjfefYQ.js";import"./without-CBLvV4oP.js";import"./UserBadge-DIydxdUM.js";import"./useUserBundle-B0gA1M1H.js";import"./SkeletonTable-yOIpbiOB.js";import"./MenuItem-eFAVT6re.js";import"./Card-BsZHawsi.js";import"./Chip-DlFfjUFv.js";import"./Select-aab027f3.esm-DcqudM0x.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CfYy7w24.js";import"./TeamBadge-CaoIVutR.js";import"./SkeletonButton-Bz2oBDCo.js";import"./SkeletonInlineBlock-DDXMTXRx.js";import"./SkeletonParagraph-DV2rBoVm.js";import"./IconSvgButton-DX2lrPOv.js";import"./FormControlLabel-DYj3bqOy.js";import"./Checkbox-0qRrkAZY.js";import"./SwitchBase-APPDUZSw.js";import"./useUpdateAcl-XPLKbpxX.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
