import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-CoDvXaHz.js";import{A as c}from"./AccessRequirementAclEditor-Dqm3rn6g.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-B9pePMSL.js";import"./index-DxGNUnDx.js";import"./_baseOrderBy-Ci87z1eE.js";import"./_baseIteratee-B3LRL1bv.js";import"./_baseMap-B-HNtvpc.js";import"./_baseEach-gqJx6AcI.js";import"./useQueries-etcLJuTQ.js";import"./useInfiniteQuery-UpnaTIxT.js";import"./AclEditor-BQZ-vT0E.js";import"./UserSearchBoxV2-WQaSw4BC.js";import"./useDebouncedEffect-CPmVY5n_.js";import"./use-deep-compare-effect.esm-D-Ev4Q7w.js";import"./uniq-D9lxL0jm.js";import"./without-CCZaNuK9.js";import"./UserBadge-D1hQnu2o.js";import"./useUserBundle-Db1_q7o_.js";import"./useSuspenseQuery-C2VS82Y2.js";import"./SkeletonTable-LuC_UCPV.js";import"./MenuItem-DBpJraem.js";import"./Card-D4KrYtxS.js";import"./Chip-CCgamNVG.js";import"./Select-aab027f3.esm-DQR6YDKC.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BXCsUako.js";import"./TeamBadge-C3HDt_w0.js";import"./SkeletonButton-CllzTHSq.js";import"./SkeletonInlineBlock-C69n0VA9.js";import"./SkeletonParagraph-YdwHeP2z.js";import"./IconSvgButton-B51I3vTQ.js";import"./FormControlLabel-F8YXTviE.js";import"./Checkbox-EpGb_-Sk.js";import"./SwitchBase-Xsp7daK3.js";import"./useUpdateAcl-DZGprxUp.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
