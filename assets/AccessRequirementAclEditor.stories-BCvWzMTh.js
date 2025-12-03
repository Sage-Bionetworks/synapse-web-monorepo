import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-C0ErQzQQ.js";import{A as c}from"./AccessRequirementAclEditor-C3MueaKX.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-C8oIbdHR.js";import"./index-CXBiRWT3.js";import"./_baseOrderBy-BwYmr6BE.js";import"./_baseIteratee-BUndEki0.js";import"./_baseMap-BLf9ASmK.js";import"./_baseEach-SGImkhl7.js";import"./useQueries-DLniHFa7.js";import"./useInfiniteQuery-D92iBfwZ.js";import"./AclEditor-BiIpvETb.js";import"./UserSearchBoxV2-YzY4i8-1.js";import"./useDebouncedEffect-DPVrOdqK.js";import"./use-deep-compare-effect.esm-DqKHiehK.js";import"./uniq-D0WnBq-1.js";import"./without-BujwWr7j.js";import"./UserBadge-BHfpUK-d.js";import"./useUserBundle-Cvm8I5oN.js";import"./useSuspenseQuery-B5vEEZkD.js";import"./SkeletonTable-BS5GIgke.js";import"./MenuItem-C5fdYvEk.js";import"./Card-CxCLAc-d.js";import"./Chip-X7blzzMj.js";import"./Select-aab027f3.esm-CIc1ESqH.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-B9X7uqzO.js";import"./TeamBadge-DNE3Om81.js";import"./SkeletonButton-CiuQHyYv.js";import"./SkeletonInlineBlock-BE6gLgZl.js";import"./SkeletonParagraph-DNevJqyo.js";import"./IconSvgButton-UxbciG9n.js";import"./FormControlLabel-DIoiy-48.js";import"./Checkbox-CwXx_aG3.js";import"./SwitchBase-D3AXOLrZ.js";import"./useUpdateAcl-etFu6wXL.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
