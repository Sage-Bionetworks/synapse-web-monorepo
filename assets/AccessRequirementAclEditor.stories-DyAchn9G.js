import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-BZSO1sBY.js";import{A as c}from"./AccessRequirementAclEditor-DFxiNRS9.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-BYGsF-N7.js";import"./index-CXinfiYW.js";import"./_baseOrderBy-c9jKiZ0g.js";import"./_baseIteratee-iOdVGprh.js";import"./_baseMap-CTsc-4-Q.js";import"./_baseEach-BxIYVEKh.js";import"./useQueries-BddsUBZl.js";import"./useInfiniteQuery-CnyKyV-h.js";import"./AclEditor-RPNoaRdE.js";import"./UserSearchBoxV2-yCKi-6XK.js";import"./useDebouncedEffect-BUuu8h-D.js";import"./use-deep-compare-effect.esm-Bc6PgY11.js";import"./uniq-pBlyIzRr.js";import"./without-BOq2Z2-J.js";import"./UserBadge-TVBuHs8r.js";import"./SkeletonTable-CscIywyr.js";import"./MenuItem-DMN5iUnx.js";import"./Card-DDYQ3M_p.js";import"./Chip-B1QmYW8E.js";import"./Select-aab027f3.esm-Cl2_uTvT.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BazAX7HS.js";import"./TeamBadge-YVTjBD-r.js";import"./SkeletonButton-CEYfXLSy.js";import"./SkeletonInlineBlock-BOHljZQL.js";import"./SkeletonParagraph-DUOYKhWf.js";import"./IconSvgButton-CZVds4Tw.js";import"./FormControlLabel-DZaq9Cb-.js";import"./Checkbox-BXYGByWK.js";import"./SwitchBase-AgXctXHK.js";import"./useUpdateAcl-CFdf2oJT.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
