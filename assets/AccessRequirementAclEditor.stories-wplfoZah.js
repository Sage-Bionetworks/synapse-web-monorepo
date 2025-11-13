import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-DIMEjUPI.js";import{A as c}from"./AccessRequirementAclEditor-C0lPGvlo.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-B825fCzp.js";import"./index-DFMTwDmD.js";import"./_baseOrderBy-BhOI-trZ.js";import"./_baseIteratee-CwMjI5sT.js";import"./_baseMap-PuS_nOj-.js";import"./_baseEach-afQoECL1.js";import"./useQueries-CAMB7h7q.js";import"./useInfiniteQuery-B3QbwDE7.js";import"./AclEditor-BM0hAcuI.js";import"./UserSearchBoxV2-B9sTkcA0.js";import"./useDebouncedEffect-DaLmThxq.js";import"./use-deep-compare-effect.esm-CscDK2fK.js";import"./uniq-DbRT9xcm.js";import"./without-djj7wUZg.js";import"./UserBadge-ewXLXfpL.js";import"./SkeletonTable-DUsfALmI.js";import"./MenuItem-BkjCu_eC.js";import"./Card-DixV1MtV.js";import"./Chip-ZO2rUNAI.js";import"./Select-aab027f3.esm-BIth0W2N.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BN9kFwEt.js";import"./TeamBadge-Bc8o9zsp.js";import"./SkeletonButton-ojrK8vH7.js";import"./SkeletonInlineBlock-Dg59gf8O.js";import"./SkeletonParagraph-DE5PaDJj.js";import"./IconSvgButton-ndEvh0kz.js";import"./FormControlLabel-t4K93ayt.js";import"./Checkbox-B0OQN17i.js";import"./SwitchBase-mG08y7Oi.js";import"./useUpdateAcl-CKKUY2j0.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
