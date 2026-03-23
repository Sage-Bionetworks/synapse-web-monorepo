import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-pozrfGX9.js";import{A as i}from"./AccessRequirementAclEditor-O91hdEL0.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-fBMjbIHK.js";import"./index-DK5SCnFS.js";import"./_baseOrderBy-BYJW5QEN.js";import"./_baseIteratee-CPEDkU6I.js";import"./_baseMap-CrtdhqL2.js";import"./_baseEach-BSpAmI0c.js";import"./useInfiniteQuery-BoWyfOQx.js";import"./AclEditor-BKsMZxMe.js";import"./UserSearchBoxV2-BoI1HIqu.js";import"./useDebouncedEffect-CM6m6oV_.js";import"./use-deep-compare-effect.esm-B7gtu2hA.js";import"./uniq-BPYZNo6X.js";import"./without-B2jwXaCQ.js";import"./UserBadge-DNs5g3Fi.js";import"./useUserBundle-dJrxo5eU.js";import"./SkeletonTable-B877ikOr.js";import"./MenuItem-CtrC7AXY.js";import"./Card-CdSoIgQr.js";import"./Chip-SQ2CRNke.js";import"./Select-aab027f3.esm-DGgIVoDS.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CEvOFGxN.js";import"./TeamBadge-DPj3X9R-.js";import"./SkeletonButton-BVG9V-0l.js";import"./SkeletonInlineBlock-COIr5uPh.js";import"./SkeletonParagraph-QqDrbm_v.js";import"./IconSvgButton-BsaDEbv7.js";import"./FormControlLabel-Dx6ulEoT.js";import"./Checkbox-aXQ8w9JS.js";import"./SwitchBase-0kMqfIa2.js";import"./useUpdateAcl-Dn4tfMHC.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
