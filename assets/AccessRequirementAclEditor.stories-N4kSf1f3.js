import{g as I,a as C,M as x,r as i,j as e,B as S,P as k,b as o,c as N}from"./iframe-C2KiuWKW.js";import{A as c}from"./AccessRequirementAclEditor-CP8nQ9x3.js";import"./index-r8ZA1smB.js";import"./useAccessRequirements-DjXTovFl.js";import"./index-Bxj6rqQ-.js";import"./_baseOrderBy-Djdm14sR.js";import"./_baseIteratee-CjIdJ6hr.js";import"./_baseMap-DitX6qHD.js";import"./_baseEach-DRvbLTSB.js";import"./useQueries-DR2SNVW2.js";import"./useInfiniteQuery-BrhgLvSC.js";import"./AclEditor-DlWBLO31.js";import"./UserSearchBoxV2-DHZw3wi6.js";import"./useDebouncedEffect-pMqXMO0p.js";import"./use-deep-compare-effect.esm-BLwPhTf4.js";import"./uniq-QrSgfjXv.js";import"./without-BiEKjebO.js";import"./UserBadge-B_kScQks.js";import"./SkeletonTable-PHS1izgY.js";import"./MenuItem-SU_iXbyZ.js";import"./Card-SPt2m4TT.js";import"./Chip-CHQONIC6.js";import"./Select-aab027f3.esm-R2NyVd_n.js";import"./defineProperty-CegpTSss.js";import"./UserOrTeamBadge-D-E6BsbP.js";import"./TeamBadge-DZNJg7UW.js";import"./SkeletonButton-CRFxONAo.js";import"./SkeletonInlineBlock-B39hqJKo.js";import"./SkeletonParagraph-D5MYRaWu.js";import"./IconSvgButton-CiEWllFD.js";import"./FormControlLabel-D_3YwViS.js";import"./Checkbox-B3nGy5Ij.js";import"./SwitchBase-Cjz94MqM.js";import"./useUpdateAcl-jXArin15.js";const ie={title:"Governance/AccessRequirementAclEditor",component:c,render:function(O){const[M,a]=i.useState(!1),n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:()=>{var m;a(!0),(m=n.current)==null||m.save()},variant:"contained",disabled:M,children:"Save ACL"}),e.jsx(k,{sx:{mx:"auto",p:"44px",maxWidth:"750px"},children:e.jsx(c,{...O,ref:n,onSaveComplete:()=>a(!1)})})]})}},r={args:{accessRequirementId:x.id},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},s={args:{accessRequirementId:String(N)},parameters:{stack:"mock",msw:{handlers:[...I(o),C(o)]}}},t={args:{accessRequirementId:"9602671"},parameters:{stack:"development"}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
