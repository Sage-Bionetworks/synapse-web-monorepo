import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-WWZqBZnn.js";import{A as c}from"./AccessRequirementAclEditor-DWPX1IuA.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-D4By2QuJ.js";import"./index-BIyHuP4w.js";import"./_baseOrderBy-CbBb5esc.js";import"./_baseIteratee-D_0Rph_r.js";import"./_baseMap-DyQ1aIXV.js";import"./_baseEach-DvB8TnZW.js";import"./useQueries-CE3PXJwM.js";import"./useInfiniteQuery-B4gaib9_.js";import"./AclEditor-DeDFwRF0.js";import"./UserSearchBoxV2-DjdKitYg.js";import"./useDebouncedEffect-0mnlikOf.js";import"./use-deep-compare-effect.esm-C_4QtXFm.js";import"./uniq-BDsfPFP2.js";import"./without-cFH1pq6w.js";import"./UserBadge-fIZd8_6K.js";import"./useUserBundle-CeTwuNqf.js";import"./useSuspenseQuery-CMdkSjee.js";import"./SkeletonTable-DehOuMuf.js";import"./MenuItem-c2wV_LaG.js";import"./Card-BI5qFzZ-.js";import"./Chip-C9TzerSA.js";import"./Select-aab027f3.esm-BNPS5QXS.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-G6uvvC2a.js";import"./TeamBadge-Cmu2yu0l.js";import"./SkeletonButton-Ce9jKFb5.js";import"./SkeletonInlineBlock-DLew4KjD.js";import"./SkeletonParagraph-CCoh0O-o.js";import"./IconSvgButton-BVl0NZwY.js";import"./FormControlLabel-DW5NMbUe.js";import"./Checkbox-mjCiJNNh.js";import"./SwitchBase-CK146F_7.js";import"./useUpdateAcl-CL0Ii-2S.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
