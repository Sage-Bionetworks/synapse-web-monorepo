import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-B9o6ulgU.js";import{A as c}from"./AccessRequirementAclEditor-4sCo-1Jx.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-BB2-4oS9.js";import"./index-Cr_TSGSN.js";import"./_baseOrderBy-BiyKeECO.js";import"./_baseIteratee-CBt9dape.js";import"./_baseMap-C229BfOD.js";import"./_baseEach-BoVOpmuL.js";import"./useQueries-C3uV33GD.js";import"./useInfiniteQuery-kNzCWB85.js";import"./AclEditor-BXwNxhED.js";import"./UserSearchBoxV2-BcAuWO8J.js";import"./useDebouncedEffect-BSHuIR52.js";import"./use-deep-compare-effect.esm-Clbxr4tw.js";import"./uniq-yZI0ZKTx.js";import"./without-CjHbkjHI.js";import"./UserBadge-BRWqD6Ez.js";import"./SkeletonTable-CEQwMQho.js";import"./MenuItem-DlWBPIOu.js";import"./Card-CklRZ_sR.js";import"./Chip-BZa4nVPR.js";import"./Select-aab027f3.esm-BVB03L5T.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-DcssnfxC.js";import"./TeamBadge-B5Snpkj4.js";import"./SkeletonButton-BXySJEex.js";import"./SkeletonInlineBlock-BVBMyQK3.js";import"./SkeletonParagraph-BgTZ32N4.js";import"./IconSvgButton-CsuZqWPU.js";import"./FormControlLabel-CMl1Nsw_.js";import"./Checkbox-CrnRjipf.js";import"./SwitchBase-DnGYhQqV.js";import"./useUpdateAcl-BubwLUav.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
