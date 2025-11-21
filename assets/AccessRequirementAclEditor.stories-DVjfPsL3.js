import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-mGy2Wk6y.js";import{A as c}from"./AccessRequirementAclEditor-cLB7SkK7.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-CIhqrsCU.js";import"./index-DiAJBedM.js";import"./_baseOrderBy-D6MmP28J.js";import"./_baseIteratee-B87rLCNJ.js";import"./_baseMap-CbP99YWG.js";import"./_baseEach-CDQIHyBg.js";import"./useQueries-DkOcIflI.js";import"./useInfiniteQuery-BfuuwBv9.js";import"./AclEditor-ChDbchED.js";import"./UserSearchBoxV2-Colvet46.js";import"./useDebouncedEffect-CTIgbBih.js";import"./use-deep-compare-effect.esm-C-7vAf0E.js";import"./uniq-owFX0wPL.js";import"./without-DNzz54Gy.js";import"./UserBadge-lp_r4Ou3.js";import"./SkeletonTable-kLNdUUmz.js";import"./MenuItem-OonJkNvT.js";import"./Card-cHjfB50w.js";import"./Chip-DXX-HH6K.js";import"./Select-aab027f3.esm-C1vwSAwn.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-CLwUsqyQ.js";import"./TeamBadge-XHZ0_9yj.js";import"./SkeletonButton-D8FF59H8.js";import"./SkeletonInlineBlock-DsW0TT6X.js";import"./SkeletonParagraph-D3sTCCy6.js";import"./IconSvgButton-239JklMz.js";import"./FormControlLabel-w7O-liTB.js";import"./Checkbox-U16cDoFV.js";import"./SwitchBase-0JJlcDJX.js";import"./useUpdateAcl-B7x1mret.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
