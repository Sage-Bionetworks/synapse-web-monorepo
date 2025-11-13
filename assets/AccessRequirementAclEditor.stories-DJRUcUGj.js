import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-BZoqbf8T.js";import{A as c}from"./AccessRequirementAclEditor-Dqjo9gCt.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-A5CQN6C_.js";import"./index-DD9jDIum.js";import"./_baseOrderBy-DKrZBwa7.js";import"./_baseIteratee-x9q7dVdV.js";import"./_baseMap-BD2hY9d2.js";import"./_baseEach-o2iNJkzb.js";import"./useQueries-V-XKKRJy.js";import"./useInfiniteQuery-DDBDj7dn.js";import"./AclEditor-CZ32nVVz.js";import"./UserSearchBoxV2-DHebsS1_.js";import"./useDebouncedEffect-CZ4552fQ.js";import"./use-deep-compare-effect.esm-DsSeDtiF.js";import"./uniq-BadwzQtJ.js";import"./without-tYc0_zmA.js";import"./UserBadge-ueMkJ81N.js";import"./SkeletonTable-Cbhot3O8.js";import"./MenuItem-97gDT1Wf.js";import"./Card-BVJDHK3N.js";import"./Chip-DWh3L3o0.js";import"./Select-aab027f3.esm-G7yrvEqB.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-DC_SSTi4.js";import"./TeamBadge-BudB82KV.js";import"./SkeletonButton-CNv8YWby.js";import"./SkeletonInlineBlock-CT4iLvxR.js";import"./SkeletonParagraph-BxFUaFhk.js";import"./IconSvgButton-CmQu-s2z.js";import"./FormControlLabel-DbZXuN4t.js";import"./Checkbox-Bj9CoxMt.js";import"./SwitchBase-b-Epk7F3.js";import"./useUpdateAcl-rdIS0EPP.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
