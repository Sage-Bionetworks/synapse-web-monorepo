import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-CQJI7H2t.js";import{A as c}from"./AccessRequirementAclEditor-CjeiSgz-.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-DYyM5LI2.js";import"./index-DqkU7ALG.js";import"./_baseOrderBy-Bxe_T148.js";import"./_baseIteratee-5cMs_epi.js";import"./_baseMap-DrS9-FBW.js";import"./_baseEach-DN0mH8Et.js";import"./useQueries-DxTHEh5Q.js";import"./useInfiniteQuery-D6F9oIjz.js";import"./AclEditor-C8ucxRII.js";import"./UserSearchBoxV2-DqBr4OoN.js";import"./useDebouncedEffect-BKWMUdzi.js";import"./use-deep-compare-effect.esm-BUsAUVzD.js";import"./uniq-C8Thh210.js";import"./without-Myf_x1iq.js";import"./UserBadge-Dyq7f4N_.js";import"./useUserBundle-BJxyK2Lo.js";import"./useSuspenseQuery-Bc-UZawL.js";import"./SkeletonTable-939R3x-7.js";import"./MenuItem-CsWn5GfW.js";import"./Card-yxllXAz0.js";import"./Chip-CsTJhxo4.js";import"./Select-aab027f3.esm-DAjKwnsf.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BTfCX5KN.js";import"./TeamBadge-DsBkcbTI.js";import"./SkeletonButton-DUugX30x.js";import"./SkeletonInlineBlock-BCuuGuk5.js";import"./SkeletonParagraph-oxsYr-A_.js";import"./IconSvgButton-1JWsMYgH.js";import"./FormControlLabel-KQaj4uUj.js";import"./Checkbox-DjMZlVKr.js";import"./SwitchBase-24TTnX7U.js";import"./useUpdateAcl-9XHfJ9kB.js";const pe={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
