import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-DxLAvgox.js";import{A as c}from"./AccessRequirementAclEditor-CFivOdhc.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-CIL1_y--.js";import"./index-S82T9GXF.js";import"./_baseOrderBy-BeMHQMvH.js";import"./_baseIteratee-BpeW87oO.js";import"./_baseMap-DCpRc4dc.js";import"./_baseEach-BMFyANHr.js";import"./useQueries-CejlDFtq.js";import"./useInfiniteQuery-5-3iz-fe.js";import"./AclEditor-B-HvhDYO.js";import"./UserSearchBoxV2-B4aCque-.js";import"./useDebouncedEffect-CSk3YmFF.js";import"./use-deep-compare-effect.esm-DnHLtynv.js";import"./uniq-L0rriJhe.js";import"./without-CwBRJ38n.js";import"./UserBadge-CEfiugXx.js";import"./useUserBundle-Cl9nEyKf.js";import"./useSuspenseQuery-Bz18OTgk.js";import"./SkeletonTable-DodbVua_.js";import"./MenuItem-CDsrTtNF.js";import"./Card-BJAh0ufu.js";import"./Chip-BbRs-Tuc.js";import"./Select-aab027f3.esm-TxR3ro2b.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-C3xrUK0E.js";import"./TeamBadge-DoRsZr8J.js";import"./SkeletonButton-BslgCCKq.js";import"./SkeletonInlineBlock-DbpHeMSy.js";import"./SkeletonParagraph-9LEWhVxx.js";import"./IconSvgButton-2lRj3TJh.js";import"./FormControlLabel-D_hqiJfc.js";import"./Checkbox-DuOsObKJ.js";import"./SwitchBase-Y2WpZncG.js";import"./useUpdateAcl-CbB_1H3x.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
