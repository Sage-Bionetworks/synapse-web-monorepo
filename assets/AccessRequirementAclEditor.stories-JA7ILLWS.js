import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-DATRO4pg.js";import{A as i}from"./AccessRequirementAclEditor-CAkvjvsZ.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-ddMgcJ99.js";import"./index-33OaJtki.js";import"./_baseOrderBy-CRhNjc5f.js";import"./_baseIteratee--pAE4BC1.js";import"./_baseMap-BGYDPwov.js";import"./_baseEach-6wOhS19j.js";import"./useInfiniteQuery-BsjpUEc3.js";import"./AclEditor-D9gxpY7j.js";import"./UserSearchBoxV2-40i6jy0O.js";import"./useDebouncedEffect-CfbLi_k3.js";import"./use-deep-compare-effect.esm-a847B46a.js";import"./uniq-C8e4NYmZ.js";import"./without-copMPav4.js";import"./UserBadge-BegEEQMp.js";import"./useUserBundle-B4qTlzlm.js";import"./SkeletonTable-CwWcK3KH.js";import"./MenuItem-BO0T4yAa.js";import"./Card-BQzn9VZu.js";import"./Chip-DWvykSmW.js";import"./Select-aab027f3.esm-C4-NAwD7.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BtYlE-iy.js";import"./TeamBadge-D_Jvj86j.js";import"./SkeletonButton-D-kO1kuw.js";import"./SkeletonInlineBlock-BHsC0ZVh.js";import"./SkeletonParagraph-BO1hpxq5.js";import"./IconSvgButton-BmMXjGPz.js";import"./FormControlLabel-DZ_R2mT0.js";import"./Checkbox-D1X7uu44.js";import"./SwitchBase-IkX6tI92.js";import"./useUpdateAcl-CLW4a_ND.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
