import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-BEF4MEGo.js";import{A as i}from"./AccessRequirementAclEditor-CDmxXUeR.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B0-4Za3Z.js";import"./index-CPBFcEpw.js";import"./_baseOrderBy-ClP2j4Ii.js";import"./_baseIteratee-HJwSZeSD.js";import"./_baseMap-BNCMHn69.js";import"./_baseEach-DFsFxJY1.js";import"./useInfiniteQuery-DIn0P7iw.js";import"./AclEditor-De7lYvaz.js";import"./UserSearchBoxV2-B4xNPBMt.js";import"./useDebouncedEffect-BmYoesLn.js";import"./use-deep-compare-effect.esm-Jr4uTSBk.js";import"./uniq-BKv1Vzad.js";import"./without-D3NBcYVN.js";import"./UserBadge-Du1rJukw.js";import"./useUserBundle-BSq5yoVT.js";import"./SkeletonTable-B7lcCt2v.js";import"./MenuItem-kdifhyeS.js";import"./Card-CqODmY2j.js";import"./Chip-Cww2ggjY.js";import"./Select-aab027f3.esm-CxrIXDaY.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CJYk2xF_.js";import"./TeamBadge-DPfeSb1U.js";import"./SkeletonButton-DtUWEjyN.js";import"./SkeletonInlineBlock-B_sSYUYb.js";import"./SkeletonParagraph-kmlFPk4O.js";import"./IconSvgButton-BjoAn1Ht.js";import"./FormControlLabel-B2UUG1VG.js";import"./Checkbox-BoENjelX.js";import"./SwitchBase-DfgA2tSv.js";import"./useUpdateAcl-DrYM3jIJ.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
