import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-9Dp3veeu.js";import{A as i}from"./AccessRequirementAclEditor-DaivL6xD.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DLLm8Ex9.js";import"./index-SBatv29g.js";import"./_baseOrderBy-BAW_8EQV.js";import"./_baseIteratee-BdYCFxHU.js";import"./_baseMap-BE81D0D0.js";import"./_baseEach-CZKI3vcT.js";import"./useInfiniteQuery-Db6GiRYb.js";import"./AclEditor-DarR0B7O.js";import"./UserSearchBoxV2-CVQ_CSBc.js";import"./useDebouncedEffect-Csoh_NSa.js";import"./use-deep-compare-effect.esm-ARdEFuBi.js";import"./uniq-VUUwasH2.js";import"./without-L0_X9Am6.js";import"./UserBadge-Ct4ZfEmE.js";import"./useUserBundle-a5rfcdNm.js";import"./SkeletonTable-Cjl9F2Dt.js";import"./MenuItem-BJVfKgip.js";import"./Card--VJgiAYz.js";import"./Chip-gPffx778.js";import"./Select-aab027f3.esm-DvNNaR-p.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DBX5ht5y.js";import"./TeamBadge-B7smeN3E.js";import"./SkeletonButton-COK1UYfn.js";import"./SkeletonInlineBlock-BcYTxiw0.js";import"./SkeletonParagraph-Cn0395FS.js";import"./IconSvgButton-CMpGc_JS.js";import"./FormControlLabel-98dMFZJR.js";import"./Checkbox-C2Z84l4l.js";import"./SwitchBase-Cy2X8wXP.js";import"./useUpdateAcl-CjugjDUV.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
