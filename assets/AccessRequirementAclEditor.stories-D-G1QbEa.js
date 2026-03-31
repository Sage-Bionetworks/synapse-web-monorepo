import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-DI5oOWnE.js";import{A as i}from"./AccessRequirementAclEditor-Cs2ajJv_.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-D4Y9E4e8.js";import"./index-CS5gCP_E.js";import"./_baseOrderBy-B1wahwza.js";import"./_baseIteratee-DqpkiyQF.js";import"./_baseMap-Dju9eJVG.js";import"./_baseEach-BgfcCDwM.js";import"./useInfiniteQuery-BxuX-z1J.js";import"./AclEditor-CNGXjyLV.js";import"./UserSearchBoxV2-CzkvlLmo.js";import"./useDebouncedEffect-YCsbrbTX.js";import"./use-deep-compare-effect.esm-BlARVJqo.js";import"./uniq-maDaqVgj.js";import"./without-xTDGl7fh.js";import"./UserBadge-mbKgPEmt.js";import"./useUserBundle-6iTYX9he.js";import"./SkeletonTable-h5dOlVIm.js";import"./MenuItem-BZc7CYee.js";import"./Card-DUullsi7.js";import"./Chip-CmH7z8y-.js";import"./Select-aab027f3.esm-CcO9Gb3N.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-D-75-SlP.js";import"./TeamBadge-DHwJG_xH.js";import"./SkeletonButton-CwiRfCnX.js";import"./SkeletonInlineBlock-5UtZsnHV.js";import"./SkeletonParagraph-JG7mPZxB.js";import"./IconSvgButton-yjW-IKL2.js";import"./FormControlLabel-BG_p1zhf.js";import"./Checkbox-j3vYPN6O.js";import"./SwitchBase-chH9wrOw.js";import"./useUpdateAcl-DNhVnpVJ.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
