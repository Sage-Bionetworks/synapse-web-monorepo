import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-C0_MGelw.js";import{A as c}from"./AccessRequirementAclEditor-JggqpjOr.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-DUOt5YsA.js";import"./index-B6X4B_B8.js";import"./_baseOrderBy-QzxGE8cT.js";import"./_baseIteratee-DJkPjYy-.js";import"./_baseMap-BujdLhHW.js";import"./_baseEach-C-Rt3ZUt.js";import"./useQueries-D7fqOE-j.js";import"./useInfiniteQuery-G1IM-AGg.js";import"./AclEditor-DKamoYc1.js";import"./UserSearchBoxV2-BKIUBB2r.js";import"./useDebouncedEffect-DKIHIScD.js";import"./use-deep-compare-effect.esm-D2R_anRu.js";import"./uniq-Bja6NdAf.js";import"./without-BQkaKeqd.js";import"./UserBadge-Bzjens13.js";import"./SkeletonTable-DS1wvkaV.js";import"./MenuItem-VpU5uB21.js";import"./Card-CXieohvt.js";import"./Chip-DoXtLwjl.js";import"./Select-aab027f3.esm-B1_qkWL_.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BrKK8C6f.js";import"./TeamBadge-vCle8XDk.js";import"./SkeletonButton-DjhR7sxh.js";import"./SkeletonInlineBlock-yTERZu3L.js";import"./SkeletonParagraph-BpdEaVGd.js";import"./IconSvgButton-CiAMt4kW.js";import"./FormControlLabel-CGDmQ30x.js";import"./Checkbox-AKt-q5ZS.js";import"./SwitchBase-BZXMhFqc.js";import"./useUpdateAcl-CeIMR5h7.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
