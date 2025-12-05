import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-BXzeMfE2.js";import{A as c}from"./AccessRequirementAclEditor-D33Ao7wG.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-FzUXVI0n.js";import"./index-DH-t8Kiq.js";import"./_baseOrderBy-CT1i8K8e.js";import"./_baseIteratee-Tm6Favd6.js";import"./_baseMap-D8qq9A5I.js";import"./_baseEach-CZEl57ws.js";import"./useQueries-BnHuPm1A.js";import"./useInfiniteQuery-CkoFnETB.js";import"./AclEditor-lstwNj2u.js";import"./UserSearchBoxV2-DyL7E7eM.js";import"./useDebouncedEffect-X1eXRoqB.js";import"./use-deep-compare-effect.esm-BQRfrosB.js";import"./uniq-BwR3keRF.js";import"./without-WMuIhKF6.js";import"./UserBadge-Do2tE5cK.js";import"./useUserBundle-DAmTyml3.js";import"./useSuspenseQuery-BZJKG4pU.js";import"./SkeletonTable-CXSlR--N.js";import"./MenuItem-D5IIpJsJ.js";import"./Card-Dnf6cd_L.js";import"./Chip-UqxHwarS.js";import"./Select-aab027f3.esm-CGPWK42c.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-Ck6Re7PJ.js";import"./TeamBadge-0ClZ8pqL.js";import"./SkeletonButton-BdVaI5NA.js";import"./SkeletonInlineBlock-Bcviv4QT.js";import"./SkeletonParagraph-Bd7FVxmI.js";import"./IconSvgButton-3HbxLABY.js";import"./FormControlLabel-DwTdM1uL.js";import"./Checkbox-C7nauaBm.js";import"./SwitchBase-Ygh_CPfi.js";import"./useUpdateAcl-DBQ5oNCd.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
