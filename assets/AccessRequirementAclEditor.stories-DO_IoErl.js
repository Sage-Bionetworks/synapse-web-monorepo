import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-DgbfDeQR.js";import{A as c}from"./AccessRequirementAclEditor-Boim2Pvp.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-1IyDJ5cP.js";import"./index-C0b8tnCj.js";import"./_baseOrderBy-RZrmjB55.js";import"./_baseIteratee-CiKc5xq1.js";import"./_baseMap-tCchEm93.js";import"./_baseEach-CZe3OfT0.js";import"./useQueries-6GpUHBte.js";import"./useInfiniteQuery-DkLtRlOU.js";import"./AclEditor-BVGVM-yU.js";import"./UserSearchBoxV2-BWcTzsUN.js";import"./useDebouncedEffect-CRy786Xe.js";import"./use-deep-compare-effect.esm-F2bg4WO3.js";import"./uniq-DyLAuFmz.js";import"./without-JPuxayTA.js";import"./UserBadge-DT_nDzPV.js";import"./SkeletonTable-CkIMw70Y.js";import"./MenuItem-kceyAJzH.js";import"./Card-Bp2w-evW.js";import"./Chip-D6WFZ5Ud.js";import"./Select-aab027f3.esm-AqtnRGFa.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-Cpoj1OFk.js";import"./TeamBadge-DyhX9H1C.js";import"./SkeletonButton-C3Hqevp6.js";import"./SkeletonInlineBlock-D8vr7qjb.js";import"./SkeletonParagraph-BtYiDY2A.js";import"./IconSvgButton-BsL7fJR3.js";import"./FormControlLabel-PWC_65OH.js";import"./Checkbox-4zE_Iu-t.js";import"./SwitchBase-C__WXogo.js";import"./useUpdateAcl-Dsa7D53g.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
