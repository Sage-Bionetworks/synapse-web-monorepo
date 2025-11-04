import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-BDc0Xlhy.js";import{A as c}from"./AccessRequirementAclEditor-jWaV20oK.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-Dflf79p8.js";import"./index-C41l0OuT.js";import"./_baseOrderBy-B8qDrLNJ.js";import"./_baseIteratee-CJS0VTxt.js";import"./_baseMap-CAw--vsR.js";import"./_baseEach-Lkq8QNxf.js";import"./useQueries-D1wUNo_x.js";import"./useInfiniteQuery-CsjtSfjB.js";import"./AclEditor-BI1OcmRZ.js";import"./UserSearchBoxV2-B-GLFMI0.js";import"./useDebouncedEffect-CnkYQ3kG.js";import"./use-deep-compare-effect.esm-DHzSo00o.js";import"./uniq-B8EPpNaJ.js";import"./without-DKR0wDNr.js";import"./UserBadge-DJ1RxlFI.js";import"./SkeletonTable-DvNgt2M0.js";import"./MenuItem-CGmsTxjm.js";import"./Card-Cd1qTK2e.js";import"./Chip-BVXU1kgT.js";import"./Select-aab027f3.esm-LYXm8y3H.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BqIWhxBx.js";import"./TeamBadge-BSGmQsKz.js";import"./SkeletonButton-DOlvDp9u.js";import"./SkeletonInlineBlock-BzdKRqEw.js";import"./SkeletonParagraph-BrPTge09.js";import"./IconSvgButton-CzDFgTfP.js";import"./FormControlLabel-B4mFleYZ.js";import"./Checkbox-CqOtMQXw.js";import"./SwitchBase-DmlvyMWs.js";import"./useUpdateAcl-LY8s8ndn.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    accessRequirementId: MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.id
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var E,R,u;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID)
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), getAllAccessRequirementAclHandlers(MOCK_REPO_ORIGIN)]
    }
  }
}`,...(u=(R=s.parameters)==null?void 0:R.docs)==null?void 0:u.source}}};var A,_,g;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    accessRequirementId: '9602671'
  },
  parameters: {
    stack: 'development'
  }
}`,...(g=(_=t.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const ce=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,ce as __namedExportsOrder,ie as default};
