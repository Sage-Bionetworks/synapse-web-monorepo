import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-eAL3LCN3.js";import{A as c}from"./AccessRequirementAclEditor-C9B0O_2r.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-B9olMQyi.js";import"./index-Dfyq_HAj.js";import"./_baseOrderBy-BTnFMAHT.js";import"./_baseIteratee-YB6gKiVY.js";import"./_baseMap-BQ8tF--O.js";import"./_baseEach-YQyv94F6.js";import"./useQueries-D_stMPeC.js";import"./useInfiniteQuery-BIjxq0oU.js";import"./AclEditor-DBVHvOx_.js";import"./UserSearchBoxV2-CNx6AF6f.js";import"./useDebouncedEffect-C9DoGcNq.js";import"./use-deep-compare-effect.esm-bDex8thB.js";import"./uniq-CaqcideB.js";import"./without-NT-PvWpP.js";import"./UserBadge-ZP5JTHXX.js";import"./SkeletonTable-BgcTNkHb.js";import"./MenuItem-BJhOgCUi.js";import"./Card-BZPVWLl9.js";import"./Chip-BhAQmrv0.js";import"./Select-aab027f3.esm-ClK3n3NS.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-CYpQMMm4.js";import"./TeamBadge-DDt9Kb45.js";import"./SkeletonButton-aT1VkMB9.js";import"./SkeletonInlineBlock-04pSbxC0.js";import"./SkeletonParagraph-DUeQUQ73.js";import"./IconSvgButton-DMhLiDC3.js";import"./FormControlLabel-CMRXKWRo.js";import"./Checkbox-B4sC4_8_.js";import"./SwitchBase-C39Yd_tq.js";import"./useUpdateAcl-BNxd7AFI.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
