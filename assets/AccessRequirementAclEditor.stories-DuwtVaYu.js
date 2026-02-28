import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-HaQTQwuz.js";import{A as i}from"./AccessRequirementAclEditor-DebKqyg2.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-XdwbVJy7.js";import"./index-2-kVSTun.js";import"./_baseOrderBy-Dkf75jER.js";import"./_baseIteratee-DKLhN1qh.js";import"./_baseMap-CH7s2_hf.js";import"./_baseEach-CBBwMrU5.js";import"./useInfiniteQuery-CVhxs5X4.js";import"./AclEditor-BB_2k07A.js";import"./UserSearchBoxV2-VqQIC3hj.js";import"./useDebouncedEffect-OT2D1-O8.js";import"./use-deep-compare-effect.esm-_U7z7y2a.js";import"./uniq-DuWc8qRl.js";import"./without-BSYbk_Sh.js";import"./UserBadge-Bttymvw9.js";import"./useUserBundle-BnHzx4-z.js";import"./SkeletonTable-D-YEDgDk.js";import"./MenuItem-B4mCMP0L.js";import"./Card-CkmLhGx3.js";import"./Chip-DJaXVpz2.js";import"./Select-aab027f3.esm-COK-aNf9.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge--xGTAPl_.js";import"./TeamBadge-CnzgEQdI.js";import"./SkeletonButton-C1NUZf-j.js";import"./SkeletonInlineBlock-CG5Fd-uS.js";import"./SkeletonParagraph-BNWGzJpn.js";import"./IconSvgButton-BIU9Fq18.js";import"./FormControlLabel-CJMxTvsN.js";import"./Checkbox-AXkPgLsp.js";import"./SwitchBase-DNv6rmKB.js";import"./useUpdateAcl-rqABlSW7.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
