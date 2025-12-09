import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-k0ljdA_F.js";import{A as c}from"./AccessRequirementAclEditor-BVVPtDYm.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-AZ2hcX3x.js";import"./index-C-u29sTD.js";import"./_baseOrderBy-Bz8zxGHn.js";import"./_baseIteratee-Ddi5dsAL.js";import"./_baseMap-CbuWwOmP.js";import"./_baseEach-C4Ciw_0t.js";import"./useQueries-C37mXx1b.js";import"./useInfiniteQuery-Cnf3ehf_.js";import"./AclEditor-CrZmrI2i.js";import"./UserSearchBoxV2-C2gokWI2.js";import"./useDebouncedEffect-CvtmYpAa.js";import"./use-deep-compare-effect.esm-D5RgLp7I.js";import"./uniq-DHKBvVd7.js";import"./without-977OwczG.js";import"./UserBadge-Bz8d8XxV.js";import"./useUserBundle-BcDALtg_.js";import"./useSuspenseQuery-Cfzbe5_g.js";import"./SkeletonTable-C0DTQRTT.js";import"./MenuItem-CVgChaV5.js";import"./Card-DSLWP5ai.js";import"./Chip-DuFcu8oc.js";import"./Select-aab027f3.esm-BSZCEsm9.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-dfyjRY0f.js";import"./TeamBadge-CQu1DBRK.js";import"./SkeletonButton-DocMgp-F.js";import"./SkeletonInlineBlock-D4J3mBmr.js";import"./SkeletonParagraph-BXN5laEg.js";import"./IconSvgButton-DhQ2gnBF.js";import"./FormControlLabel-5sMiV1K8.js";import"./Checkbox-DcsQ_J_q.js";import"./SwitchBase-DWQpQoJJ.js";import"./useUpdateAcl-BuhF9mX7.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
