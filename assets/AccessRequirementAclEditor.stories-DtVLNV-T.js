import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-AZFkaj29.js";import{A as c}from"./AccessRequirementAclEditor-DHPssDR8.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-CabBMSpH.js";import"./index-D-3YUotp.js";import"./_baseOrderBy-DxrqB1VL.js";import"./_baseIteratee-DXtS-ESO.js";import"./_baseMap-CoTbMhkx.js";import"./_baseEach-7Jf3BhmM.js";import"./useQueries-DAVMkUle.js";import"./useInfiniteQuery-BBaTsQSm.js";import"./AclEditor-2VtyrmCv.js";import"./UserSearchBoxV2-CVAWZDGn.js";import"./useDebouncedEffect-Crl2Qy_8.js";import"./use-deep-compare-effect.esm-CkjIpb9c.js";import"./uniq-DPD25Rk_.js";import"./without-BTlwPQAz.js";import"./UserBadge-BvUmBnhC.js";import"./SkeletonTable-DQttbHFf.js";import"./MenuItem-BsTRry6Y.js";import"./Card-MFQbB8v8.js";import"./Chip-TJPVsrF2.js";import"./Select-aab027f3.esm-CZs-_fOu.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-CHOIc17M.js";import"./TeamBadge-RzlSEqwX.js";import"./SkeletonButton-oQJZ7ToR.js";import"./SkeletonInlineBlock-DtSMBTT9.js";import"./SkeletonParagraph-Bf05FZ4M.js";import"./IconSvgButton-BOwMYS3b.js";import"./FormControlLabel-jUWSiJCh.js";import"./Checkbox-B90CJICb.js";import"./SwitchBase-BUhbphe5.js";import"./useUpdateAcl-CVBu4Wo8.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
