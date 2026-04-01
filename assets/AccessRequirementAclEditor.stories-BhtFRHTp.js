import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-CvDTy6mw.js";import{A as i}from"./AccessRequirementAclEditor-B_CsN3qe.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CwI97v5c.js";import"./index-CEVa6roL.js";import"./_baseOrderBy-K23GPo6d.js";import"./_baseIteratee-UbmsfpzB.js";import"./_baseMap-Dx7SZYqg.js";import"./_baseEach-BIPt8TRr.js";import"./useInfiniteQuery-BDzyB6fR.js";import"./AclEditor-DX64LIMw.js";import"./UserSearchBoxV2-CUNMYMC8.js";import"./useDebouncedEffect-4Pg_5NNR.js";import"./use-deep-compare-effect.esm-1RezRivx.js";import"./uniq-BY_gCc0f.js";import"./without-CkkKUSja.js";import"./UserBadge-PoyEvAzl.js";import"./useUserBundle-Dj5B8O2o.js";import"./SkeletonTable-DjmsDm7y.js";import"./MenuItem-DnOuV5Bw.js";import"./Card-DQ_YpR0y.js";import"./Chip-DmppX2NC.js";import"./Select-aab027f3.esm-Bgyag4y5.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-18dJjlUD.js";import"./TeamBadge-B42xNwNw.js";import"./SkeletonButton-DrRqzwrL.js";import"./SkeletonInlineBlock-DRwNak6O.js";import"./SkeletonParagraph-DAWCny1c.js";import"./IconSvgButton-xzZbnVv-.js";import"./FormControlLabel-BBtghWJq.js";import"./Checkbox-D534fmQJ.js";import"./SwitchBase-JpV5kKh9.js";import"./useUpdateAcl-DNA3Hl0k.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
