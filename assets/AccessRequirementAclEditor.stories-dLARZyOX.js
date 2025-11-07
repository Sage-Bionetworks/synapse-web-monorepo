import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-CeAgldvM.js";import{A as c}from"./AccessRequirementAclEditor-SRXoLEG3.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-CBj3dnrk.js";import"./index-T3jL32n1.js";import"./_baseOrderBy-DWYozN8M.js";import"./_baseIteratee-CcVHlHZ8.js";import"./_baseMap-CxwWUgmR.js";import"./_baseEach-yKkNUWZi.js";import"./useQueries-DoFZKxYm.js";import"./useInfiniteQuery-U-CVtIRK.js";import"./AclEditor-BZGrZ85j.js";import"./UserSearchBoxV2-BaOmFvEt.js";import"./useDebouncedEffect-B7NND8fv.js";import"./use-deep-compare-effect.esm-DVfJ6rRp.js";import"./uniq-Bz5l45sv.js";import"./without-BBqud4Jp.js";import"./UserBadge-CaFI6Pfa.js";import"./SkeletonTable-D9BGXwSf.js";import"./MenuItem-DcOlOGUi.js";import"./Card-CNJbGh-i.js";import"./Chip-D7iOhvvK.js";import"./Select-aab027f3.esm-CK4Y9k7j.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-Os1DBzp2.js";import"./TeamBadge-P8pRmk83.js";import"./SkeletonButton-BvXrs4_f.js";import"./SkeletonInlineBlock-n6Wdtn3U.js";import"./SkeletonParagraph-DsPtfc6R.js";import"./IconSvgButton-DMvhYcvg.js";import"./FormControlLabel-OfnNXanI.js";import"./Checkbox-HIkAiuBf.js";import"./SwitchBase-IEc58BLQ.js";import"./useUpdateAcl-CeZ77ZQ2.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
