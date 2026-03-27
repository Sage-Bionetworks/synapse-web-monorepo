import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-C0AexDGo.js";import{A as i}from"./AccessRequirementAclEditor-Bg5FvccZ.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-gm9L2nUe.js";import"./index-BLmC8C9J.js";import"./_baseOrderBy-CQnT6_z2.js";import"./_baseIteratee-Cumo85pk.js";import"./_baseMap-DuuksuE2.js";import"./_baseEach-BYTNHSI6.js";import"./useInfiniteQuery-B2H1bPeH.js";import"./AclEditor-CCAZBy7A.js";import"./UserSearchBoxV2-BntAbD93.js";import"./useDebouncedEffect-CORDx2To.js";import"./use-deep-compare-effect.esm-DvTX_KHd.js";import"./uniq-ZZe97vhK.js";import"./without-C21aeYpK.js";import"./UserBadge-KYcTRXZe.js";import"./useUserBundle-BrZlfjEn.js";import"./SkeletonTable-ButMnzRS.js";import"./MenuItem-CS8tSfW4.js";import"./Card-CavtJPUI.js";import"./Chip-7BiG69Cu.js";import"./Select-aab027f3.esm-C9aQwyIJ.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-BTO2J4xE.js";import"./TeamBadge-Ccbng3VO.js";import"./SkeletonButton-BkD5G1Zw.js";import"./SkeletonInlineBlock-BJifXgdu.js";import"./SkeletonParagraph-BSPRuMA0.js";import"./IconSvgButton-BLTlAkGy.js";import"./FormControlLabel-BzeqMExL.js";import"./Checkbox-B3_Pm9Q5.js";import"./SwitchBase-BMyeD8S1.js";import"./useUpdateAcl-BmcoR6o6.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
