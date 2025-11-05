import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-DNJeJ5iA.js";import{A as c}from"./AccessRequirementAclEditor-C0c2Va9T.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-BJL84sZ9.js";import"./index-CvnLitu3.js";import"./_baseOrderBy-CyGfbCWE.js";import"./_baseIteratee-CpPioSPx.js";import"./_baseMap-DdsroZ9h.js";import"./_baseEach-BNKOyPrU.js";import"./useQueries-BMjBIuDb.js";import"./useInfiniteQuery-Br--10f9.js";import"./AclEditor-rsF_JVT3.js";import"./UserSearchBoxV2-Bn7uqWSl.js";import"./useDebouncedEffect-BN7z__PV.js";import"./use-deep-compare-effect.esm-D3PGmV3S.js";import"./uniq-BSqZ-QXm.js";import"./without-U0AyJbDd.js";import"./UserBadge-DH_o0r3v.js";import"./SkeletonTable-DVr3y68U.js";import"./MenuItem-CT67I_PA.js";import"./Card-hxfs1Pfl.js";import"./Chip-F4DxftXR.js";import"./Select-aab027f3.esm-Cl4cn728.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BTN_iAs4.js";import"./TeamBadge-D9eX9Mpp.js";import"./SkeletonButton-BUOacwJB.js";import"./SkeletonInlineBlock-BeQwzjXN.js";import"./SkeletonParagraph-D6w9BO_7.js";import"./IconSvgButton-BFY8MsKI.js";import"./FormControlLabel-BOTHUCHT.js";import"./Checkbox-CuIt-Arc.js";import"./SwitchBase-DvvguGJm.js";import"./useUpdateAcl-BYi_oA9n.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
