import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-Cj0e1zel.js";import{A as i}from"./AccessRequirementAclEditor-Cm63CA3B.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BvX1i9of.js";import"./index-ZhGqh7fx.js";import"./_baseOrderBy-C2LZNiy4.js";import"./_baseIteratee-467XhaM-.js";import"./_baseMap-FtsgiS9G.js";import"./_baseEach-BSzMssFr.js";import"./useInfiniteQuery-CPI4HKnX.js";import"./AclEditor-CcnPlUK2.js";import"./UserSearchBoxV2-l6LvtlRT.js";import"./useDebouncedEffect-xCtNoWo2.js";import"./use-deep-compare-effect.esm-D4cj4MEP.js";import"./uniq-BoHpyE19.js";import"./without-BWFmKtOM.js";import"./UserBadge-BbVvVDZB.js";import"./useUserBundle-B7cMc4nB.js";import"./SkeletonTable-CBixK2YG.js";import"./MenuItem-BJCMGP6I.js";import"./Card-BxbyDLyH.js";import"./Chip-Deb-rO6G.js";import"./Select-aab027f3.esm-CY-VyQHU.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-t5xixvig.js";import"./TeamBadge-Caxicm5_.js";import"./SkeletonButton-70dk5TWK.js";import"./SkeletonInlineBlock-ChrVufN-.js";import"./SkeletonParagraph-BiV9WxhL.js";import"./IconSvgButton-BoWuDGkH.js";import"./FormControlLabel-DLtpIQqW.js";import"./Checkbox-B3xT3d14.js";import"./SwitchBase-tOsTduEd.js";import"./useUpdateAcl-Dr_amP0_.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
