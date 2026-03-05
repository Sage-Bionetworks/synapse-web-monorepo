import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-Bppf-2Xb.js";import{A as i}from"./AccessRequirementAclEditor-BzvKju7l.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Dzw2qzMw.js";import"./index-Cee3WZrY.js";import"./_baseOrderBy-drfuHX7W.js";import"./_baseIteratee-1VZeL6zj.js";import"./_baseMap-Cd31eUCi.js";import"./_baseEach-1yxKPV3_.js";import"./useInfiniteQuery-B_o5exK7.js";import"./AclEditor-B-Z9j2DE.js";import"./UserSearchBoxV2-BFfzMLmA.js";import"./useDebouncedEffect-d5GNCBwX.js";import"./use-deep-compare-effect.esm-BA26f4Nj.js";import"./uniq-B_jSDjY0.js";import"./without-QRfP1Leo.js";import"./UserBadge-2pt_JFzf.js";import"./useUserBundle-Bz68MuAV.js";import"./SkeletonTable-BMvof9lJ.js";import"./MenuItem-BorCkjPg.js";import"./Card-SKsRnOG3.js";import"./Chip-B-8xLvKL.js";import"./Select-aab027f3.esm-N5KG0lJq.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-hhw3uThl.js";import"./TeamBadge-0kr4JVtT.js";import"./SkeletonButton-BFle63Mn.js";import"./SkeletonInlineBlock-DZgUMGJu.js";import"./SkeletonParagraph-Cgi3RpEx.js";import"./IconSvgButton-BaDHlMWN.js";import"./FormControlLabel-C6SYwhBq.js";import"./Checkbox-KFSiL-LF.js";import"./SwitchBase-Cos52nG1.js";import"./useUpdateAcl-5Vt00wOY.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
