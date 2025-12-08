import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-DVXODLNu.js";import{A as c}from"./AccessRequirementAclEditor-7MHFFoP7.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-DhOrpIWz.js";import"./index-Bd7KE_sO.js";import"./_baseOrderBy-eA1ieNmu.js";import"./_baseIteratee-BHw4qJII.js";import"./_baseMap-CS6dt86a.js";import"./_baseEach-Bw65e-UW.js";import"./useQueries-ByecndiH.js";import"./useInfiniteQuery-BezuufV7.js";import"./AclEditor-Cpcsv_uW.js";import"./UserSearchBoxV2-DecOa6so.js";import"./useDebouncedEffect-Da-D3D2U.js";import"./use-deep-compare-effect.esm-NBDLnfqg.js";import"./uniq-B5-F1PUr.js";import"./without-Dzex2Nar.js";import"./UserBadge-LmUrHAa6.js";import"./useUserBundle-BkjAxlSt.js";import"./useSuspenseQuery-sm4bvu-Z.js";import"./SkeletonTable-MyquJLbe.js";import"./MenuItem-BqHSezmF.js";import"./Card-Bb4flCVP.js";import"./Chip-Cr5hy2JG.js";import"./Select-aab027f3.esm-D-hLbm8i.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-Bhzk2JYD.js";import"./TeamBadge-0jGm7KJb.js";import"./SkeletonButton-C9WhwSFv.js";import"./SkeletonInlineBlock-rd-Pq8Ur.js";import"./SkeletonParagraph-DapPZsJe.js";import"./IconSvgButton-B9U-jP6s.js";import"./FormControlLabel-DTqn-dl-.js";import"./Checkbox-D5Ka3-kx.js";import"./SwitchBase-CkD1vswi.js";import"./useUpdateAcl-Bz5DsTpd.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
