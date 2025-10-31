import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-SFoYirDz.js";import{A as c}from"./AccessRequirementAclEditor-BuW4uA7D.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-DvvBY_ie.js";import"./index-CPHx5Zd7.js";import"./_baseOrderBy-DPfTpwXq.js";import"./_baseIteratee-3mtgIhyy.js";import"./_baseMap-CF5SXoQH.js";import"./_baseEach-Dvvfy_q_.js";import"./useQueries-wygqzh_8.js";import"./useInfiniteQuery-BXG3TdfN.js";import"./AclEditor-DJnYOMU-.js";import"./UserSearchBoxV2-CgrXnVln.js";import"./useDebouncedEffect-CSXLwZhB.js";import"./use-deep-compare-effect.esm-CucFAbzx.js";import"./uniq-BBRbUiEP.js";import"./without-5Jyro_ef.js";import"./UserBadge-DEHXVbtz.js";import"./SkeletonTable-Drqg7wxh.js";import"./MenuItem-CfJpQ_dM.js";import"./Card-CkGOMELO.js";import"./Chip-05FYIvnY.js";import"./Select-aab027f3.esm-hNKGDf6H.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-QF8a2JC_.js";import"./TeamBadge-cIc67SuS.js";import"./SkeletonButton-Di0Yg_Uv.js";import"./SkeletonInlineBlock-DrZRW3Px.js";import"./SkeletonParagraph-D_k7-Stv.js";import"./IconSvgButton-Cqf--SKI.js";import"./FormControlLabel-BdI7Ynze.js";import"./Checkbox-C0ba4mce.js";import"./SwitchBase-B1PJBJjS.js";import"./useUpdateAcl-DsaBTG8W.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
