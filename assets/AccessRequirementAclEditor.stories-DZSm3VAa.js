import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-Ci1lmE8g.js";import{A as c}from"./AccessRequirementAclEditor-DeGYh81c.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-BcP6tXmo.js";import"./index-BdMb-1ps.js";import"./_baseOrderBy-hgHOx6Yr.js";import"./_baseIteratee-BQlpWk-E.js";import"./_baseMap-DOU_FLyJ.js";import"./_baseEach-C_dLu_fx.js";import"./useQueries-DsbpWbBj.js";import"./useInfiniteQuery-DWL-Og4B.js";import"./AclEditor-ChdbCbHk.js";import"./UserSearchBoxV2-CViwSSrF.js";import"./useDebouncedEffect-B_A-YylX.js";import"./use-deep-compare-effect.esm-CoZjJuVi.js";import"./uniq-DZseOKB0.js";import"./without-BMXd1Ulk.js";import"./UserBadge-DRfGM4AR.js";import"./SkeletonTable-DkbE7er9.js";import"./MenuItem-DNhPNPdH.js";import"./Card-B9m98vxz.js";import"./Chip-7ZjY8iwO.js";import"./Select-aab027f3.esm-CQJYo76m.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BLAOGy8C.js";import"./TeamBadge-BtVGBgEB.js";import"./SkeletonButton-CC-6gNoS.js";import"./SkeletonInlineBlock-B2RYwmUI.js";import"./SkeletonParagraph-ITJPOI8x.js";import"./IconSvgButton-C8-x8Lkw.js";import"./FormControlLabel-CP9zrs5G.js";import"./Checkbox-CfXy5gYt.js";import"./SwitchBase-Dywev717.js";import"./useUpdateAcl-yWsXq54e.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
