import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-D5fi-UCI.js";import{A as i}from"./AccessRequirementAclEditor-DY0j5wBJ.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-1DEUDwY-.js";import"./index-B56RpF6G.js";import"./_baseOrderBy-413dCsCn.js";import"./_baseIteratee-BYNmJDpT.js";import"./_baseMap-CzQRQ99N.js";import"./_baseEach-M2k7E20T.js";import"./useInfiniteQuery-CAh9MY-H.js";import"./AclEditor-C5hBp6gp.js";import"./UserSearchBoxV2-Vz_mb9pV.js";import"./useDebouncedEffect-kNLZZstO.js";import"./use-deep-compare-effect.esm-BWtN82-j.js";import"./uniq-ogPogOOm.js";import"./without-BynlM_bG.js";import"./UserBadge-jQHV7PcE.js";import"./useUserBundle-BCRG-aLd.js";import"./SkeletonTable-BVeoay1H.js";import"./MenuItem-CoEJZbDJ.js";import"./Card-Bv9h-IG_.js";import"./Chip-B5Ta4kZT.js";import"./Select-aab027f3.esm-cgdqOhFp.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-_biin1UU.js";import"./TeamBadge-D-QktPdC.js";import"./SkeletonButton-NAUvRsI1.js";import"./SkeletonInlineBlock-C_oItAmZ.js";import"./SkeletonParagraph-DOydOX8X.js";import"./IconSvgButton-CN2u90Eb.js";import"./FormControlLabel-DjIggnZV.js";import"./Checkbox-VXABpiEI.js";import"./SwitchBase-CKR_n_OU.js";import"./useUpdateAcl-C85nu9q7.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
