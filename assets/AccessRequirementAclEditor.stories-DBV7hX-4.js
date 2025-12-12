import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-nfXQhXwW.js";import{A as c}from"./AccessRequirementAclEditor-Cx8q_2Fg.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-qLmWXZdY.js";import"./index-BOrTr2xQ.js";import"./_baseOrderBy-Itnes96W.js";import"./_baseIteratee-BFCeszVE.js";import"./_baseMap-B4olF_v4.js";import"./_baseEach-nvfsaZ4q.js";import"./useQueries-DKORIwHW.js";import"./useInfiniteQuery-CeWkfcy6.js";import"./AclEditor-BMom0Fhy.js";import"./UserSearchBoxV2-DXJNVpZn.js";import"./useDebouncedEffect-vRAUfjeb.js";import"./use-deep-compare-effect.esm-0VsloZOd.js";import"./uniq-B52MWZc7.js";import"./without-1n6JGdX7.js";import"./UserBadge-DrEl5_5I.js";import"./useUserBundle-Dx3pUDh4.js";import"./useSuspenseQuery-wrHvDIJ0.js";import"./SkeletonTable-I__c7Ied.js";import"./MenuItem-DVxEnVQ-.js";import"./Card-CH2nRDyh.js";import"./Chip-nV4_OO3k.js";import"./Select-aab027f3.esm-xNkwYAYN.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-CF5f-0H8.js";import"./TeamBadge-DIH9ZRhN.js";import"./SkeletonButton-Bk4CQ1lc.js";import"./SkeletonInlineBlock--rWrAuqR.js";import"./SkeletonParagraph-DtAQS4WM.js";import"./IconSvgButton-CJcUOsYM.js";import"./FormControlLabel--BxiVjeI.js";import"./Checkbox-BFYGnWq_.js";import"./SwitchBase-DY0aivKg.js";import"./useUpdateAcl-D-a3AR8G.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
