import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-BwBHmtLn.js";import{A as c}from"./AccessRequirementAclEditor-Jl7-v9-X.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-sZxI1kmT.js";import"./index-Cofbk_Be.js";import"./_baseOrderBy-CzNvCpJu.js";import"./_baseIteratee-DYrIx3nY.js";import"./_baseMap-7X1852e3.js";import"./_baseEach-BeAKbU8I.js";import"./useQueries-D_h17kYr.js";import"./useInfiniteQuery-CJ62jRAa.js";import"./AclEditor-C4Icie9t.js";import"./UserSearchBoxV2-DaWL0FRE.js";import"./useDebouncedEffect-DpMVCPWi.js";import"./use-deep-compare-effect.esm-B5pmyylT.js";import"./uniq-VDdpS32t.js";import"./without-DVxAInET.js";import"./UserBadge-BD5Fxkmm.js";import"./SkeletonTable-CwWx9Hg9.js";import"./MenuItem-CkdRDM7m.js";import"./Card-CWfuhv8s.js";import"./Chip-DeqIQwfV.js";import"./Select-aab027f3.esm-DjpxoWsa.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-DZFiBwXk.js";import"./TeamBadge-BVqTdxjR.js";import"./SkeletonButton-BTCaeByw.js";import"./SkeletonInlineBlock-ZHAchM_I.js";import"./SkeletonParagraph-CvcuNn1V.js";import"./IconSvgButton-RsII1qst.js";import"./FormControlLabel-Bd9SHTvK.js";import"./Checkbox-CrrPL_ha.js";import"./SwitchBase-DfrfkHUB.js";import"./useUpdateAcl-hl5Dtndw.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
