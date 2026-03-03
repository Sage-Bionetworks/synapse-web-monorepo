import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-BkPHOFWj.js";import{A as i}from"./AccessRequirementAclEditor-DOiDVig5.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DqQWUE3-.js";import"./index-ZxbTHjgY.js";import"./_baseOrderBy-jU331Xzb.js";import"./_baseIteratee-DcTN9bCB.js";import"./_baseMap-BJs1A3zN.js";import"./_baseEach-v_Rhmx0E.js";import"./useInfiniteQuery-CnlPE4i8.js";import"./AclEditor-D9Bc4DK0.js";import"./UserSearchBoxV2-Cw0uWHxE.js";import"./useDebouncedEffect-BbAe7f2V.js";import"./use-deep-compare-effect.esm-PGsQh5wx.js";import"./uniq-YIXh5BiE.js";import"./without-f8XiLPM3.js";import"./UserBadge-DzJeSzo3.js";import"./useUserBundle-BSvNFjH2.js";import"./SkeletonTable-byD91yhK.js";import"./MenuItem-BtphKdVT.js";import"./Card-Banr9iBM.js";import"./Chip-C5nNw1tU.js";import"./Select-aab027f3.esm-BJpja8k1.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-CwJSnHH9.js";import"./TeamBadge-nxRzYlw2.js";import"./SkeletonButton-Du8eM1ph.js";import"./SkeletonInlineBlock-DNcFzW0b.js";import"./SkeletonParagraph-Bk8dDX0J.js";import"./IconSvgButton-DtwOyjZH.js";import"./FormControlLabel-NsEZC7sm.js";import"./Checkbox-3MctZvwC.js";import"./SwitchBase-BEG0UBNi.js";import"./useUpdateAcl-CIH29taA.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
