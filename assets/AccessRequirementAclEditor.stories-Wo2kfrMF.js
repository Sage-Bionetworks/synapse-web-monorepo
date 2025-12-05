import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-WhfIvkO3.js";import{A as c}from"./AccessRequirementAclEditor-D87vNaSo.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-BB4IHjuf.js";import"./index-sVzarH1I.js";import"./_baseOrderBy--tHHHZY3.js";import"./_baseIteratee-CH6bpyis.js";import"./_baseMap-TUJrX8WR.js";import"./_baseEach-9J6UhAkG.js";import"./useQueries-uA84kYd4.js";import"./useInfiniteQuery-DR_7XXgj.js";import"./AclEditor-bdSSlrR9.js";import"./UserSearchBoxV2-B-aWi7od.js";import"./useDebouncedEffect-DixUkIq6.js";import"./use-deep-compare-effect.esm-DfR59o2r.js";import"./uniq-CTpbJdFY.js";import"./without-Br9k2PUu.js";import"./UserBadge-BWSKMWPf.js";import"./useUserBundle-CRHh6Xmh.js";import"./useSuspenseQuery-dzosinIB.js";import"./SkeletonTable-Di0hBp4_.js";import"./MenuItem-Dje8pbb_.js";import"./Card-OO0EePdq.js";import"./Chip-BbqPcVoT.js";import"./Select-aab027f3.esm-pvhpfeR5.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-15Hk99Bi.js";import"./TeamBadge-41FAQYIo.js";import"./SkeletonButton-qFC4BpI5.js";import"./SkeletonInlineBlock-BW6N_xDK.js";import"./SkeletonParagraph-D0-idZNQ.js";import"./IconSvgButton-DAXbQLho.js";import"./FormControlLabel-CFLwIoC9.js";import"./Checkbox-DygchsjE.js";import"./SwitchBase-DhBFqZMr.js";import"./useUpdateAcl-CVRQsfyu.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
