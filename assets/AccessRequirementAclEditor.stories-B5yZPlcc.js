import{g as c,a as p,M as E,r as m,j as e,B as R,P as u,b as o,c as A}from"./iframe-C2kEGB7j.js";import{A as i}from"./AccessRequirementAclEditor-CXkHeSqo.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-D2Lohtaq.js";import"./index-ZDojTcBs.js";import"./_baseOrderBy-DPXrhWwh.js";import"./_baseIteratee-5rUV_LX2.js";import"./_baseMap-0nIDTP6u.js";import"./_baseEach-mV2SNSx4.js";import"./useInfiniteQuery-7NJwUk3W.js";import"./AclEditor-BXMz8UJS.js";import"./UserSearchBoxV2-B3HZC-HK.js";import"./useDebouncedEffect-BdeAEjPj.js";import"./use-deep-compare-effect.esm-D0Q21txf.js";import"./uniq-C68Gwzxs.js";import"./without-BuHZ-Q7C.js";import"./UserBadge-19izyROB.js";import"./useUserBundle-Jr5wF9rW.js";import"./SkeletonTable-DkNCUEbr.js";import"./MenuItem-BNHT0Gz0.js";import"./Card-p-At64Gf.js";import"./Chip-C46utT-v.js";import"./Select-aab027f3.esm-C_7jEFe-.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-B-N9dgfz.js";import"./TeamBadge-BrdXVtv6.js";import"./SkeletonButton-B3EXz-nP.js";import"./SkeletonInlineBlock-DfFg1BbM.js";import"./SkeletonParagraph-CzHkK7a_.js";import"./IconSvgButton-BWIANl1x.js";import"./FormControlLabel-DWUczytV.js";import"./Checkbox-CbGSUy_e.js";import"./SwitchBase-CwCVifNx.js";import"./useUpdateAcl-XVCQNf9q.js";const $={title:"Governance/AccessRequirementAclEditor",component:i,render:function(l){const[d,a]=m.useState(!1),n=m.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(R,{onClick:()=>{a(!0),n.current?.save()},variant:"contained",disabled:d,children:"Save ACL"}),e.jsx(u,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(i,{...l,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:E.id},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},s={args:{accessRequirementId:String(A)},parameters:{stack:"mock",msw:{handlers:[...c(o),p(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
