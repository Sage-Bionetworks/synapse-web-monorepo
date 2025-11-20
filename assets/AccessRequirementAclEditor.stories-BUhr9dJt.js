import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-LzC64RFw.js";import{A as c}from"./AccessRequirementAclEditor-BP-hl-ja.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-DDhz0ISO.js";import"./index-9jkv6pAo.js";import"./_baseOrderBy-CqqbnClz.js";import"./_baseIteratee-BW2oG4i8.js";import"./_baseMap-BQ8I50xV.js";import"./_baseEach-BhZ0WINl.js";import"./useQueries-DBFhpEhc.js";import"./useInfiniteQuery-DAwo9HMT.js";import"./AclEditor-DzM9OJfe.js";import"./UserSearchBoxV2-CA1b-8JK.js";import"./useDebouncedEffect-BCiJ5I7r.js";import"./use-deep-compare-effect.esm-pDleGhR2.js";import"./uniq-BefGSpfh.js";import"./without-6fmx_9-y.js";import"./UserBadge-DAx78NA6.js";import"./SkeletonTable-B5BlJQjs.js";import"./MenuItem-D_lpwZtj.js";import"./Card-N0RtOQAA.js";import"./Chip-Ct1mISe7.js";import"./Select-aab027f3.esm-xng_5ekx.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-zWtNR6B6.js";import"./TeamBadge-CHlfG-eA.js";import"./SkeletonButton-CdCi0Vv2.js";import"./SkeletonInlineBlock-BId9Rt5h.js";import"./SkeletonParagraph-ClnTvL1Q.js";import"./IconSvgButton-DasnPpX_.js";import"./FormControlLabel-DdwLBMPg.js";import"./Checkbox-DFkw0--6.js";import"./SwitchBase-BcH_m2kQ.js";import"./useUpdateAcl-DxAhVzvV.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
