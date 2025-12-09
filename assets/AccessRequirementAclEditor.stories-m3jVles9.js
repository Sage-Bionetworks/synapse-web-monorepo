import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-mfaqAuKn.js";import{A as c}from"./AccessRequirementAclEditor-L2P5PPF9.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-Ba3EFSgx.js";import"./index-D3AHZnx8.js";import"./_baseOrderBy-5R4U94mW.js";import"./_baseIteratee-DEOpNloE.js";import"./_baseMap-1AzMXr6e.js";import"./_baseEach-_IDFhxIe.js";import"./useQueries-CXO38aGV.js";import"./useInfiniteQuery-CFl_zl7K.js";import"./AclEditor-CNzoZ5hU.js";import"./UserSearchBoxV2-Dvb4KSLm.js";import"./useDebouncedEffect-BT7rG54I.js";import"./use-deep-compare-effect.esm-BVXF_Pc-.js";import"./uniq-4uLo8lp5.js";import"./without-KQtmhIWX.js";import"./UserBadge-Bqjav_Ws.js";import"./useUserBundle-DyICHo5Z.js";import"./useSuspenseQuery-Ck8XhOTY.js";import"./SkeletonTable-CQAWTA0x.js";import"./MenuItem-Ce4v9NmO.js";import"./Card-DtMWtPD2.js";import"./Chip-BGU9tTve.js";import"./Select-aab027f3.esm-wYGPny1m.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-CF7tA5NW.js";import"./TeamBadge-CAM1kjxf.js";import"./SkeletonButton-Df6Re1Ke.js";import"./SkeletonInlineBlock-B--4faiZ.js";import"./SkeletonParagraph-BK2WyijI.js";import"./IconSvgButton-6_gqHHgR.js";import"./FormControlLabel-phRtYxCJ.js";import"./Checkbox-BXDlWSV_.js";import"./SwitchBase-N2YArUPS.js";import"./useUpdateAcl-B2yHAKd8.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
