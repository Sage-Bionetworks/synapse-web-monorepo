import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-CuCRNKD2.js";import{A as c}from"./AccessRequirementAclEditor-BcrsRF5s.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-DQ4FszLt.js";import"./index-CSP15YZm.js";import"./_baseOrderBy-CgTIJf-4.js";import"./_baseIteratee-BoekfeUm.js";import"./_baseMap-CSQcD485.js";import"./_baseEach-DxRZKxVw.js";import"./useQueries-D2fWcxPh.js";import"./useInfiniteQuery-CObm4ehU.js";import"./AclEditor-DnHMVYjp.js";import"./UserSearchBoxV2-DVmi9CmH.js";import"./useDebouncedEffect-Cngnx5nI.js";import"./use-deep-compare-effect.esm-DGVAb9fw.js";import"./uniq-D0VY6FGH.js";import"./without-DSQpKr05.js";import"./UserBadge-Bxtk_9hQ.js";import"./SkeletonTable-ChmVFJhE.js";import"./MenuItem-DWis1ABF.js";import"./Card-BDRHdzBD.js";import"./Chip-C_N7BwZ8.js";import"./Select-aab027f3.esm-BCe0stGw.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-BpivlnjU.js";import"./TeamBadge-CPWkxziE.js";import"./SkeletonButton-CaULGpMN.js";import"./SkeletonInlineBlock-BnPEMPpf.js";import"./SkeletonParagraph-DKk5S29D.js";import"./IconSvgButton-GxjZIxaf.js";import"./FormControlLabel-CGTsH9Fv.js";import"./Checkbox-D2e6C1U3.js";import"./SwitchBase-Bbn1ALyw.js";import"./useUpdateAcl-jBmbaTJ2.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
