import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-DbV7x0Bc.js";import{A as c}from"./AccessRequirementAclEditor-C23dfvQU.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-CeMsDcwS.js";import"./index-D2Qrjv69.js";import"./_baseOrderBy-CGUCTtHs.js";import"./_baseIteratee-Ce614RAD.js";import"./_baseMap-Tp95EtUm.js";import"./_baseEach-DrahPvDJ.js";import"./useQueries-DZBfPbhP.js";import"./useInfiniteQuery-CQxVeuk5.js";import"./AclEditor-DlEmc2Ar.js";import"./UserSearchBoxV2-f70VBFIL.js";import"./useDebouncedEffect-CZKtavsF.js";import"./use-deep-compare-effect.esm-DdgMJnVC.js";import"./uniq-whkMau-N.js";import"./without-eoH4Bdd6.js";import"./UserBadge-CSeyrS-i.js";import"./SkeletonTable-D35PHSUs.js";import"./MenuItem-tbPVUwvL.js";import"./Card-BlOhhd1x.js";import"./Chip-Df3eRAme.js";import"./Select-aab027f3.esm-Kwz2OgqV.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-DpXxPI1U.js";import"./TeamBadge-DK4DDUL1.js";import"./SkeletonButton-CEdKSSw-.js";import"./SkeletonInlineBlock-DPkHUg7t.js";import"./SkeletonParagraph-CtXDblG_.js";import"./IconSvgButton-D2LrzMuW.js";import"./FormControlLabel-DJbMYuJO.js";import"./Checkbox-Cz2XkOYO.js";import"./SwitchBase-DGuqDH3e.js";import"./useUpdateAcl-nkdNj64K.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
