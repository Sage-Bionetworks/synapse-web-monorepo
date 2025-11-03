import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-kh7i1csa.js";import{A as c}from"./AccessRequirementAclEditor-BGD3JEqG.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-C0APFYXT.js";import"./index-BmXyVNEx.js";import"./_baseOrderBy-CqcX2iUX.js";import"./_baseIteratee-CNSij9QJ.js";import"./_baseMap-BsEQLRd5.js";import"./_baseEach-C-q0c1u0.js";import"./useQueries-gSpjMszZ.js";import"./useInfiniteQuery-DYbKlyxH.js";import"./AclEditor-B0gvTzNS.js";import"./UserSearchBoxV2-Ca-x9gNQ.js";import"./useDebouncedEffect-TX9PC0FH.js";import"./use-deep-compare-effect.esm-B88DIzUC.js";import"./uniq-C6C8K34y.js";import"./without-B_273GKB.js";import"./UserBadge-CdRmIen3.js";import"./SkeletonTable-BqcwQAxC.js";import"./MenuItem-CfQGt1HR.js";import"./Card-CcySjyv2.js";import"./Chip-BOVRxSkP.js";import"./Select-aab027f3.esm-CSUHZq12.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-lWvXpb5L.js";import"./TeamBadge-Cl2ueHwO.js";import"./SkeletonButton-B_CN37W2.js";import"./SkeletonInlineBlock-ClnumZW6.js";import"./SkeletonParagraph-BnqUYHvv.js";import"./IconSvgButton-B0BhcpsN.js";import"./FormControlLabel-BdtGU7On.js";import"./Checkbox-BwE9-nDN.js";import"./SwitchBase-jMUczUFb.js";import"./useUpdateAcl-CqY_X4rJ.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
