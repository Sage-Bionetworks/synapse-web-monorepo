import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-CvY4ZvuJ.js";import{A as c}from"./AccessRequirementAclEditor-CAam6lDi.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-BJeP1OZd.js";import"./index-bMipKrjl.js";import"./_baseOrderBy-BjSGNvvL.js";import"./_baseIteratee-D7LezZkr.js";import"./_baseMap-CFTIclAl.js";import"./_baseEach-DuKTxBZy.js";import"./useQueries-DrGB5wIR.js";import"./useInfiniteQuery--_EbWIUu.js";import"./AclEditor-B2Q4Wq8S.js";import"./UserSearchBoxV2-Z1w80hHQ.js";import"./useDebouncedEffect-BPgzOVr1.js";import"./use-deep-compare-effect.esm-5lSoDmix.js";import"./uniq-DeLep7Ye.js";import"./without-B6wc_T42.js";import"./UserBadge-BD2zhjf4.js";import"./SkeletonTable-dMQ-mK3Q.js";import"./MenuItem-DKvXd6gt.js";import"./Card-BXO89Jdk.js";import"./Chip-BETMumCU.js";import"./Select-aab027f3.esm-CGXjiCAG.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-DhpVrA7M.js";import"./TeamBadge-CqqvkP2B.js";import"./SkeletonButton-tyjQjXOk.js";import"./SkeletonInlineBlock-CuvHcddn.js";import"./SkeletonParagraph-C7GW6bi4.js";import"./IconSvgButton-J7srB5TG.js";import"./FormControlLabel-qE_sm44B.js";import"./Checkbox-B2JwnUlV.js";import"./SwitchBase-DgB78qVF.js";import"./useUpdateAcl-CovHj7cZ.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
