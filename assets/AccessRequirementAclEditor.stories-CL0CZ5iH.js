import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-B-ViuSv9.js";import{A as i}from"./AccessRequirementAclEditor-CKTCaMdW.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DtI3-BAf.js";import"./index-N4ikXHAo.js";import"./_baseOrderBy-DrVzQcaL.js";import"./_baseIteratee-BksGswVt.js";import"./_baseMap-CAKhQWbA.js";import"./_baseEach-BEUDsluR.js";import"./useInfiniteQuery-vlKUWQr_.js";import"./AclEditor-CG2aFL8z.js";import"./UserSearchBoxV2-DVaHGqs2.js";import"./useDebouncedEffect-B2Nq-Wv9.js";import"./use-deep-compare-effect.esm-DhtK1bWP.js";import"./uniq-CJHssgmn.js";import"./without-vvKTJOZC.js";import"./UserBadge-QrYtiTRr.js";import"./useUserBundle-DKfqKYyl.js";import"./SkeletonTable-DOWE-xYa.js";import"./MenuItem-C3GpEkFh.js";import"./Card-BXvSH8NN.js";import"./Chip-CMkns0F1.js";import"./Select-aab027f3.esm-kmBFdiy8.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DgJJkxkm.js";import"./TeamBadge-D3BmsXUG.js";import"./SkeletonButton-CG2PHgPV.js";import"./SkeletonInlineBlock-ZpxNiyl4.js";import"./SkeletonParagraph-XlJifnft.js";import"./IconSvgButton-CPhxtqqy.js";import"./FormControlLabel-nmG9uE1s.js";import"./Checkbox-B_MkTQaX.js";import"./SwitchBase-___3iFys.js";import"./useUpdateAcl-LBrstDtO.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
