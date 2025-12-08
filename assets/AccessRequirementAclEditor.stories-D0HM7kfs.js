import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-DslgKmO_.js";import{A as c}from"./AccessRequirementAclEditor-BNqUEnnW.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-C4EpNefd.js";import"./index-CeAJJ3j5.js";import"./_baseOrderBy-2_6WwKWL.js";import"./_baseIteratee-cMERbMqv.js";import"./_baseMap-C0xLoNYD.js";import"./_baseEach-BlNd2DLO.js";import"./useQueries-Dxf5Gk_j.js";import"./useInfiniteQuery-DxxIkqas.js";import"./AclEditor-CudN5IBI.js";import"./UserSearchBoxV2-2Od06OU0.js";import"./useDebouncedEffect-BQp64cO4.js";import"./use-deep-compare-effect.esm-BXsVt7_r.js";import"./uniq-CbOJCRU-.js";import"./without-B0NuDHbk.js";import"./UserBadge-BanEe0Rj.js";import"./useUserBundle-tammJvdO.js";import"./useSuspenseQuery-x1rZi4HF.js";import"./SkeletonTable-B6rYfEE0.js";import"./MenuItem-CTidO0-V.js";import"./Card-CiAcqMR5.js";import"./Chip-BUIb0Z0i.js";import"./Select-aab027f3.esm-mE7rcB8J.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-Dl67vs4W.js";import"./TeamBadge-1DifeGiP.js";import"./SkeletonButton-CrnZOVdp.js";import"./SkeletonInlineBlock-iMtCHDfe.js";import"./SkeletonParagraph-CWIA3BjK.js";import"./IconSvgButton-qgC6Wt15.js";import"./FormControlLabel-BxxRdktG.js";import"./Checkbox-C0eLrhG9.js";import"./SwitchBase-DhgbMpez.js";import"./useUpdateAcl-CJ7utQT0.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(_=t.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const le=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,le as __namedExportsOrder,pe as default};
