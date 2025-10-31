import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-DkJtXMGY.js";import{A as c}from"./AccessRequirementAclEditor-BZkqklG0.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-WV52cU1E.js";import"./index-BhkdXidL.js";import"./_baseOrderBy-B-3aV5TD.js";import"./_baseIteratee-fqRe5hEX.js";import"./_baseMap-lB5D5faS.js";import"./_baseEach-BWCq4nkB.js";import"./useQueries-Z-3gwq5U.js";import"./useInfiniteQuery-iYy68X6j.js";import"./AclEditor-BwJwsBCU.js";import"./UserSearchBoxV2-q9HR-Gu6.js";import"./useDebouncedEffect-CbC68BJS.js";import"./use-deep-compare-effect.esm-aTxZvlU9.js";import"./uniq-BY50vU0D.js";import"./without-BNFOWFRc.js";import"./UserBadge-D10KGNES.js";import"./SkeletonTable-Boy2sN_O.js";import"./MenuItem-__VZzdvD.js";import"./Card-BrdkgB5x.js";import"./Chip-C5Eg6zQf.js";import"./Select-aab027f3.esm-BlNTofID.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-yADcIefg.js";import"./TeamBadge-Cz3XVBkB.js";import"./SkeletonButton-Wvy1B_g_.js";import"./SkeletonInlineBlock-BZs9NYqd.js";import"./SkeletonParagraph-D2M_qyIo.js";import"./IconSvgButton-DDBMYQHe.js";import"./FormControlLabel-BtRUWfK0.js";import"./Checkbox-1S1SsZEO.js";import"./SwitchBase-LVCk0Af2.js";import"./useUpdateAcl-ChYObCJ-.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
