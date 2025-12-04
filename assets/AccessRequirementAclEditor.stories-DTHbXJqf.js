import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-CnFFtBM5.js";import{A as c}from"./AccessRequirementAclEditor-CEw5micx.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-DDzrtyTK.js";import"./index-BSyMNs-U.js";import"./_baseOrderBy-82OEhp49.js";import"./_baseIteratee-BVMr-kVb.js";import"./_baseMap-BkngOU8S.js";import"./_baseEach-De-JfD7a.js";import"./useQueries-BF7Qkzzf.js";import"./useInfiniteQuery-CQzVs7Nm.js";import"./AclEditor-DSwaZ7qp.js";import"./UserSearchBoxV2-zFeRi4PM.js";import"./useDebouncedEffect-DQf3jctQ.js";import"./use-deep-compare-effect.esm-_S-D4OI6.js";import"./uniq-CjmDJsGa.js";import"./without-Dw0AmUic.js";import"./UserBadge-RHwyWXL_.js";import"./useUserBundle-C5RZncTV.js";import"./useSuspenseQuery-D8hCSSQZ.js";import"./SkeletonTable-CeXSUdJ0.js";import"./MenuItem-DeX5RPAC.js";import"./Card-DFm6JQIv.js";import"./Chip-B7HTEMX4.js";import"./Select-aab027f3.esm-IgiVXpOj.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-94BSY1Eg.js";import"./TeamBadge-DCyXy8u3.js";import"./SkeletonButton-CClASP2Q.js";import"./SkeletonInlineBlock-SiFBwNDW.js";import"./SkeletonParagraph-Bh_V5SGk.js";import"./IconSvgButton-DHVPWgvV.js";import"./FormControlLabel-Bli_r3Hb.js";import"./Checkbox-BkPCt9V2.js";import"./SwitchBase-BUvuFp9Q.js";import"./useUpdateAcl-kvLfrAwn.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
