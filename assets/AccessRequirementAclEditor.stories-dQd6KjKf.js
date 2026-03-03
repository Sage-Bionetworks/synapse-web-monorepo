import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-DfdWKLuQ.js";import{A as i}from"./AccessRequirementAclEditor-DH_D6y-G.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-D1eSOeAC.js";import"./index-DlfLpHsv.js";import"./_baseOrderBy-DqhbtYPP.js";import"./_baseIteratee-ia3s08Hl.js";import"./_baseMap-UfbSF71S.js";import"./_baseEach-IGzmzClt.js";import"./useInfiniteQuery-CHkRkowF.js";import"./AclEditor-Bsft-7oE.js";import"./UserSearchBoxV2-klq2G-UL.js";import"./useDebouncedEffect-BTrNW3gl.js";import"./use-deep-compare-effect.esm-BkM0OYXx.js";import"./uniq-sDeDreTb.js";import"./without-zEOWz5l0.js";import"./UserBadge-CCI5HOlo.js";import"./useUserBundle-7JcHSU6U.js";import"./SkeletonTable-D3TOZVyi.js";import"./MenuItem-Q13c39O4.js";import"./Card-BIQF_LNz.js";import"./Chip-Dty2JNCX.js";import"./Select-aab027f3.esm-CcQT3t-7.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CMcSWIv1.js";import"./TeamBadge-DB4CROO8.js";import"./SkeletonButton-JUuEaAKJ.js";import"./SkeletonInlineBlock-D4AECgOc.js";import"./SkeletonParagraph-Dis-ZodA.js";import"./IconSvgButton-18f-t0lz.js";import"./FormControlLabel-pZPKWJmG.js";import"./Checkbox-Dj9Jd6iZ.js";import"./SwitchBase-DT6HJlt8.js";import"./useUpdateAcl-BNuTOExJ.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
