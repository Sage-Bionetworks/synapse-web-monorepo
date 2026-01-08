import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-k9YwU_Xc.js";import{A as c}from"./AccessRequirementAclEditor-B6BfHRi1.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-Bpx4VYGs.js";import"./index-DfC-1pI_.js";import"./_baseOrderBy-BDPdyESe.js";import"./_baseIteratee-DxLFM1hL.js";import"./_baseMap-B172oB3N.js";import"./_baseEach-CNGY3RY2.js";import"./useQueries-J55c1hQt.js";import"./useInfiniteQuery-CV6-OEbg.js";import"./AclEditor-CJsoA0O8.js";import"./UserSearchBoxV2-CH0dAh8E.js";import"./useDebouncedEffect-Di5Y9xSG.js";import"./use-deep-compare-effect.esm-D2PrD07D.js";import"./uniq-Dd01wqMQ.js";import"./without-6khpydSx.js";import"./UserBadge-DuQvc6Dg.js";import"./useUserBundle-Ciq97Tj-.js";import"./useSuspenseQuery-CiFSWrMs.js";import"./SkeletonTable-aVeOh9ct.js";import"./MenuItem-xt1g1Ufs.js";import"./Card-BUvqTfdV.js";import"./Chip-CKkKYJUZ.js";import"./Select-aab027f3.esm-DbrC5QvQ.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./UserOrTeamBadge-DgoM14CD.js";import"./TeamBadge-CU6EGuah.js";import"./SkeletonButton-BEjusTzn.js";import"./SkeletonInlineBlock-Cb_-AWMb.js";import"./SkeletonParagraph-Btg7J19e.js";import"./IconSvgButton-CSLBe9VP.js";import"./FormControlLabel-DpD-rxj4.js";import"./Checkbox-DpmckRKo.js";import"./SwitchBase-B6MbIRzb.js";import"./useUpdateAcl-DglmlnM5.js";const le={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),m=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var n;a(!0),(n=m.current)==null||n.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:m,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(_=t.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const de=["MockDemoExistingAcl","MockDemoNoExistingAcl","DevDemo"];export{t as DevDemo,r as MockDemoExistingAcl,s as MockDemoNoExistingAcl,de as __namedExportsOrder,le as default};
