import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-B9AXyISm.js";import{A as c}from"./AccessRequirementAclEditor-57xQ538x.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-D2FWW5Vs.js";import"./index-DcvNn4X2.js";import"./_baseOrderBy-CN7N_uLk.js";import"./_baseIteratee-DWFWiy4b.js";import"./_baseMap-BVLp5GDP.js";import"./_baseEach-D0al_2ma.js";import"./useQueries-BCOBTSji.js";import"./useInfiniteQuery-B0uiA_PZ.js";import"./AclEditor-C54goTrG.js";import"./UserSearchBoxV2-bi7vH4AS.js";import"./useDebouncedEffect-C07eGUGc.js";import"./use-deep-compare-effect.esm-B_X0lumA.js";import"./uniq-Crldg1C3.js";import"./without-B26W_R9d.js";import"./UserBadge-BtAxa-D8.js";import"./useUserBundle-D_B9FjL8.js";import"./useSuspenseQuery-DfskErri.js";import"./SkeletonTable-DJaYvBkh.js";import"./MenuItem-Dn2OBO7e.js";import"./Card-DPm0MPSs.js";import"./Chip-CoCC-fi6.js";import"./Select-aab027f3.esm-CJRhWJFs.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BEOCBRSr.js";import"./TeamBadge-CKj5V70B.js";import"./SkeletonButton-C-q75hZ2.js";import"./SkeletonInlineBlock-BZYL3GN_.js";import"./SkeletonParagraph-DZGMGLgg.js";import"./IconSvgButton-DHARRtF5.js";import"./FormControlLabel-C3JXkR06.js";import"./Checkbox-DQYBf5ik.js";import"./SwitchBase-Cb2xhxKM.js";import"./useUpdateAcl-BPi_eIBS.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
