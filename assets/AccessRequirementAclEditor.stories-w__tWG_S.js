import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-DDhTpaiN.js";import{A as c}from"./AccessRequirementAclEditor-XXmmQTZS.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-sF7fsUeM.js";import"./index-CbHlJG0N.js";import"./_baseOrderBy-43vKHSJN.js";import"./_baseIteratee-S_bIqSpZ.js";import"./_baseMap-AibsRsd1.js";import"./_baseEach-Cc-rW067.js";import"./useQueries-CU3GYIqx.js";import"./useInfiniteQuery-WylDUJuR.js";import"./AclEditor-B3cLIjv3.js";import"./UserSearchBoxV2-CYYvEmz0.js";import"./useDebouncedEffect-BRDMJwJK.js";import"./use-deep-compare-effect.esm-DB6_UhnX.js";import"./uniq-1Rzl_xO6.js";import"./without-yW0TvHHh.js";import"./UserBadge-1GmJuGEP.js";import"./useUserBundle-JI9M20M0.js";import"./useSuspenseQuery-B6kRqu6j.js";import"./SkeletonTable-ChlY7W2j.js";import"./MenuItem-XgALiosb.js";import"./Card-3X1jzd0p.js";import"./Chip-r9VwJov-.js";import"./Select-aab027f3.esm-DKL7Ov-k.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-DVVYcUli.js";import"./TeamBadge-DsfWRL7s.js";import"./SkeletonButton-B-QMOvKw.js";import"./SkeletonInlineBlock-CdyxEaU6.js";import"./SkeletonParagraph-Cj3UMufw.js";import"./IconSvgButton-D-u-590X.js";import"./FormControlLabel-CaY2KlcA.js";import"./Checkbox-DvfxPkUW.js";import"./SwitchBase-D8330Uqr.js";import"./useUpdateAcl-BA5yCfwK.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
