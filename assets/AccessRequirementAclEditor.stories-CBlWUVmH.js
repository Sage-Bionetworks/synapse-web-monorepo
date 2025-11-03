import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-DM9RvezN.js";import{A as c}from"./AccessRequirementAclEditor-DpTDN9Uc.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-QA-mh8CY.js";import"./index-DqaILKWS.js";import"./_baseOrderBy-BSC5UCJE.js";import"./_baseIteratee-CfALVA7h.js";import"./_baseMap-BRcISebz.js";import"./_baseEach-WoBkeBru.js";import"./useQueries-D5jfDvvs.js";import"./useInfiniteQuery-oJo5Itzj.js";import"./AclEditor-iS-uex3k.js";import"./UserSearchBoxV2-DHSCkGf7.js";import"./useDebouncedEffect-CVV5Jjx5.js";import"./use-deep-compare-effect.esm-NDyiIymG.js";import"./uniq-BHDCqrrO.js";import"./without-CHQWntd5.js";import"./UserBadge-kFRXYAH-.js";import"./SkeletonTable-DWBPPyUA.js";import"./MenuItem-Dpv8sefJ.js";import"./Card-0KjgSdyq.js";import"./Chip-BTSRizg_.js";import"./Select-aab027f3.esm-CQOn5Wp8.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-Dt5Cx64f.js";import"./TeamBadge-gctku4Yb.js";import"./SkeletonButton-GB1PBqFT.js";import"./SkeletonInlineBlock-74TZwrl_.js";import"./SkeletonParagraph-BhCOGAD2.js";import"./IconSvgButton-CvXngRF0.js";import"./FormControlLabel-L12ye2gQ.js";import"./Checkbox-DKPhV2ji.js";import"./SwitchBase-BXwGyhZC.js";import"./useUpdateAcl-BFkKtDJk.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
